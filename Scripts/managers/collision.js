var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            // Create 2 temp Vec2 objects user for collision detection.
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                if (!object2.isColliding) {
                    // Collision successfull
                    // console.log("Collision with " + object2.name);
                    switch (object2.name) {
                        case "enemy":
                            createjs.Sound.play("explode");
                            // Increase my score value
                            objects.Game.scoreBoard.Score += 50;
                            if (objects.Game.scoreBoard.HighScore <= objects.Game.scoreBoard.Score) {
                                objects.Game.scoreBoard.HighScore = objects.Game.scoreBoard.Score;
                                objects.Game.highscore = objects.Game.scoreBoard.HighScore;
                            }
                            break;
                    }
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
                return false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map