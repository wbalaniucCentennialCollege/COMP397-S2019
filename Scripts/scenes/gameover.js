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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructors
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background();
            this.gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FF0000", 320, 240, true);
            this.restartButton = new objects.Button("RestartButton", 300, 500);
            this.scoreBoard = new managers.ScoreBoard();
            this.scoreBoard.highScoreLabel.x = 300;
            this.scoreBoard.highScoreLabel.y = 350;
            this.scoreBoard.highScoreLabel.setIsCentered(true);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
            // this.background.Update();
        };
        GameOverScene.prototype.restartButtonClick = function () {
            managers.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.restartButton);
            this.addChild(this.scoreBoard.highScoreLabel);
            // Setup event handlers
            this.restartButton.on("click", this.restartButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map