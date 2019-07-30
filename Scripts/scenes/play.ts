module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.ScoreBoard;

        private backgroundMusic: createjs.AbstractSoundInstance;
        // Constructor
        constructor() {
            super();

            this.Start();
        }
        // Methods
        public Start(): void {
            // Initialize your variables
            this.background = new objects.Background();
            this.player = new objects.Player();

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5; // Number of enemies I want
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            this.scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreBoard = this.scoreBoard;

            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();

            this.enemies.forEach(enemy => {
                enemy.Update();
                this.player.isDead = managers.Collision.Check(this.player, enemy);

                if(this.player.isDead) {
                    // Disable Music
                    this.backgroundMusic.stop();
                    managers.Game.currentScene = config.Scene.OVER;
                }
            });
        }

        // Button event handlers
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });

            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        }
    }
}