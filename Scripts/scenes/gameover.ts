module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private restartButton: objects.Button;
        private background: objects.Background;
        private scoreBoard: managers.ScoreBoard;

        // Constructors
        constructor() {
            super();

            this.Start();
        }
        // Methods
        public Start():void {
            this.background = new objects.Background();
            this.gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FF0000", 320, 240, true);
            this.restartButton = new objects.Button("RestartButton", 200, 500);
            this.scoreBoard = new managers.ScoreBoard();
            this.scoreBoard.highScoreLabel.x = 300;
            this.scoreBoard.highScoreLabel.y = 350;
            this.scoreBoard.highScoreLabel.setIsCentered(true);

            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        private restartButtonClick() : void {
            managers.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.restartButton);
            this.addChild(this.scoreBoard.highScoreLabel);

            // Setup event handlers
            this.restartButton.on("click", this.restartButtonClick);
        }
    }
}