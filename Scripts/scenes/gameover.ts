module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private restartButton: objects.Button;
        private background: objects.Background;

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start():void {
            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FF0000", 320, 240, true);
            this.restartButton = new objects.Button(this.assetManager, "restartButton", 220, 500);

            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        private restartButtonClick() : void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.restartButton);

            // Setup event handlers
            this.restartButton.on("click", this.restartButtonClick);
        }
    }
}