(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;

    function Init():void {
        console.log("Initialization start");
        Start();
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas)
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }

    function Main() {
        console.log("Game Start...");

        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);

        stage.addChild(helloLabel);
    }

    window.onload = Init;
})();