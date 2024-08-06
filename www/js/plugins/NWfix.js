const aliasSceneBootStart = Scene_Boot.prototype.start;

Scene_Boot.prototype.start = function () {
  if (typeof nw === "object") {
    const window = nw.Window.get();
    window.on("close", () => nw.App.quit());
  }
  aliasSceneBootStart.call(this);
};