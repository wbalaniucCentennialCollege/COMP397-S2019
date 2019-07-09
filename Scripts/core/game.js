(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickableButton;
    var assetManager;
    var assetManifest;
    assetManifest = [
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "nextButton", src: "./Assets/NextButton.png" },
        { id: "backButton", src: "./Assets/QuitButton.png" }
    ];
    function Init() {
        console.log("Initialization start");
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue
        assetManager.installPlugin(createjs.Sound); // Necessary to use sound in our game
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this);
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive. Turn on in menus. Turn off in game.
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Start...");
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                break;
            case config.Scene.GAME:
                break;
            case config.Scene.OVER:
                break;
        }
        // Define a Finite State Machine
        /*
        // Label Initialization
        helloLabel = new objects.Label("Hi World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);

        // Button Initialization
        clickableButton = new objects.Button(assetManager, "clickMeButton", 320, 340);

        clickableButton.regX = 95;
        clickableButton.regY = 24.5;
        
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
        */
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map