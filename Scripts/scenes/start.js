var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            this.welcomeLabel = new objects.Label("PLANET DOOM!", "60px", "Consolas", "#FF0000", 320, 240, true);
            this.playButton = new objects.Button("PlayButton", 220, 500);
            this.background = new objects.Background();
            this.Main();
        };
        StartScene.prototype.Update = function () {
            // this.background.Update();
        };
        StartScene.prototype.playButtonClick = function () {
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.playButton);
            // Setup event handler for buttons
            this.playButton.on("click", this.playButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map