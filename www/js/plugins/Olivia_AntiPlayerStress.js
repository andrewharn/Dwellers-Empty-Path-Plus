//=============================================================================
// Olivia Engine - Anti-Player Stress - for RPG Maker MV version 1.6.1
// Olivia_Template.js
//=============================================================================
 /*:
 * @plugindesc <AntiPlayerStress> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a plugin that will change various parts of your game to show that
 * you care for your players' mental healths to make it less stressful for
 * players to play through. Some changes are made for the purpose of reducing
 * stress while other changes are made for aesthetic reasons to make the game
 * look more pleasing on the eye.
 *
 * Here is a list of everything that is changed:
 *
 * - Center the text in the title command window. This is because left-aligned
 * text on that command window makes the screen look terrible when the title
 * of your game is centered (assuming you are letting the game write out your
 * game's title name).
 * (You can change this in the plugin parameters)
 *
 * - Default Options Settings: Players will almost always turn on Always Dash,
 * Command Remember, and lower the volume settings for your game. Do it for
 * them and reduce the amount of jump scares players get when they turn on your
 * game for the first time ever and the music blows out their eardrums because
 * it is at 100% volume.
 * (You can change this in the plugin parameters)
 *
 * - Encounter Rate Minimum: Players are now given a minimum number of steps
 * before a random encounter battle. The biggest complaint I've ever seen
 * across so many RPG Maker games is the awful random encounter rate thanks to
 * RPG Maker's horrible formula for it. This will fix the problem by putting in
 * a calculation for a minimum number of steps instead of just a 1 to X value.
 * (You can change this in the plugin parameters)
 *
 * - Escaping battles will always work. Not every player wants to deal with
 * your game's battle system because of reasons. So if they want to escape a
 * battle, let them escape the battle at a 100% success rate. There is no
 * reason to punish a player because they find a facet of your game unenjoyable
 * to play.
 * (You can change this in the plugin parameters)
 *
 * - Hit Rate Stacking: stacks skill accuracy in favor of the player. If the
 * player uses a non-attack physical skill, the accuracy will ignore the actor
 * hit percentage value because it's left by default at 95%, which happens way
 * too often due to the unbalanced accuracy calculation of RPG Maker MV. Skills
 * will use the success rates dictated inside of the database and no other
 * outside factors. Only regular attacks will still be affected by hit rates.
 * (You can change this in the plugin parameters)
 *
 * - Leveling a character will fully recover their HP and MP. So many RPG's do
 * this and whenever it happens, players feel great about it. What doesn't feel
 * great is leveling up and seeing that you have more HP and MP to heal back
 * because the game you're playing doesn't have such a system.
 * (You can change this in the plugin parameters)
 *
 * - Proper Error Display: Not all games are perfect. If your players discover
 * a game crash, they will get a complete unhelpful one message without this
 * plugin. With this plugin and this option turned on, players can get you a
 * detailed bug report on the exact parts of the code that need fixing.
 * (You can change this in the plugin parameters)
 *
 * You can turn off these features from the plugin parameters if you want.
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin should be compatible with the majority of the Yanfly Engine and
 * SumRndDde plugin libraries. Place this plugin near the bottom of the plugin
 * list to make sure its changes are active.
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins without credit.
 *
 * -------
 * Credits
 * -------
 *
 * If you are using this plugin, credit the following people:
 * 
 * - Fallen Angel Olivia
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default !!! READ THE HELP FILE !!!
 * @param 
 * @param 
 *
 * @param Center Title Command
 * @type boolean
 * @on Center
 * @off Left Aligned
 * @desc Center the text in the title screen's command window.
 * @default true
 *
 * @param 
 *
 * @param Default Options
 *
 * @param Always Dash
 * @parent Default Options
 * @type boolean
 * @on On
 * @off Off
 * @desc The default setting for Always Dash option will be On/Off.
 * @default true
 *
 * @param Command Remember
 * @parent Default Options
 * @type boolean
 * @on On
 * @off Off
 * @desc The default setting for Command Remember option will be On/Off.
 * @default true
 *
 * @param Default Volume
 * @parent Default Options
 * @type number
 * @min 0
 * @max 100
 * @desc The default volume for all audio options will be this value.
 * @default 40
 *
 * @param 
 *
 * @param Encounter Rate Minimum
 * @type number
 * @min 1
 * @desc This is the minimum steps the player will get without any random encounters.
 * @default 10
 *
 * @param 
 *
 * @param Escape Always
 * @type boolean
 * @on On
 * @off Off
 * @desc If the player wants to escape a battle, let them escape a battle.
 * @default true
 *
 * @param
 *
 * @param Hit Rate Stacking
 * @type boolean
 * @on On
 * @off Off
 * @desc Stack the HIT and EVA in favor of the player.
 * @default true
 *
 * @param 
 * 
 * @param Level Up
 *
 * @param Recover Full HP
 * @parent Level Up
 * @type boolean
 * @on Yes
 * @off No
 * @desc Recover full HP when an actor levels up.
 * @default true
 *
 * @param Recover Full MP
 * @parent Level Up
 * @type boolean
 * @on Yes
 * @off No
 * @desc Recover full MP when an actor levels up.
 * @default true
 *
 * @param
 *
 * @param Proper Error Display
 * @type boolean
 * @on Yes
 * @off No
 * @desc If your game bugs out, there will be the full error display on the game itself instead of just the console.
 * @default true
 *
 * @param 
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_Template = true;

var Olivia = Olivia || {};
Olivia.AntiPlayerStress = Olivia.AntiPlayerStress || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<AntiPlayerStress>') })[0].parameters;

Olivia.AntiPlayerStress.CenterTitleCommandWindow = eval(parameters['Center Title Command']);

Olivia.AntiPlayerStress.AlwaysDash = eval(parameters['Always Dash']);
Olivia.AntiPlayerStress.CommandRemember = eval(parameters['Command Remember']);
Olivia.AntiPlayerStress.DefaultVolume = Number(parameters['Default Volume'] || 40);

Olivia.AntiPlayerStress.EncounterMinimum = Number(parameters['Encounter Rate Minimum'] || 10);

Olivia.AntiPlayerStress.EscapeAlways = eval(parameters['Escape Always']);

Olivia.AntiPlayerStress.HitRate = eval(parameters['Hit Rate Stacking']);

Olivia.AntiPlayerStress.LevelFullHp = eval(parameters['Recover Full HP']);
Olivia.AntiPlayerStress.LevelFullMp = eval(parameters['Recover Full MP']);

Olivia.AntiPlayerStress.ProperErrorDisplay = eval(parameters['Proper Error Display']);

//-----------------------------------------------------------------------------
/**
 * The static class that carries out graphics processing.
 *
 * @class Graphics
 */

Graphics.printFullError = function(name, message, stack) {
  stack = this.processErrorStackMessage(stack);
    if (this._errorPrinter) {
        this._errorPrinter.innerHTML = this._makeFullErrorHtml(name, message, stack);
    }
    this._applyCanvasFilter();
    this._clearUpperCanvas();
};

Graphics._makeFullErrorHtml = function(name, message, stack) {
    var text = '';
    for (var i = 2; i < stack.length; ++i) {
      text += '<font color=white>' + stack[i] + '</font><br>';
    }
    return ('<font color="yellow"><b>' + stack[0] + '</b></font><br>' + '<font color="yellow"><b>' + stack[1] + '</b></font><br>' + text);
};

Graphics.processErrorStackMessage = function(stack)  {
    var data = stack.split(/(?:\r\n|\r|\n)/);
    data.unshift('Game has encountered a bug. Please report it.<br>');
    for (var i = 1; i < data.length; ++i) {
       data[i] = data[i].replace(/[\(](.*[\/])/, '(');
    }
    data.push('<br><font color="yellow"><b>Press F5 to restart the game.</b></font><br>')
    return data;
};

if (Olivia.AntiPlayerStress.ProperErrorDisplay) {

Olivia.AntiPlayerStress.___Graphics_updateErrorPrinter___ = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
    Olivia.AntiPlayerStress.___Graphics_updateErrorPrinter___.call(this);
    this._errorPrinter.height = this._height * 0.5;
    this._errorPrinter.style.textAlign = 'left';
    this._centerElement(this._errorPrinter);
};
  
}


//-----------------------------------------------------------------------------
// ConfigManager
//
// The static class that manages the configuration data.

ConfigManager.alwaysDash        = Olivia.AntiPlayerStress.AlwaysDash;
ConfigManager.commandRemember   = Olivia.AntiPlayerStress.CommandRemember;

Olivia.AntiPlayerStress.___ConfigManager_applyData___ = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    Olivia.AntiPlayerStress.___ConfigManager_applyData___.call(this, config);
    if (config['alwaysDash'] === undefined) {
        this.alwaysDash = Olivia.AntiPlayerStress.AlwaysDash;
    }
    if (config['commandRemember'] === undefined) {
        this.commandRemember = Olivia.AntiPlayerStress.CommandRemember;
    }
};

ConfigManager.readVolume = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        return Olivia.AntiPlayerStress.DefaultVolume;
    }
};

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

if (Olivia.AntiPlayerStress.EscapeAlways) {
  
BattleManager.processEscape = function() {
    $gameParty.performEscape();
    SoundManager.playEscape();
    this.displayEscapeSuccessMessage();
    this._escaped = true;
    this.processAbort();
    return true;
};

}

//-----------------------------------------------------------------------------
// SceneManager
//
// The static class that manages scene transitions.

if (Olivia.AntiPlayerStress.ProperErrorDisplay) {

SceneManager.catchException = function(e) {
    if (e instanceof Error) {
        Graphics.printFullError(e.name, e.message, e.stack);
        console.error(e.stack);
    } else {
        Graphics.printError('UnknownError', e);
    }
    AudioManager.stopAll();
    this.stop();
};

}

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

if (Olivia.AntiPlayerStress.HitRate) {

Olivia.AntiPlayerStress.___Game_Action_itemHit___ = Game_Action.prototype.itemHit;
Game_Action.prototype.itemHit = function(target) {
    if (this.subject().isActor() && this.item().id !== this.subject().attackSkillId()) {
        if (this.isPhysical() && this.item().successRate === 100) {
            return 1;
        }
    }
    return Olivia.AntiPlayerStress.___Game_Action_itemHit___.call(this, target);
};

Olivia.AntiPlayerStress.___Game_ActionitemEva___ = Game_Action.prototype.itemEva;
Game_Action.prototype.itemEva = function(target) {
    if (target.isEnemy()) {
      var eva = Olivia.AntiPlayerStress.___Game_ActionitemEva___.call(this, target);
      return eva - 0.05;
    }
    return Olivia.AntiPlayerStress.___Game_ActionitemEva___.call(this, target);
};

}

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Olivia.AntiPlayerStress.___Game_Actor_levelUp___ = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    Olivia.AntiPlayerStress.___Game_Actor_levelUp___.call(this);
    if (!this._bypassLevelUpRecover) {
        this.levelUpRecover();
    }
};

Game_Actor.prototype.levelUpRecover = function() {
    if (Olivia.AntiPlayerStress.LevelFullHp) {
        this._hp = this.mhp;
    }
    if (Olivia.AntiPlayerStress.LevelFullMp) {
        this._mp = this.mmp;
    }
    this.refresh();
};

Olivia.AntiPlayerStress.___Game_Actor_changeClass___ = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp) {
  this._bypassLevelUpRecover = true;
  Olivia.AntiPlayerStress.___Game_Actor_changeClass___.call(this, classId, keepExp);
  this._bypassLevelUpRecover = undefined;
};

//-----------------------------------------------------------------------------
// Game_Player
//
// The game object class for the player. It contains event starting
// determinants and map scrolling functions.

Game_Player.prototype.makeEncounterCount = function() {
    var n = $gameMap.encounterStep();
    var minimum = Olivia.AntiPlayerStress.EncounterMinimum;
    n -= minimum;
    this._encounterCount = minimum + Math.randomInt(n) + 1;
};

//-----------------------------------------------------------------------------
// Window_TitleCommand
//
// The window for selecting New Game/Continue on the title screen.

if (Olivia.AntiPlayerStress.CenterTitleCommandWindow) {

Window_TitleCommand.prototype.itemTextAlign = function() {
    return 'center';
};

}

































