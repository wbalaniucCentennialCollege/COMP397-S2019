module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        public isDead:boolean = false;
        // Constructor
        constructor() {
            super("Enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -800) + -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        }
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