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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Constructor
        function Background() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Background.prototype.Start = function () {
            this.speedY = 0.25;
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Background.prototype.Reset = function () {
            this.y = -1100;
        };
        Background.prototype.Move = function () {
            this.y += this.speedY;
        };
        Background.prototype.CheckBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map