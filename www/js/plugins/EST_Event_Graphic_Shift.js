/*:
@plugindesc This plugin can shift event graphic by x pixel.
<EST_GRAPHIC_SHIFT>
@author Estriole

@param RemoveBlendAndToneCheck
@desc if this set to true... will remove the blend and tone feature (true/false)
@default false

@help
 ■ Information      ╒══════════════════════════╛
 EST - Event Graphic Shift EVO
 Version: 1.6
 By Estriole
 File name: EST_Event_Graphic_Shift.js

 ■ Introduction     ╒══════════════════════════╛
    Have charset that need the graphic to be shifted by x pixel?
 for example a building with the door not exactly in the middle of the
 event graphic. or you want to flip your graphic horizontally / vertically? 
 or you want to rotate the graphic?...just use this plugin

 ■ Features         ╒══════════════════════════╛
  - shift graphic x
  - shift graphic y
  - shift graphic z
  - flip graphic horizontally
  - flip graphic vertically
  - rotate graphic
  - set graphic transparency
  - set graphic zoom / scale
  - set blend / tone color (NOT WORKING IF USING CHROME)

 ■ Changelog       ╒══════════════════════════╛
 v1.0 2015.10.29           Initial Release
 v1.1 2015.10.30           improved regexp so we can also use , to separate the x and y
         						   fix bug when erasing event.
 v1.2 2015.11.01     -     fix crash when no event page met condition...
 v1.3 2015.11.12     -     add z to the graphic shift. so you can make event that on top of other event.
                           fix regexp so it recognize <graphic_shift: 1,2,3> (coma without spaces)
 v1.4 2015.11.23     -     > ability to flip / rotate the graphic. using comment tag: 
                           > ability to flip / rotate the graphic using script call / plugin call:
 v1.5 2015.11.23     -     > ability to change graphic offset x and y using scriptcall / plugin call:
 v1.6 2015.12.01     -     > ability to change graphic offset z using scriptcall / plugin call:
                           > Notetags/Commenttags to change event zoom (default zoom too), scale x, scale y
                           > ability to change event zoom / scale x / scale y using scriptcall / plugin call:
                           > ability to change event opacity
                           Below CAN be turned OFF if you don't use it...
                           > ability to change blend color(warning: chrome not supported)
                           > ability to change tone color (warning: chrome not supported)
 v1.7 2015.12.18     -     > fix bug with graphic opacity...
 
 ■ Plugin Download ╒══════════════════════════╛
 https://www.dropbox.com/s/i1sl7qzpyirmutd/EST_Event_Graphic_Shift.js?dl=0

 ■ How to use       ╒══════════════════════════╛  
 add Comment at the event page you want the graphic to shift
 <graphic_shift: offsetx offsety offset z>
 	example:
 	<graphic_shift: 32 -32, 2>
	 	<graphic_shift: 32, -32> (from v1.1 this work too)
 		<graphic_shift: 32  , -32> (from v1.1 this work too)
 		<graphic_shift: 32  ,-32> (from v1.1 this work too)

 	will shift the graphic x by +32 pixel (go to right 32 pixel) 
 	will shift the graphic y by -32 pixel (go to down 32 pixel)
 	will shift the graphic z by adding 2 z level so it will be on top of event with lower z value
 
 tips by default event z = event priority type * 2 + 1
     > below character = 0 => 0*2+1 = 3
     > same as character = 1 => 1*2+1 = 3
     > above character = 2 => 2*2+1 = 5
	 > [Tile] Event (ignore above 3 setting) = 0 => 0*2+1 = 1
 so if you add 2... the final z level will be added by value from default event z
 if you want to reduce z level. use negative value.

 some z level references:
 shadow = 6
 balloon = 7
 animation = 8
 mouse destination sprite = 9
 source : rpg_sprites.js 

 if you only want to shift x value you could do fine with not entering the offsety value
 or offset z.
 	example:
 	<graphic_shift: 32>

 > new comment tag for flipping / rotating event graphic
 give comment tag:
   <graphic_flip_h> => flip graphic horizontally
   <graphic_flip_v> => flip graphic vertically
   <graphic_rotation: x> => rotate graphic by x degree
 
 > ability to flip / rotate the graphic using script call / plugin call:
 script call:
    this.thisEventChangeFlipH(true); //=> will flip graphic horizontally
    this.thisEventChangeFlipH(false); //=> will cancel flip graphic horizontally
    this.thisEventChangeFlipV(true); //=> will flip graphic vertically
    this.thisEventChangeFlipV(false); //=> will cancel flip graphic vertically
    this.thisEventChangeRotation(x); //=> will rotate graphic by x degree
 plugin call:
    this_event_change_fliph true //=> will flip graphic horizontally
    this_event_change_fliph false //=> will cancel flip graphic horizontally
    this_event_change_flipv true //=> will flip graphic vertically
    this_event_change_flipv false //=> will cancel flip graphic vertically
    this_event_change_rotation x //=> will rotate graphic by x degree
 > ability to change graphic offset x and y using scriptcall / plugin call:
 script call:
    this.thisEventChangeOffsetX(value); //=> will set offset x to value
    this.thisEventChangeOffsetY(value); //=> will set offset y to value
 plugin call:
    this_event_change_offsetx value; //=> will set offset x to value
    this_event_change_offsety value; //=> will set offset y to value

 > ability to change graphic offset z using scriptcall / plugin call:
 script call:
    this.thisEventChangeOffsetZ(value); //=> will set offset z to value
 plugin call:
    this_event_change_offsetz value; //=> will set offset z to value
                           
 > Notetags/Commenttags to change event zoom (default zoom too), scale x, scale y
 to make all event in a map to have specific default zoom level... 
 give notetags to MAP NOTE:
 <event_zoom: value>
 will zoom all map event [value] times from normal (can be changed individually
 by comment tag / script call / plugin call)
                           
 to change specific event page zoom level give comment tag:
 <graphic_zoom: value> -> will zoom event by [value] times (both x and y affected)
 <graphic_scalex: value> -> will only affect x zoom (become fat/thin :D)
 <graphic_scaley: value> -> will only affect y zoom (become short/tall :D)
                           
 > ability to change event zoom /scale x / scale y using scriptcall / plugin call:
 script call:
 this.thisEventChangeScaleX(value);
 this.thisEventChangeScaleY(value);
 this.thisEventChangeZoom(value);
 change value to any number. if you want to use decimal. use
 1.5 instead of 1,5

 plugin call:
 this_event_change_scalex value
 this_event_change_scaley value
 this_event_change_zoom value
 change value to any number. if you want to use decimal. use
 1.5 instead of 1,5

 > comment tag to set event page opacity
 <graphic_opacity: value>
 change value to number between 0-255 (255 is solid, 0 is transparent) 
 
 > ability to change event opacity using script call / plugin call:
 script call:
 this.thisEventChangeOpacity(value);
 plugin call:
 this_event_change_opacity value

 will set event opacity to value

 WARNING !!! BELOW IS NOT SUPPORTED IN CHROME... it will show black image instead.
 THIS FEATURE CAN ALSO BE TURNED OFF IF YOU DON'T WANT TO USE IT... CHANGE IN PLUGIN PARAMETER 
 IF YOU TURN IT OFF THAT MEAN LESS CHECK AND FASTER SPEED.

 > comment tag to set event page blend color (warning: chrome not supported)
 <graphic_blend: red, green, blue, alpha>
 red => 0-255 (need alpha to show effect)
 green => 0-255 (need alpha to show effect)
 blue => 0-255 (need alpha to show effect)
 alpha => 0-255 (strength of the blend... lower value will make it not seen)

 > ability to change blend color by script call / plugin call(warning: chrome not supported)
 script call:
 this.thisEventChangeBlend(red,green,blue,alpha)
 plugin call:
 this_event_change_blend red green blue alpha

 red => 0-255 (need alpha to show effect)
 green => 0-255 (need alpha to show effect)
 blue => 0-255 (need alpha to show effect)
 alpha => 0-255 (strength of the blend... lower value will make it not seen)

 > comment tag to set event page tone color (warning: chrome not supported)
 <graphic_tone: red, green, blue, alpha>
 red => 0-255 (need alpha to show effect)
 green => 0-255 (need alpha to show effect)
 blue => 0-255 (need alpha to show effect)
 alpha => 0-255 (strength of the blend... lower value will make it not seen) 

 > ability to change tone color via script call / plugin call (warning: chrome not supported)
 script call:
 this.thisEventChangeTone(red,green,blue,alpha)
 plugin call:
 this_event_change_tone red green blue alpha
 red => 0-255 (need alpha to show effect)
 green => 0-255 (need alpha to show effect)
 blue => 0-255 (need alpha to show effect)
 alpha => 0-255 (strength of the blend... lower value will make it not seen)

 ■ Dependencies     ╒══════════════════════════╛
 None

 ■ Compatibility    ╒══════════════════════════╛
 I'm new in JS... and MV is new engine... so i cannot say for sure. 
 but it should be compatible with most things. 

 ■ Parameters       ╒══════════════════════════╛
 None

 ■ License          ╒══════════════════════════╛
 Free to use in all project (except the one containing pornography)
 as long as i credited (ESTRIOLE). 

 ■ Support          ╒══════════════════════════╛
 While I'm flattered and I'm glad that people have been sharing and 
 asking support for scripts in other RPG Maker communities, I would 
 like to ask that you please avoid posting my scripts outside of where 
 I frequent because it would make finding support and fixing bugs 
 difficult for both of you and me.
   
 If you're ever looking for support, I can be reached at the following:
 [ http://forums.rpgmakerweb.com/ ]
 pm me : estriole

 ■ Author's Notes   ╒══════════════════════════╛
 This is part of the EST - DECOR AND BUILD SERIES.
*/

var EST = EST || {};
EST.Graphic_Shift = EST.Graphic_Shift || {};

EST.Graphic_Shift.param = $plugins.filter(function(p) { 
  return p.description.contains('<EST_GRAPHIC_SHIFT>'); })[0].parameters;

EST.Graphic_Shift.RemoveBlendAndToneCheck = EST.Graphic_Shift.param['RemoveBlendAndToneCheck'];

// alias method to make when the page is setup. set all the size and trigger
var est_event_graphic_shift_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings
Game_Event.prototype.setupPageSettings = function() {
  if (!this.page()) 
    return est_event_graphic_shift_Game_Event_setupPageSettings.call(this);
  this._graphicNeedRefresh = true;
  var shift = this.get_event_shift();
  this._graphicOffsetX = shift && shift[0] ? Number(shift[0]) : 0;
  this._graphicOffsetY = shift && shift[1] ? Number(shift[1]) : 0;
  this._graphicOffsetZ = shift && shift[2] ? Number(shift[2]) : 0;
  this._evFlipH = this.get_event_flipH();
  this._evFlipV = this.get_event_flipV();
  this._evRot = this.get_event_rot();
  if(this.get_event_default_zoom())
  {
  this._scaleX = this.get_event_default_zoom();
  this._scaleY = this.get_event_default_zoom();        
  }
  if(this.get_event_zoom()){
  this._scaleX = this.get_event_zoom();
  this._scaleY = this.get_event_zoom();    
  }
  if(this.get_event_scaleX()) this._scaleX = this.get_event_scaleX();
  if(this.get_event_scaleY()) this._scaleY = this.get_event_scaleY();
  this._opacity = this.get_event_opacity() ? this.get_event_opacity() : 255;
  if(EST.Graphic_Shift.RemoveBlendAndToneCheck.toUpperCase() === "TRUE")
    return est_event_graphic_shift_Game_Event_setupPageSettings.call(this);
  if(this.get_event_blend()) this._blendColor = this.get_event_blend();
  if(this.get_event_tones()) this._colorTone = this.get_event_tones();
  est_event_graphic_shift_Game_Event_setupPageSettings.call(this);
};

// alias method Sprite_Character updatePosition to shift the event graphic if have comment tag
var est_graphic_shift_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
    est_graphic_shift_Sprite_Character_updatePosition.call(this);
    if(!(this._character instanceof Game_Event)) return;
    this.x += this._character._graphicOffsetX
    this.y += this._character._graphicOffsetY
    this.z += this._character._graphicOffsetZ
    if(!this._character._graphicNeedRefresh) return;
    this.updateGraphicSpecial();
};

Sprite_Character.prototype.updateGraphicSpecial = function(){
      if(this._character._evFlipH && !this._flippedH)
      {
        this._flippedH = true;
        this.scale.x = -this.scale.x
      }
      if(!this._character._evFlipH && this._flippedH)
      {
        this._flippedH = false;
        this.scale.x = -this.scale.x
      }
      if(this._character._evFlipV && !this._flippedV)
      {
        this._flippedV = true;
        this.scale.y = -this.scale.y
      }
      if(!this._character._evFlipV && this._flippedV)
      {
        this._flippedV = false;
        this.scale.y = -this.scale.y
      }
      this.rotation = this._character._evRot * Math.PI / 180;
      // >> zoom sprite
      if(this.savedScaleX)
        this.scale.x = this.scale.x / this.savedScaleX;
      if(this.savedScaleY)
        this.scale.y = this.scale.y / this.savedScaleY;
      if(this._character._scaleX)
      {
        this.scale.x = this.scale.x * this._character._scaleX;
        this.savedScaleX = this._character._scaleX;        
      }
      if(this._character._scaleY)
      {
        this.scale.y = this.scale.y * this._character._scaleY;
        this.savedScaleY = this._character._scaleY;        
      }

      if(EST.Graphic_Shift.RemoveBlendAndToneCheck.toUpperCase() === "TRUE")
        return;
      // >> blending
      if(this._character._blendColor)
      {        
      var blend = this._character._blendColor;        
      this._blendColor[0] = blend[0] ? Number(blend[0]): 0; // Red
      this._blendColor[1] = blend[1] ? Number(blend[1]): 0; // Green
      this._blendColor[2] = blend[2] ? Number(blend[2]): 0; // Blue
      this._blendColor[3] = blend[3] ? Number(blend[3]): 0; // Alpha
      }
      // >> color tone
      if(this._character._colorTone)
      {        
      var tone = this._character._colorTone;        
      this._colorTone[0] = tone[0] ? Number(tone[0]): 0; // Red
      this._colorTone[1] = tone[1] ? Number(tone[1]): 0; // Green
      this._colorTone[2] = tone[2] ? Number(tone[2]): 0; // Blue
      this._colorTone[3] = tone[3] ? Number(tone[3]): 0; // Alpha
      }
}

var est_graphic_shift_Sprite_Character_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
  est_graphic_shift_Sprite_Character_setCharacter.call(this,character)
  if(!(this._character instanceof Game_Event)) return;
  this.updateGraphicSpecial();
};


Game_Event.prototype.get_event_default_zoom = function() {
  var def = null;
  if($dataMap)
  {
    var note = $dataMap.note;
    if(note.match(/<event_zoom:\s*(.*)>/im)) var def = Number(note.match(/<event_zoom:\s*(.*)>/im)[1]);
  }
  return def;
};

Game_Event.prototype.get_event_tones = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_tone:\s*(.*)>/im)) var shift = comment.match(/<graphic_tone:\s*(.*)>/im)[1].split(/(?:\s+,\s+|,\s+|\s+,|\s+|,)/);
  return shift;
};

Game_Event.prototype.get_event_blend = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_blend:\s*(.*)>/im)) var shift = comment.match(/<graphic_blend:\s*(.*)>/im)[1].split(/(?:\s+,\s+|,\s+|\s+,|\s+|,)/);
  return shift;
};

Game_Event.prototype.get_event_opacity = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_opacity:\s*(.*)>/im)) var shift = Number(comment.match(/<graphic_opacity:\s*(.*)>/im)[1]);
  return shift;
};

Game_Event.prototype.get_event_zoom = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_zoom:\s*(.*)>/im)) var shift = Number(comment.match(/<graphic_zoom:\s*(.*)>/im)[1]);
  return shift;
};

Game_Event.prototype.get_event_scaleX = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_scale_x:\s*(.*)>/im)) var shift = Number(comment.match(/<graphic_scale_x:\s*(.*)>/im)[1]);
  return shift;
};

Game_Event.prototype.get_event_scaleY = function() {
  var shift = null;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_scale_y:\s*(.*)>/im)) var shift = Number(comment.match(/<graphic_scale_y:\s*(.*)>/im)[1]);
  return shift;
};

Game_Event.prototype.get_event_rot = function() {
  var shift = 0;
  var comment = "";
  if(!this.page()) return shift;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_rotation:\s*(.*)>/im)) var shift = comment.match(/<graphic_rotation:\s*(.*)>/im)[1];
  return Number(shift);
};

Game_Event.prototype.get_event_flipH = function() {
  var comment = "";
  if(!this.page()) return false;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_flip_h>/im)) return true;
  return false;
};

Game_Event.prototype.get_event_flipV = function() {
  var comment = "";
  if(!this.page()) return false;
  var pagelist = this.page().list;
  for (var cmd of pagelist)
  {
    if(cmd.code == 108)   comment += cmd.parameters[0] + "\n";
    if(cmd.code == 408)   comment += cmd.parameters[0] + "\n";
  }
  if(comment.match(/<graphic_flip_v>/im)) return true;
  return false;
};
// Game Event new method to grab event shift notetags
Game_Event.prototype.get_event_shift = function() {
	var shift = null;
	var comment = "";
	if(!this.page()) return shift;
	var pagelist = this.page().list;
	for (var cmd of pagelist)
	{
		if(cmd.code == 108) 	comment += cmd.parameters[0] + "\n";
		if(cmd.code == 408) 	comment += cmd.parameters[0] + "\n";
	}
	if(comment.match(/<graphic_shift:\s*(.*)>/im)) var shift = comment.match(/<graphic_shift:\s*(.*)>/im)[1].split(/(?:\s+,\s+|,\s+|\s+,|\s+|,)/);
	return shift;
};

Game_Interpreter.prototype.thisEventChangeOffsetX = function(offX){
  if (offX.constructor == Array) offX = Number(offX[0])
  var ev = $gameMap._events[this._eventId];
  ev._graphicOffsetX = Number(offX);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeOffsetY = function(offY){
  if (offY.constructor == Array) offY = Number(offY[0])
  var ev = $gameMap._events[this._eventId];
  ev._graphicOffsetY = Number(offY);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeOffsetZ = function(offZ){
  if (offZ.constructor == Array) offZ = Number(offZ[0])
  var ev = $gameMap._events[this._eventId];
  ev._graphicOffsetZ = Number(offZ);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeRotation = function(degree){
  if (degree.constructor == Array) degree = Number(degree[0])
  var ev = $gameMap._events[this._eventId];
  ev._evRot = Number(degree);
  ev._graphicNeedRefresh = true;  
};
Game_Interpreter.prototype.thisEventChangeFlipH = function(bool){
  if (bool.constructor == Array)
    bool = bool[0].toUpperCase() == "TRUE" ? true : false;
  var ev = $gameMap._events[this._eventId];
  ev._evFlipH = bool;
  ev._graphicNeedRefresh = true;  
};
Game_Interpreter.prototype.thisEventChangeFlipV = function(bool){
  if (bool.constructor == Array)
    bool = bool[0].toUpperCase() == "TRUE" ? true : false;
  var ev = $gameMap._events[this._eventId];
  ev._evFlipV = bool;
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeZoom = function(zoom){
  if (zoom.constructor == Array) zoom = Number(zoom[0])
  var ev = $gameMap._events[this._eventId];
  ev._scaleX = Number(zoom);
  ev._scaleY = Number(zoom);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeScaleX = function(scaleX){
  if (scaleX.constructor == Array) scaleX = Number(scaleX[0])

  var ev = $gameMap._events[this._eventId];
  ev._scaleX = Number(scaleX);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeScaleY = function(scaleY){
  if (scaleY.constructor == Array) scaleY = Number(scaleY[0])
  var ev = $gameMap._events[this._eventId];
  ev._scaleY = Number(scaleY);
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeOpacity = function(opacity){
  if (opacity.constructor == Array) opacity = Number(opacity[0])
  var ev = $gameMap._events[this._eventId];
  ev._opacity = Number(opacity);
  ev._graphicNeedRefresh = true;  
};
Game_Interpreter.prototype.thisEventChangeBlend = function(args , green, blue, alpha){
  if (args.constructor == Array)
  {
    var red = Number(args[0]);
    green = Number(args[1]);
    blue = Number(args[2]);
    alpha = Number(args[3]);
  } else {
    var red = args ? Number(args) : 0;
  };
  var ev = $gameMap._events[this._eventId];
  ev._blendColor = [red,green,blue,alpha];
  ev._graphicNeedRefresh = true;  
};

Game_Interpreter.prototype.thisEventChangeTone = function(args , green, blue, alpha){
  if (args.constructor == Array)
  {
    var red = Number(args[0]);
    green = Number(args[1]);
    blue = Number(args[2]);
    alpha = Number(args[3]);
  } else {
    var red = args ? Number(args) : 0;
  };
  var ev = $gameMap._events[this._eventId];
  ev._colorTone = [red,green,blue,alpha];
  ev._graphicNeedRefresh = true;  
};

//plugins command experimental
var _PluginCommands = _PluginCommands || {};
_PluginCommands["THIS_EVENT_CHANGE_OFFSETX"] = Game_Interpreter.prototype.thisEventChangeOffsetX;
_PluginCommands["THIS_EVENT_CHANGE_OFFSETY"] = Game_Interpreter.prototype.thisEventChangeOffsetY;
_PluginCommands["THIS_EVENT_CHANGE_OFFSETZ"] = Game_Interpreter.prototype.thisEventChangeOffsetZ;
_PluginCommands["THIS_EVENT_CHANGE_ROTATION"] = Game_Interpreter.prototype.thisEventChangeRotation;
_PluginCommands["THIS_EVENT_CHANGE_FLIPH"] = Game_Interpreter.prototype.thisEventChangeFlipH;
_PluginCommands["THIS_EVENT_CHANGE_FLIPV"] = Game_Interpreter.prototype.thisEventChangeFlipV;
_PluginCommands["THIS_EVENT_CHANGE_ZOOM"] = Game_Interpreter.prototype.thisEventChangeZoom;
_PluginCommands["THIS_EVENT_CHANGE_SCALEX"] = Game_Interpreter.prototype.thisEventChangeScaleX;
_PluginCommands["THIS_EVENT_CHANGE_SCALEY"] = Game_Interpreter.prototype.thisEventChangeScaleY;
_PluginCommands["THIS_EVENT_CHANGE_OPACITY"] = Game_Interpreter.prototype.thisEventChangeOpacity;
_PluginCommands["THIS_EVENT_CHANGE_BLEND"] = Game_Interpreter.prototype.thisEventChangeBlend;
_PluginCommands["THIS_EVENT_CHANGE_TONE"] = Game_Interpreter.prototype.thisEventChangeTone;

var est_graphic_shift_game_interpreter_plugincommand =
                      Game_Interpreter.prototype.pluginCommand;

// add my plugin command
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    if(_PluginCommands[command.toUpperCase()]) return _PluginCommands[command.toUpperCase()].call(this,args);
    est_graphic_shift_game_interpreter_plugincommand.call(this, command, args);
};  
