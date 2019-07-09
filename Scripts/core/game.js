(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickableButton;
    function Init() {
        console.log("Initialization start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive. Turn on in menus. Turn off in game.
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function clickableButtonMouseClick() {
        helloLabel.text = "Clicked";
        console.log("AHHHH!");
    }
    function Main() {
        console.log("Game Start...");
        // Label Initialization
        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        // Button Initialization
        clickableButton = new objects.Button("./Assets/ClickMeButton.png", 320, 340);
        clickableButton.regX = 95;
        clickableButton.regY = 24.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map