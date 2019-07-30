/// <reference path="_references.ts"/>
(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickableButton:objects.Button;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Create variables that store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager: managers.Keyboard;

    assetManifest = [
        {id: "startButton", src:"./Assets/StartButton.png"},
        {id: "nextButton", src:"./Assets/NextButton.png"},
        {id: "quitButton", src:"./Assets/QuitButton.png"},
        {id: "backButton", src:"./Assets/BackButton.png"},
        {id: "playButton", src:"./Assets/PlayButton.png"},
        {id: "restartButton", src:"./Assets/RestartButton.png"},
        {id: "background", src:"./Assets/SeamlessBG.png"},
        {id: "player", src:"./Assets/Spaceship.png"},
        {id: "enemy", src:"./Assets/Enemy.png"},
        {id: "explode", src:"./Assets/Audio/explode.wav"},
        {id: "play_music", src:"./Assets/Audio/play_music.ogg"}
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
        
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;  // Default State

        keyboardManager = new managers.Keyboard;
        // GLOBAL REFERENCE TO MY KEYBOARD
        managers.Game.keyboardManager = keyboardManager;

        managers.Game.assetManager = assetManager;

        Main();
    }

    function Update() {
        if(currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }

        currentScene.Update();

        stage.update();
    }

    function Main() {
        // console.log("Game Start...");
        // Define a Finite State Machine
        switch(managers.Game.currentScene) {
            case config.Scene.START:
            stage.removeAllChildren();
            currentScene = new scenes.StartScene(assetManager);
            stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.PlayScene(assetManager);
            stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOverScene(assetManager);
            stage.addChild(currentScene);
            break;
        }
        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();