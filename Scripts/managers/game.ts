module managers {        // Access to globally-required items
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static scoreBoard: managers.ScoreBoard;
        public static keyboardManager: managers.Keyboard;
        public static highscore: number;
        public static textureAtlas: createjs.SpriteSheet;
        public static laserManager: managers.Laser;
        public static currentSceneObject: objects.Scene;
    }
}