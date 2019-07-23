module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private enemy:objects.Enemy;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            // Initialize your variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            this.enemy.Update();
        }

        // Button event handlers
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            this.addChild(this.enemy);
        }
    }
}