module objects {
    export class Button extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(imagePath:string, x:number = 0, y:number = 0) {
            super(imagePath);

            this.x = x;
            this.y = y;

            // Setup Event Handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}