module managers {
    export class Laser {
        // Variables
        private laserCount:number; 

        public Lasers:objects.Laser[];
        public CurrentLaser:number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        private buildLaserPool():void {
            // Initialize a pool of laser assets
            for(let i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser();
            }
        }
        public Start():void {
            this.laserCount = 50;
            this.Lasers = new Array<objects.Laser>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        }
        public Update():void {
            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }
    }
}