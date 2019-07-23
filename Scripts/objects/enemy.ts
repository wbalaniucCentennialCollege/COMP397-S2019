module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = 100;
            this.y = -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {}
        public Move():void {
            this.y -= -5;
        }
        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 800 + this.height) {
                this.y = -50;
            }
        }
    }
}