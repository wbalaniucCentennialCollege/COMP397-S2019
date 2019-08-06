var managers;
(function (managers) {
    var Laser = /** @class */ (function () {
        // Constructor
        function Laser() {
            this.Start();
        }
        // Methods
        Laser.prototype.buildLaserPool = function () {
            // Initialize a pool of laser assets
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Laser();
            }
        };
        Laser.prototype.Start = function () {
            this.laserCount = 50;
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        };
        Laser.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        return Laser;
    }());
    managers.Laser = Laser;
})(managers || (managers = {}));
//# sourceMappingURL=laser.js.map