(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickableButton:objects.Button;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    assetManifest = [
        {id: "clickMeButton", src:"./Assets/ClickMeButton.png"}
    ];

    function Init():void {
        console.log("Initialization start");

        assetManager = new createjs.LoadQueue();    // Creates the container used for the queue
        assetManager.installPlugin(createjs.Sound); // Necessary to use sound in our game
        assetManager.loadManifest(assetManifest);   // Loads the manifest defined above
        assetManager.on("complete", Start, this);
        // Start();
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas)
        stage.enableMouseOver(20);  // Frequency of checks. Computationally expensive. Turn on in menus. Turn off in game.
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }

    function clickableButtonMouseClick():void {
        helloLabel.text = "Clicked";
    }

    function Main() {
        console.log("Game Start...");

        // Label Initialization
        helloLabel = new objects.Label("Hi World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);

        // Button Initialization
        clickableButton = new objects.Button(assetManager, "clickMeButton", 320, 340);

        clickableButton.regX = 95;
        clickableButton.regY = 24.5;
        
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }

    window.onload = Init;
})();