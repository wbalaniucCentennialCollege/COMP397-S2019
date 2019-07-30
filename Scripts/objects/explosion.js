var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        // Constructor
        function Explosion(x, y) {
            var _this = _super.call(this, "Explosion") || this;
            _this.explosionSFX = createjs.Sound.play("explode");
            _this.explosionSFX.volume = 0.5;
            _this.x = x;
            _this.y = y;
            _this.scaleX = 2;
            _this.scaleY = 2;
            return _this;
        }
        // Methods
        Explosion.prototype.Start = function () { };
        Explosion.prototype.Update = function () { };
        Explosion.prototype.Reset = function () { };
        Explosion.prototype.Move = function () { };
        Explosion.prototype.CheckBounds = function () { };
        return Explosion;
    }(objects.GameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map