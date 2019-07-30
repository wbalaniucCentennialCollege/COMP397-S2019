module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private playButton: objects.Button;
        private background: objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            this.welcomeLabel = new objects.Label("PLANET DOOM!", "60px", "Consolas", "#FF0000", 320, 240, true);
            this.playButton = new objects.Button(this.assetManager, "playButton", 220, 500);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        private playButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.playButton);

            // Setup event handler for buttons
            this.playButton.on("click", this.playButtonClick);
        }
    }
}