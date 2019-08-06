module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.ScoreBoard;
        private explosion:objects.Explosion;
        private laserManager: managers.Laser;

        private backgroundMusic: createjs.AbstractSoundInstance;
        private isExploding:boolean = false;
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

            this.laserManager = new managers.Laser();
            managers.Game.laserManager = this.laserManager;

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
            this.laserManager.Update();

            this.enemies.forEach(enemy => {
                if(!enemy.isDead) {
                    enemy.Update();

                    // Check collisions between player and enemy
                    managers.Collision.CheckAABB(this.player, enemy);
                }
            });

            this.laserManager.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy);
                });
            });


            // this.enemy.Update();
            /*
            this.enemies.forEach(enemy => {
                enemy.Update();
                this.player.isDead = managers.Collision.Check(this.player, enemy);

                if(this.player.isDead && !this.isExploding) {
                    // Disable Music
                    this.backgroundMusic.stop();

                    // Create explosion
                    this.explosion = new objects.Explosion(this.player.x, this.player.y);
                    this.explosion.on("animationend", this.handleExplosion);
                    this.addChild(this.explosion);
                    this.isExploding = true;
                    this.removeChild(this.player);
                }
            });
            */
        }

        private handleExplosion() : void {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        }

        // Button event handlers
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });

            this.laserManager.Lasers.forEach(laser => {
                this.addChild(laser);
            });

            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        }
    }
}