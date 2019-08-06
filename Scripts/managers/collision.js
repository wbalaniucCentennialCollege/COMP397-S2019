var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // Check collisions using AABB (Axis-aligned Bounding Box)
        Collision.CheckAABB = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            // CHECK ALL BOUNDS
            if ((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH)) {
                switch (object2.name) {
                    case "Enemy":
                        managers.Game.scoreBoard.Score += 50;
                        if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                            managers.Game.highscore = managers.Game.scoreBoard.HighScore;
                        }
                        var explosion = new objects.Explosion(object2.x - object2.halfW, object2.y - object2.halfH);
                        managers.Game.currentSceneObject.addChild(explosion);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        object1.Reset();
                        object2.Reset();
                        break;
                }
            }
        };
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
                            // Increase my score value
                            managers.Game.scoreBoard.Score += 50;
                            if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                managers.Game.highscore = managers.Game.scoreBoard.HighScore;
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