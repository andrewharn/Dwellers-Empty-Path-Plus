/*:
@author Chaucer
@plugindesc | Scene Stabilizer : Version - 7.2.0 | Allows asyncronous loading of assets.
@help
===============================================================================
  Introduction :
===============================================================================

  ()()
  (^.^)
  c(")(")

  This plugins allows assets to be automatically preloaded.

===============================================================================
  Requirements :
===============================================================================

  ---------------------------------------
  None.
  ---------------------------------------

===============================================================================
  Instructions :
===============================================================================

  NOTICE : This version of scene stabilizer, is meant to be used with
  RPG Maker MV 1.6.0+ only !!! If you are using 1.5.X or lower, please
  use the legacy version of this plugin which can be downloaded from
  "http://www.rosedale-studios.com/2020/01/31/scene-stabilizer/"

  Scene Stabilizer Plugin is designed to help handle preloading assets,
  image, audio, and video, as well, uploading image assets to the GPU,
  before they're rendered( By default images are uploaded to gpu when a
  scene begins rendering, which can cause the scene to lag briefly when
  a scene begins, by uploading the assets before the scene is rendered,
  it helps to smooth the start of a scene. ).

  To ensure extra fluidity of starting a scene, this plugin also implements
  a latency test upon scene start. This will prevent the scene from updating,
  incase for some reason the scene is not 100% stable on start.

  This version of scene stabilizer( version 7.0.0+ ), is completely plug and
  play, as it will AUTOMATICALLY handle tracking down, caching, and flagging
  files for preloading AS you play !!!

  There are still some extra features, however, they're purely optional.


 Persistent Assets  :
---------------------------------------
 description : Persistent assets can be loaded via the plugin manager, any
 assets that you specify here, will be permanently held in memory through
 out the entire time the game is running, this is useful for assets that
 are displayed through out multiple scenes, many times during the span of
 the game, something like a map hud, or, UI assets. This plugin will
 automatically preload ALL assets, and associate them with whatever scene
 they are loaded in, however, this feature is useful for assets that are
 used in mutliple scenes, as it will help prevent the asset from constantly,
 being removed/added when changing scenes, also to reduce the cache file size(
 which shouldn't ever get very large to begin with, but if you're working
 on a mobile game, where file size is important, it could be useful! ).


===============================================================================
  Terms Of Use :
===============================================================================

  This Plugin may be used commercially, or non commercially. This plugin may
  be extended upon, and or shared freely as long as credit is given to it's
  author(s). This plugin may NOT be sold, or plagiarized.

===============================================================================
  Version History :
===============================================================================

  ● Version : 1.0.0
  ● Date : 13/01/2018

     ★ Release.

  ● Version : 1.4.0
  ● Date : 17/01/2018

     ★ Added the option to attempt to stabilize animations.

  ● Version : 1.5.0
  ● Date : 17/01/2018

     ★ Upload Animations to GPU before playing.
     ✩ Fixed issue with picture stabilization.

  ● Version : 1.5.1
  ● Date : 17/01/2018

     ✩ Accidentally deleted code to shorten pause time.

  ● Version : 2.0.0
  ● Date : 17/01/2018

     ★ Added preload for BGM and BGS( map/battle/title scene only ).

  ● Version : 2.0.1
  ● Date : 17/01/2018

     ✩ Fixed a bug which can cause the game to freeze.

  ● Version : 2.1.0
  ● Date : 05/03/2018

     ★ Add compatability for YEP_VictoryAftermath( thanks to Tuomo L at rmw ).
     ✩ Audio is now unaltered when preload_audio is turned off.

  ● Version : 2.1.1
  ● Date : 08/03/2018

     ✩ AudioManager.playBgm & AudioManager.playBgs are no longer altered.

  ● Version : 2.1.2
  ● Date : 08/03/2018

     ✩ buffer parameters are applied before being played.

  ● Version : 4.0.0
  ● Date : 03/10/2018

     ★ Images are now uploaded to the GPU instead of pausing the scene on start.
     ★ Now able to preload custom assets in map and battle scenes.
     ✩ Audio preloading has been removed for the time being!

  ● Version : 4.1.0
  ● Date : 04/10/2018

     ★ The time taken to upload images to gpu has been drastically reduced.
     ★ Added fallback to prevent game from freezing if scene never stabilizes.
     ✩ removed some unnecessary code.

  ● Version : 4.1.1
  ● Date : 04/10/2018

     ✩ Fixed a bug that caused crash with canvas renderer.

  ● Version : 4.1.2
  ● Date : 04/10/2018

     ✩ Fixed compatability issue with GALV_AnimatedSplashScreens.js.

  ● Version : 4.1.5
  ● Date : 14/10/2018

     ✩ Plugin will now work with plugins that overwrite Scene_Base Initialize.
     ✩ Plugins that add custom sprites to map should no longer be an issue.

  ● Version : 4.1.6
  ● Date : 14/10/2018

     ✩ Fixed issue with animations appearing on screen.

  ● Version : 4.1.7
  ● Date : 15/10/2018

     ✩ Animations that are preloaded should no longer play Audio.

  ● Version : 4.2.0
  ● Date : 24/10/2018

     ★ Added a more stable way to handle scene map.
     ✩ No longer attempts to upload textures without a source.

  ● Version : 4.2.1
  ● Date : 24/10/2018

     ✩ fade no longer happens if transfering map without fade.


  ● Version : 4.2.3
  ● Date : 06/11/2018

     ✩ Fixed a bug which prevented the game from loading non sv enemies.
     ✩ Fixed a bug where images from system folder could not be loaded.
     ✩ added example to documentation on preloading images.
     ✩ Fixed a bug where sv_enemies could not be loaded.
     ✩ removed some useless code from an older version.
     ✩ minor alterations to preload cache handling.

  ● Version : 5.0.0
  ● Date : 06/11/2018

     ★ Code has been cleaned & optimized.
     ★ Ability to load ALL animations has been added.
     ★ Added capability to load an entire folder.
     ★ Re-added audio caching.

  ● Version : 5.1.0
  ● Date : 06/11/2018

     ★ Loading time from menu to map transition has been improved.
     ★ Loading time from battle to map transition has been improved.
     ✩ Fixed the help file so that uploading assets is explained properly.
     ✩ Fix a bug that prevented uploading custom files with the "preload" tag.

  ● Version : 5.2.0
  ● Date : 06/11/2018

    ★ Now uses PIXI.VERSION, instead of RM version to determine upload limit.

  ● Version : 5.3.0
  ● Date : 06/11/2018

    ★ Added plugin parameter "Auto Cache Clear".
    ★ Added plugin commands to clear specific resources( see instructions ).
    ✩ Fixed a Incompatability issue with YEP_GridFreeDoodads.
    ✩ Fixed a crash when attempting to preload/upload all animations.
    ✩ Fixed bug which may cause the game to crash if scene terminated early.

  ● Version : 5.4.0
  ● Date : 06/11/2018

    ★ Added new note tag to load assets from a custom folder.
    ★ Added plugin command to clear assets loaded from an entire folder.
    ★ Added plugin command to clear assets loaded from custom folder.
    ★ Added plugin command to clear ALL assets.

  ● Version : 5.4.1
  ● Date : 06/11/2018

    ✩ Disabled preload folder option for mobile, as it's not able to be done.
    ✩ Fixed issue where plugin did not read encrypted assets.

  ● Version : 5.4.2
  ● Date : 06/11/2018

    ✩ Fixed "extensionType" undefined error.

  ● Version : 5.5.0
  ● Date : 20/04/2018

    ★ Preloading animations now also preloads all associated sound effects.
    ★ Added the ability to load entire audio folders.
    ★ Added support for pre-loading videos.
    ✩ Fixed error when testing events through database.

  ● Version : 6.0.0
  ● Date : 07/04/2019

    ★ Plugin now keeps reference of "previousClass", to speed up loading.
    ★ Added plugin command "disable Cache Limit"( MV 1.6.0 only ).
    ★ Added plugin command "Maximum Cache Limit"( MV 1.6.0 only ).
    ✩ Some clean up & optimization to the code.


● Version : 7.0.0
● Date : 01/21/2020

  ★ Refactored entire plugin.
  ★ Auto preload functionality added.
  ✩ Dropped support for preloading via note tags( it's no unnecessary ).
  ✩ Dropped support for preloading videos( temporarily ).
  ✩ Dropped support cacheLimit alteration( for now ).


● Version : 7.0.1
● Date : 01/25/2020

  ✩ Fixed Error in loading non existant cache file.


● Version : 7.0.2
● Date : 01/25/2020

  ✩ Fixed crash when changing actor image and going to menu.
  ✩ Fixed compatibility issue with Victor SFont plugin.

● Version : 7.0.3
● Date : 02/04/2020

  ✩ Manually preloaded files no longer clear from cache.
  ✩ Important Sounds are no longer cleared from cache.
  ✩ Added warning for MV versions below 1.6.0.
  ✩ Removed cache files json extensions.
  ✩ Minor code improvements.

● Version : 7.1.0
● Date : 02/04/2020

  ★ Added delta time check to ensure fps is stable before beginning scene.
  ★ Fallback to WebStorage if a cache is not built before deployment.
  ★ Reset the accumulator for SceneManager on scene start.
  ✩ autoClear now only clears assets loaded for the corresponding scene.

  ● Version : 7.1.1
  ● Date : 02/04/2020

    ✩ Fixed a minor error that caused crash when cache is not prebuilt.

  ● Version : 7.2.0
  ● Date : 05/26/2020

    ✩ Fixed help file!
    ✩ Fixed "Cannot set property 'key' of undefined" error.
    ✩ Fix error loading item animations( thanks ScSWinter for finding this !).
    ★ Removed autoClear, it's now always enabled.
    ★ "Manually Preloaded Files" was renamed to "Persistent Assets".
    ★ Removed preload scene to prevent confusion( it's wasn't really needed ).

===============================================================================
  Contact Me :
===============================================================================

  If you have questions, about this plugin, or commissioning me, or have
  a bug to report, please feel free to contact me by any of the below
  methods.

  rmw : https://forums.rpgmakerweb.com/index.php?members/chaucer.44456
  discord : chaucer#7538
  skypeId : chaucer1991
  gmail : chaucer91

===============================================================================
  Support Me :
===============================================================================

   If you like the content I create, and want to contribute to help me
  making more plugins on a regular basis, you can donate, or pledge through
  any of the links listed below!

  ko-fi : https://ko-fi.com/chaucer91
  paypal.me : https://paypal.me/chaucer91
  patreon : https://www.patreon.com/chaucer91

===============================================================================
  Special Thanks :
===============================================================================

  Patrons :

  ★ Benjamin Humphrey

===============================================================================

  @param persistentAssets
  @text Persistent Assets
  @desc Any assets specified here, will always be kept in memory once game begins!
  @default []
  @type file[]


*/

//=============================================================================
// SceneManager :
//=============================================================================

//-----------------------------------------------------------------------------
SceneManager.isCurrentSceneStable = function ()
{ // return if the current scene is stable.
//-----------------------------------------------------------------------------

  return this._scene._stable;

};

//-----------------------------------------------------------------------------
SceneManager.resetAccumulator = function ()
{ // reset the accumulator.
//-----------------------------------------------------------------------------

  if ( !Utils.isMobileSafari() ) {

    var newTime = this._getTimeInMsWithoutMobileSafari();
    this._accumulator = -this._deltaTime;
    this._currentTime = newTime;

  }

};

//=============================================================================
// ImageManager :
//=============================================================================

if ( Graphics.isWebGL() ) {
  ImageManager._loader = new PIXI.prepare.webgl( Graphics._renderer );

} else {
  ImageManager._loader = new PIXI.prepare.canvas( Graphics._renderer );
}

//-----------------------------------------------------------------------------
ImageCache.prototype.isUploaded = function ()
{ // return if the cache is uploaded.
//-----------------------------------------------------------------------------

  var items = this._items;
  var keys = Object.keys( items );
  for ( var i = 0, length = keys.length; i < length; i++ ) {
    if ( !items[keys[i]].bitmap._uploaded ) return false;
  }

  return true;

};

//-----------------------------------------------------------------------------
ImageManager.isUploaded = function ()
{ // check if all images are properly uploaded.
//-----------------------------------------------------------------------------

  return this._imageCache.isUploaded();

};

//-----------------------------------------------------------------------------
ImageManager.upload = function ()
{ // upload all unloaded images.
//-----------------------------------------------------------------------------

  var keys = Object.keys( this._imageCache._items );
  this.prepareUpload( keys );
  this._loader.upload( function() {

    for ( var i = 0, length = keys.length; i < length; i++ ) {
      this._imageCache._items[keys[i]].bitmap._uploaded = true;
    }

  }.bind( this, keys ) )

};

//-----------------------------------------------------------------------------
ImageManager.prepareUpload = function ( keys )
{ // prepare assets for upload.
//-----------------------------------------------------------------------------

  var bitmap, texture;

  for ( var i = 0, length = keys.length; i < length; i++ ) {

    bitmap = this._imageCache._items[keys[i]].bitmap;

    if ( bitmap._uploaded ) continue;
    if ( !bitmap._canvas ) continue;

    texture =  new PIXI.Texture( bitmap.baseTexture );
    this._loader.add( texture );

  }

};

//=============================================================================
// AudioManager :
//=============================================================================

  AudioManager._staticBgmBuffers = [];
  AudioManager._staticBgsBuffers = [];
  AudioManager._staticMeBuffers =  [];


//-----------------------------------------------------------------------------
AudioManager.clear = function ()
{ // clear the audio caches.
//-----------------------------------------------------------------------------

  // store all bufers in an array
  this.clearBuffers( '_staticBuffers' );
  this.clearBuffers( '_staticMeBuffers' );
  this.clearBuffers( '_staticBgmBuffers' );
  this.clearBuffers( '_staticBgsBuffers' );

};

//-----------------------------------------------------------------------------
AudioManager.clearBuffers = function ( key )
{ // clear the static se buffers.
//-----------------------------------------------------------------------------

  var buffers = AudioManager[key];
  AudioManager[key] = [];

  for ( var i = 0, l = buffers.length; i < l; i++ ) {

     if ( Chaucer.sceneStabilizer.ignoreClear.includes( buffers[i].key  ) ) {
       AudioManager[key].push( buffers[i] );
     }
  }

};

//-----------------------------------------------------------------------------
AudioManager.isReady = function ()
{ // Return if the audio manager is ready.
//-----------------------------------------------------------------------------
  if ( !this.isBgmReady() ) return false;
  if ( !this.isBgsReady() ) return false;
  if ( !this.isMeReady() ) return false;
  if ( !this.isSeReady() ) return false;
  return true

};

//-----------------------------------------------------------------------------
AudioManager.isBgmReady = function ()
{ // return if the background music are all ready.
//-----------------------------------------------------------------------------

  var buffers = this._staticBgmBuffers;

  for ( var i = 0, length = buffers.length; i < length; i++ ) {
    if ( !buffers[i].isReady() ) return false;
  }

  return true;

};

//-----------------------------------------------------------------------------
AudioManager.isBgsReady = function ()
{ // return if the background sounds are all ready.
//-----------------------------------------------------------------------------

  var buffers = this._staticBgsBuffers;

  for ( var i = 0, length = buffers.length; i < length; i++ ) {
    if ( !buffers[i].isReady() ) return false;
  }

  return true;

};

//-----------------------------------------------------------------------------
AudioManager.isSeReady = function ()
{ // return if the sound effects are all ready.
//-----------------------------------------------------------------------------

  var buffers = this._staticBuffers;

  for ( var i = 0, length = buffers.length; i < length; i++ ) {
    if ( !buffers[i].isReady() ) return false;
  }

  return true;

};

//-----------------------------------------------------------------------------
AudioManager.isMeReady = function ()
{ // return if the music effects are all ready.
//-----------------------------------------------------------------------------

  var buffers = this._staticMeBuffers;

  for ( var i = 0, length = buffers.length; i < length; i++ ) {
    if ( !buffers[i].isReady() ) return false;
  }

  return true;

};

//=============================================================================
// Scene_Base :
//=============================================================================

//-----------------------------------------------------------------------------
Scene_Base.prototype.stabilize = function ()
{ // try to stabilize the scene.
//-----------------------------------------------------------------------------

  var max = 5;
  var  deltas = [];
  var stabilizer = new PIXI.ticker.Ticker();

  stabilizer.add( function( delta ) {

    deltas.push( delta );

    if ( this.getAverage( deltas, max ) < 1.1 ) {
      SceneManager.resetAccumulator();
      this._stable = true;
      stabilizer.stop();
    }

  }, this ).start();

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.addAsset = function ( assetKey )
{ // add asset key.

//-----------------------------------------------------------------------------

  var constructor = JsonEx._getConstructorName( this );
  if ( constructor != 'Scene_Boot' ) this._assets.push( assetKey );

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.getAverage = function ( array, max )
{ // get the average of a list of numbers.
//-----------------------------------------------------------------------------

  var total = 0;

  while( array.length > max ) { array.shift(); };
  for ( var i = 0; i < array.length; i++ ) { total += array[i]; };

  return total / array.length;

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.loadCustomImage = function ( folder, filename )
{ // load custom image file.
//-----------------------------------------------------------------------------

  var bitmap = ImageManager.loadBitmap( folder, filename );

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.loadCustomAudio = function ( folder, filename )
{ // load custom audio file.
//-----------------------------------------------------------------------------

  folder.match( /\/(.*?)\// );
  var folder = RegExp.$1;
  var buffer = AudioManager.createBuffer( folder , filename );

  Chaucer.sceneStabilizer.pushStaticBuffer( folder, buffer );

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.removeAssets = function ()
{ // remove all assets that are loaded in by the scene :
//-----------------------------------------------------------------------------

  if ( !SceneManager._stack.includes( this.constructor ) ) {

    for ( var i = 0,l = this._assets.length; i < l; i++ ) {
      this.removeAsset( this._assets[i] );
    }

  }

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.removeAsset = function ( assetKey )
{ // remove the asset with they key provided.
//-----------------------------------------------------------------------------

  // remove images :
  if ( assetKey.includes( '.png' ) )
    this.removeImageAsset( assetKey );

  // remove audio :
  else
    this.removeAudioAsset( assetKey );

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.removeImageAsset = function ( key )
{ // remove the image asset.
//-----------------------------------------------------------------------------

    var item = ImageManager._imageCache._items[key];

    if ( item && item.bitmap ) {

      delete ImageManager._imageCache._items[key];
      item.bitmap._baseTexture.destroy( true );
      item.bitmap._image = null;
      item.bitmap.clear();

    }

};

//-----------------------------------------------------------------------------
Scene_Base.prototype.removeAudioAsset = function ( kind, key )
{ // remove an audio asset.
//-----------------------------------------------------------------------------

  var buffers = Chaucer.sceneStabilizer.buffersFromType( kind );
  var index = -1;

  if ( buffers ) {

    for ( var i = 0, l = buffers.length; i < l; i++ ) {
      if ( buffers[i].key === key ) index = i;
    }

    if ( index >= 0 ) buffers.splice( index, 1 );

  }

};

//=============================================================================
// Scene_Boot :
//=============================================================================

//-----------------------------------------------------------------------------
Scene_Boot.loadCustomFiles = function ()
{ // load custom files.
//-----------------------------------------------------------------------------

  var files = Chaucer.sceneStabilizer.params.persistentAssets;
  var length = files.length;

  for ( var i = 0, length = files.length; i < length; i++ ) {
    var splitIndex = files[i].lastIndexOf( '/' ) + 1;
    var folder = files[i].slice( 0, splitIndex );
    var filename = files[i].slice( splitIndex, files[i].length );

    if ( folder.startsWith( 'audio' ) ) {
      Scene_Base.prototype.loadCustomAudio( folder, filename );

    } else if ( folder.startsWith( 'img' ) ) {
      Scene_Base.prototype.loadCustomImage( folder, filename );

    }
  };

};


//=============================================================================
var Imported = Imported || {};
Imported['CHAU AUTO PRELOADER'] = true;
//=============================================================================
var Chaucer = Chaucer || {};
Chaucer.sceneStabilizer = {};
//=============================================================================

( function ( $ ) { // CONFIG:

  $ = $ || {};

//Create plugin information.
//============================================================================

  $.errMessage = [
    "Scene Stabilizer description has been altered! Either revert",
    "the description of the plugin back to normal, or modify the variable",
    "named pluginIdentifier inside the plugin to prevent further errors!!!"
  ].join( '\n' );

  var pluginIdentifier = /(Scene Stabilizer) : Version - (\d+\.\d+\.\d+)/;

  for ( var i = 0, length = $plugins.length; i < length; i++ ) {
    if ( $plugins[i].description.match( pluginIdentifier ) ) {

      $.alias = {};
      $.name = RegExp.$1;
      $.version = RegExp.$2;
      $.params = Parse( $plugins[i].parameters );
      $.author = "Chaucer";
      $.audioCache = {};
      $.imageCache = {};
      break;

    };

  };

  if ( !$.name || !$.version ) throw new Error( $.errMessage );

//============================================================================


//=============================================================================
// Custom :
//=============================================================================

//-----------------------------------------------------------------------------
// preparing variables :
//-----------------------------------------------------------------------------

  var fs = Utils.isNwjs() ? require( 'fs' ) : null;
  var path = Utils.isNwjs() ? require( 'path' ) : null;
  $.ignoreClear = [];

//--------------------------------------------------------------------------
  function Parse( data )
  { // parse data.
//--------------------------------------------------------------------------
    try {
      data = JSON.parse( data ); // try to turn data to object :

    } catch ( error ) {
      data = data; // if failed, data remains a string :

    } finally {

      if ( typeof data === 'object' ) { // if data is an object :

        var keys = Object.keys( data ); // get all keys for object :
        for (var i = 0; i < keys.length; i++) {
          data[keys[i]] = Parse( data[keys[i]] );
        }

      }

    }

    return data;

  };

//-----------------------------------------------------------------------------
  $.compareVersion = function ( current, target )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    var value = 0;

    // prepare version values provided :
    target = target.split( '.' );
    current = current.split( '.' );

    // compare version with target :
    value = Math.sign( current[0] - target[0] );
    if ( value === 0 ) value = Math.sign( current[1] - target[1] );
    if ( value === 0 ) value = Math.sign( current[2] - target[2] );

    // -1 ( current < target );
    //  0 ( current == target )
    //  1  ( current > target )
    return value;

  };

//=============================================================================
// MV 1.6.0 Check :
//=============================================================================

  if ( $.compareVersion( Utils.RPGMAKER_VERSION, '1.6.0' ) === -1 ) {

    throw new Error( $.errCompatability );

  }

//-----------------------------------------------------------------------------
  $.getConstructor = function ()
  { // get the constructor for the current scene.
//-----------------------------------------------------------------------------

    var name = JsonEx._getConstructorName( SceneManager._scene );
    if ( name === 'Scene_Map' ) name += `:${$gameMap.mapId()}`;
    if ( name === 'Scene_Battle' ) name += `:${$gameTroop._troopId}`;
    return name;

  };

//-----------------------------------------------------------------------------
$.loadCaches = function ()
{ // load both caches if they exist, create them if they don't.
//-----------------------------------------------------------------------------

  if ( Utils.isNwjs() ) {

    $.doesCacheExists( 'ImageCache' ) ? $.loadImageCache() :
    this.saveCache( 'ImageCache', this.imageCache );

    $.doesCacheExists( 'AudioCache' ) ? $.loadAudioCache() :
    this.saveCache( 'AudioCache', this.audioCache );

  } else {

    $.loadImageCache();
    $.loadAudioCache();

  }

};

//-----------------------------------------------------------------------------
$.doesCacheExists = function ( cacheName )
{ // return if the imamge cache exists.
//-----------------------------------------------------------------------------

  if ( fs && path ) { // only check if is node webkit :

    var folder = path.dirname( process.mainModule.filename );
    filepath = path.join( folder, 'data/' );

    return fs.existsSync( filepath + cacheName );

  }
  return true;
};

//-----------------------------------------------------------------------------
  $.setIgnoredFiles = function ()
  { // set what files to ignore from Scene_Boot.
//-----------------------------------------------------------------------------

    var keys = Object.keys( ImageManager._imageCache._items );
    var buffers = AudioManager._staticBuffers
      .concat( AudioManager._staticMeBuffers )
      .concat( AudioManager._staticBgsBuffers )
      .concat( AudioManager._staticBgsBuffers );

    for ( var i = 0, length = buffers.length; i < length; i++ ) {

      if ( buffers[i] && buffers[i].key ) {
        this.ignoreClear.push( buffers[i].key );
      }
    }

    this.ignoreClear = this.ignoreClear.concat( keys );

  };

//-----------------------------------------------------------------------------
  $.loadImageCache = function()
  { // Create/Load image cache log here.
//-----------------------------------------------------------------------------

    var xhr = new XMLHttpRequest();
    var url = 'data/' + 'ImageCache';
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');

    xhr.onload = function() {
      if ( xhr.status < 400 ) {
        var data = LZString.decompressFromBase64( xhr.responseText ) || '{}';
        $.imageCache = JSON.parse( data );
      }
    };

    xhr.onerror = $.loadWebImageCache.bind( this );
    xhr.send();

  };

  //-----------------------------------------------------------------------------
  $.loadWebImageCache = function ()
  { // load image cache for web.
  //-----------------------------------------------------------------------------

    var warning;

    warning = "Failed to load AudioCache, using WebStorage cache instead!";
    $.imageCache = localStorage.getItem( 'ImageCache' ) || {};
    console.warn( warning );

  };

//-----------------------------------------------------------------------------
  $.loadAudioCache = function()
  { // Create/Load image cache log here.
//-----------------------------------------------------------------------------

    var xhr = new XMLHttpRequest();
    var url = 'data/' + 'AudioCache';
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');

    xhr.onload = function() {
      if ( xhr.status < 400 ) {
        var data = LZString.decompressFromBase64( xhr.responseText ) || '{}';
        $.audioCache = JSON.parse( data );
      }
    };

    xhr.onerror = $.loadWebAudioCache.bind( this );
    xhr.send();

  };

//-----------------------------------------------------------------------------
  $.loadWebAudioCache = function ()
  { // load image cache for web.
//-----------------------------------------------------------------------------

    var warning;

    warning = "Failed to load AudioCache, using WebStorage cache instead!";
    $.imageCache = localStorage.getItem( 'AudioCache' ) || {};
    console.warn( warning );

  };

//-----------------------------------------------------------------------------
  $.saveCache = function( filename, data )
  { // save our image cache.
//-----------------------------------------------------------------------------

    if ( StorageManager.isLocalMode() ) {
      this.saveCacheLocal( filename, data );

    } else {
      this.saveCacheWeb( filename, data );

    }

  }

//-----------------------------------------------------------------------------
  $.saveCacheLocal = function ( filename, data )
  { // save cache locally.
//-----------------------------------------------------------------------------
    var json = LZString.compressToBase64( JSON.stringify( data ) );
    var dirPath = StorageManager.localFileDirectoryPath();
    var dirPath = dirPath.replace(  'save/', 'data/' );
    var filePath = dirPath + filename;

    if ( !fs.existsSync(dirPath) ) fs.mkdirSync( dirPath );
    fs.writeFileSync(filePath, json);

  };

//-----------------------------------------------------------------------------
  $.saveCacheWeb = function ( filename, data )
  { // Descriptions.
//-----------------------------------------------------------------------------
    var data = LZString.compressToBase64( JSON.stringify( data ) );
    localStorage.setItem( filename, data );
  };

//-----------------------------------------------------------------------------
  $.cacheImage = function( folder, filename, hue, smooth )
  { // cache the image specified.
//-----------------------------------------------------------------------------

    if ( this.imageCache ) {

      var constructor = this.getConstructor();
      $.imageCache[constructor] = this.imageCache[constructor] || {};
      var key = folder + filename + '.png:' +  ( hue || 0  );

      if ( !this.imageCache[constructor][key] ) {

        this.imageCache[constructor][key] = {
          folder: folder, filename: filename, hue: hue, smooth: smooth
        }
        this.saveCache( 'ImageCache', $.imageCache );

      }

    }

  };

//-----------------------------------------------------------------------------
  $.cacheAudio = function( type, object )
  { // cache the image specified.
//-----------------------------------------------------------------------------

    if ( this.audioCache ) {

      var constructor = this.getConstructor();
      this.audioCache[constructor] = this.audioCache[constructor] || {};
      var key = type + ':' + object.name;

      if ( !this.audioCache[constructor][key] ) {

        this.audioCache[constructor][key] = Object.assign( {}, object );
        this.saveCache( 'AudioCache', $.audioCache );

      }

    }

  };

//-----------------------------------------------------------------------------
  $.loadBattleAssets = function ()
  { // load all assets that may or may not be used in battle.
//-----------------------------------------------------------------------------

    var animations = $.getSkillAnimations().concat( $.getItemAnimations() );
    animations = animations.filter( function( item, index, that ) {
      return that.indexOf( item ) === index && item > 0;
    } );

    for ( var i = 0, length = animations.length; i < length; i++ ) {
      var anim = $dataAnimations[animations[i]];
      var timings = anim.timings;

      // load images.
      ImageManager.loadAnimation( anim.animation1Name, anim.animation1Hue );
      ImageManager.loadAnimation( anim.animation2Name, anim.animation2Hue );

      // load audio.
      for ( var j = 0, l = timings.length; j < l; j++ ) {

        if ( timings[j].se && timings[j].se.name ) {

          var buffer = AudioManager.createBuffer( 'se', timings[j].se.name )
          this.pushStaticBuffer( 'se', buffer );

        }

      }
    }

  };

//-----------------------------------------------------------------------------
  $.getSkillAnimations = function ()
  { // get skill animations from all actors and enemies in battle.
//-----------------------------------------------------------------------------

    var members = $gameTroop.members().concat( $gameParty.battleMembers() );
    var animations = [];
    var skills = [];
    var actions;

    for ( var i = 0, length = members.length; i < length; i++ ) {

      if ( members[i].isEnemy() ) {

        actions = members[i].enemy().actions;
        for ( var j = 0, length2 = actions.length; j < length2; j++ ) {
          if ( !skills.includes( actions[j].skillId ) ) {
            skills.push( actions[j].skillId );
          }
        }

      } else {

        actions = members[i].skills();
        for ( var j = 0, length2 = actions.length; j < length2; j++ ) {
            if ( !skills.includes( actions[j].id ) ) {
              skills.push( actions[j].id );
            }
        }

      }

    }

    for ( var i = 0, length = skills.length; i < length; i++ ) {
      animations.push( $dataSkills[skills[i]].animationId );
    }

    return animations;

  };

//-----------------------------------------------------------------------------
  $.getItemAnimations = function ()
  { // get all animations for items in the players inventory.
//-----------------------------------------------------------------------------

    var items = Object.keys( $gameParty._items ).map( Number );
    var animations = [];

    for ( var i = 0, length = items.length; i < length; i++ ) {
      animations.push( $dataItems[items[i]].animationId );
    }

    return animations;

  };

//-----------------------------------------------------------------------------
  $.loadImagesFromCache = function ()
  { // load images from cache.
//-----------------------------------------------------------------------------

    if ( $.imageCache ) {

      var cache = $.imageCache[Chaucer.sceneStabilizer.getConstructor()] || {};
      var keys = Object.keys( cache );

      for ( var i = 0, length = keys.length; i < length; i++ ) {
        var data = cache[keys[i]];
        ImageManager.loadBitmap(
          data.folder, data.filename, data.hue, data.smooth
        );
      }

    }

  };

//-----------------------------------------------------------------------------
  $.loadAudioFromCache = function ()
  { // Load audio from cache.
//-----------------------------------------------------------------------------

    if ( $.audioCache ) {

      var cache = $.audioCache[Chaucer.sceneStabilizer.getConstructor()] || {};
      var keys = Object.keys( cache );

      for ( var i = 0, length = keys.length; i < length; i++ ) {
        var data = keys[i].split( ':' );
        var buffer = AudioManager.createBuffer( data[0], data[1] )
        this.pushStaticBuffer( data[0], buffer );
      }

    }

  };

//-----------------------------------------------------------------------------
$.buffersFromType = function ( type )
{ // return the buffers object from the type specified.
//-----------------------------------------------------------------------------

  switch ( type ) {

    case 'bgm':
      return AudioManager._staticBgmBuffers;

    case 'bgs':
      return AudioManager._staticBgsBuffers;

    case 'me':
      return AudioManager._staticMeBuffers;

    case 'se':
      return AudioManager._staticBuffers;

  }

};

//-----------------------------------------------------------------------------
  $.pushStaticBuffer = function ( type, buffer )
  { // push audio object to the appropriate cache.
//-----------------------------------------------------------------------------

    var buffers = $.buffersFromType( type );
    buffers.push( buffer );

  };

//-----------------------------------------------------------------------------
  $.loadCachedBuffer = function ( key )
  { // Load files from cache.
//-----------------------------------------------------------------------------

    var buffer = undefined;
    var type = key.split( ':' )[0]
    var buffers = $.buffersFromType( type );

    for ( var i = 0, length = buffers.length; i < length; i++ ) {
      if ( buffers[i].key === key ) return buffers[i];
    }

    return buffer;

  };

//-----------------------------------------------------------------------------
  $.removeFromCacheByUrl = function ( url )
  { // remove a file from the cache.
//-----------------------------------------------------------------------------

    if ( url.startsWith( 'img' ) ) {
      $.removeImageFromCacheByUrl( url );

    } else if ( url.startsWith( 'audio' ) ) {
      $.removeAudioFromCacheByUrl( url );

    }

  };

//-----------------------------------------------------------------------------
  $.removeImageFromCacheByUrl = function ( url )
  { // Load files from cache.
//-----------------------------------------------------------------------------

    var cache = Chaucer.sceneStabilizer.imageCache;
    var scenes = Object.keys( cache );

    for ( var i = 0, l1 = scenes.length; i < l1; i++ ) {
      var files = Object.keys( cache[scenes[i]] );

      for ( var j = 0, l2 = files.length; j < l2; j++ ) {

        if ( url === files[j].replace( /\:\d+/, '' ) ) {
          delete cache[scenes[i]][files[j]];
          $.saveCache( 'ImageCache', this.imageCache );
        }

      }

    }
  };

//-----------------------------------------------------------------------------
  $.removeAudioFromCacheByUrl = function ( url )
  { // Load files from cache.
//-----------------------------------------------------------------------------
    var cache = Chaucer.sceneStabilizer.audioCache;
    var scenes = Object.keys( cache );

    for ( var i = 0, l1 = scenes.length; i < l1; i++ ) {
      var files = Object.keys( cache[scenes[i]] );

      for ( var j = 0, l2 = files.length; j < l2; j++ ) {
        var key = url.replace( 'audio/', '' );
        key = key.replace( '/', ':' ).replace( '.ogg', '' );

        if ( key === files[j] ) {
          delete cache[scenes[i]][files[j]];
          $.saveCache( 'AudioCache', $.audioCache );
        }

      }
    }
  };

  $.loadCaches();

//=============================================================================
// Graphics :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.G_createRenderer = Graphics._createRenderer;
//-----------------------------------------------------------------------------
  Graphics._createRenderer = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.G_createRenderer.call( this );

  };

//-----------------------------------------------------------------------------
  $.alias.G_printLoadingError = Graphics.printLoadingError;
//-----------------------------------------------------------------------------
  Graphics.printLoadingError = function ( url )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    if ( this._errorPrinter && !this._errorShowed )
      $.removeFromCacheByUrl( url );

    $.alias.G_printLoadingError.call( this, url );

  };


//=============================================================================
// Bitmap :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.B_p_initialize = Bitmap.prototype.initilaize;
//-----------------------------------------------------------------------------
  Bitmap.prototype.initilaize = function ( width, height )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.B_p_initialize.call( this, width, height );
    this._uploaded = false;

  };

//=============================================================================
// ImageManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.IM_p_clear = ImageManager.clear;
//-----------------------------------------------------------------------------
  ImageManager.clear = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    var items = this._imageCache._items;
    var keys = Object.keys( items );

    $.alias.IM_p_clear.call( this );

    for ( var i = 0, l = keys.length; i < l; i++ ) {

      // keep item if it should not be cleared :
      if ( $.ignoreClear.includes( keys[i] ) )
        this._imageCache._items[keys[i]] = items[keys[i]];

    }

  };

//=============================================================================
// SceneManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.SM_onSceneCreate = SceneManager.onSceneCreate;
//-----------------------------------------------------------------------------
  SceneManager.onSceneCreate = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.SM_onSceneCreate.call( this );

    if ( this._scene.constructor === Scene_Battle ) $.loadBattleAssets();
    $.loadImagesFromCache();
    $.loadAudioFromCache();

  };

//-----------------------------------------------------------------------------
  $.alias.SM_p_updateScene = SceneManager.updateScene;
//-----------------------------------------------------------------------------
  SceneManager.updateScene = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    if ( this._scene ) {

      // when scene is started :
      if ( this.isCurrentSceneStarted() && this.isCurrentSceneStable() ) {
          this._scene.update();

      // when the scene is not yet started, but is ready to start :
      } else if (!this._sceneStarted && this._scene.isReady()) {
          this._scene.start();
          this._sceneStarted = true;
          this.onSceneStart();

      }

    }

  };

//=============================================================================
// ImageManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.IM_loadBitmap = ImageManager.loadBitmap;
//-----------------------------------------------------------------------------
  ImageManager.loadBitmap = function ( folder, filename, hue, smooth )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    if ( SceneManager._sceneStarted )
      $.cacheImage( folder, filename, hue, smooth );

    var bmp = $.alias.IM_loadBitmap.call( this, folder, filename, hue, smooth );

    if ( filename ) {
      bmp.key = `${folder}${filename}.png:${hue || 0}`;
      SceneManager._scene.addAsset( bmp.key );
    }

    return bmp;

  };

//=============================================================================
// AudioManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.AM_loadStaticSe = AudioManager.loadStaticSe;
//-----------------------------------------------------------------------------
  AudioManager.loadStaticSe = function ( se )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.AM_loadStaticSe.call( this, se );
    var buffer = this._staticBuffers[this._staticBuffers.length - 1];
    if ( buffer ) $.ignoreClear.push( buffer.key = 'se:' + se.name );

  };

//-----------------------------------------------------------------------------
  $.alias.AM_playBgm = AudioManager.playBgm;
//-----------------------------------------------------------------------------
  AudioManager.playBgm = function ( bgm, pos )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.AM_playBgm.call( this, bgm, pos );

    var buffer = this._bgmBuffer;
    if ( buffer && !buffer.isReady() ) $.cacheAudio( 'bgm', bgm );

  };

//-----------------------------------------------------------------------------
  $.alias.AM_playBgs = AudioManager.prototype.playBgs;
//-----------------------------------------------------------------------------
  AudioManager.prototype.playBgs = function ( bgs, pos )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.AM_playBgs.call( this, bgs, pos );

    var buffer = this._bgsBuffer;
    if ( buffer && !buffer.isReady() ) $.cacheAudio( 'bgs', bgs );

  };

//-----------------------------------------------------------------------------
  $.alias.AM_playMe = AudioManager.playMe;
//-----------------------------------------------------------------------------
  AudioManager.playMe = function ( me )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.AM_playMe.call( this, me );

    var buffer = this._meBuffer;
    if ( SceneManager._sceneStarted && buffer && !buffer.isReady() ) {
      $.cacheAudio( 'me', me );
    }

  };

//-----------------------------------------------------------------------------
  $.alias.AM_playSe = AudioManager.playSe;
//-----------------------------------------------------------------------------
  AudioManager.playSe = function ( se )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    var oldLength = this._seBuffers.length;
    $.alias.AM_playSe.call( this, se );

    if ( SceneManager._sceneStarted && oldLength - this._seBuffers.length ) {
      var buffer = this._seBuffers[this._seBuffers.length - 1];
      if ( buffer && !buffer.isReady() ) $.cacheAudio( 'se', se );
    }

  };

//-----------------------------------------------------------------------------
  $.alias.AM_createBuffer = AudioManager.createBuffer;
//-----------------------------------------------------------------------------
  AudioManager.createBuffer = function ( folder, name )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    var buffer = $.loadCachedBuffer( folder + ':' + name );
    buffer = buffer || $.alias.AM_createBuffer.call( this, folder, name );

    if( name ) {
      buffer.key = folder + ':' + name;
      SceneManager._scene.addAsset( buffer.key );
    }

    return buffer;

  };

//=============================================================================
// Scene_Base :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.SB_p_initialize = Scene_Base.prototype.initialize;
//-----------------------------------------------------------------------------
  Scene_Base.prototype.initialize = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    this._assets = [];
    $.alias.SB_p_initialize.call( this );
    this._uploading = false;
    this._stable = false;

  };

//-----------------------------------------------------------------------------
  $.alias.SB_p_start = Scene_Base.prototype.start;
//-----------------------------------------------------------------------------
  Scene_Base.prototype.start = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------
    $.alias.SB_p_start.call( this );
    SceneManager.resetAccumulator();
    this.stabilize();
  };

//-----------------------------------------------------------------------------
  $.alias.SB_p_isReady = Scene_Base.prototype.isReady;
//-----------------------------------------------------------------------------
  Scene_Base.prototype.isReady = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    var isReady = $.alias.SB_p_isReady.call( this );
    var isUploaded = ImageManager.isUploaded();
    var audioReady = AudioManager.isReady();

    if ( isReady && !isUploaded && !this._uploading ) {

      if ( DataManager.isDatabaseLoaded() ) { // Compatability for VE_SFont !!!

        this._uploading = true;
        ImageManager.upload();

      }

    }

    return isReady && isUploaded && audioReady;

  };

//-----------------------------------------------------------------------------
  $.alias.SB_p_detachReservation = Scene_Base.prototype.detachReservation;
//-----------------------------------------------------------------------------
  Scene_Base.prototype.detachReservation = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.SB_p_detachReservation.call( this );
    this.removeChildren();
    this.removeAssets();

  };

//=============================================================================
// Scene_Boot :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.SB_loadSystemImages = Scene_Boot.loadSystemImages;
//-----------------------------------------------------------------------------
  Scene_Boot.loadSystemImages = function ()
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.SB_loadSystemImages.call( this );
    this.loadCustomFiles();
    $.setIgnoredFiles();

  };

//=============================================================================
// Game_Map :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.GM_p_setup = Game_Map.prototype.setup;
//-----------------------------------------------------------------------------
  Game_Map.prototype.setup = function ( mapId )
  { // Alias of commandEnabled
//-----------------------------------------------------------------------------

    $.alias.GM_p_setup.call( this, mapId );
    $.loadImagesFromCache();
    $.loadAudioFromCache();

  };

//=============================================================================
} )( Chaucer.sceneStabilizer );
//=============================================================================
