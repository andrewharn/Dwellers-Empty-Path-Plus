/*:
 * @plugindesc Deactivates fast forward on events on a map when Z key is held down.
 * 
 * @author NA
 * 
 */

Scene_Map.prototype.isFastForward = function() {
    return false; 
        //($gameMap.isEventRunning() && !SceneManager.isSceneChanging() &&
        //(Input.isLongPressed('ok') || TouchInput.isLongPressed()));
};