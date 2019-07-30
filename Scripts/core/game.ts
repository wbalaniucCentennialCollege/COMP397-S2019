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

    // Define Spritesheet information
    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {

        "images": [
            "./Assets/Sprites/atlas.png"
        ],
        
        "framerate": 20,
        "frames": [
            [0, 0, 190, 49, 0, 0, 0],
            [190, 0, 190, 49, 0, 0, 0],
            [380, 0, 75, 60, 0, 0, 0],
            [455, 0, 41, 61, 0, 0, 0],
            [0, 49, 190, 49, 0, 0, 0],
            [190, 49, 38, 32, 0, -13, -16],
            [228, 49, 38, 32, 0, -13, -16],
            [266, 49, 35, 32, 0, -14, -16],
            [301, 49, 35, 32, 0, -14, -16],
            [336, 49, 17, 32, 0, 0, 0],
            [353, 49, 19, 19, 0, -22, -22],
            [372, 60, 34, 31, 0, -15, -16]
        ],
        
        "animations": {
            "PlayButton": { "frames": [0] },
            "QuitButton": { "frames": [1] },
            "Enemy": { "frames": [2] },
            "Player": { "frames": [3] },
            "RestartButton": { "frames": [4] },
            "Explosion": {
                "frames": [10, 7, 11, 8, 5, 6],
                "speed": 0.5
            },
            "laser": { "frames": [9] },
        },
    }

    assetManifest = [
        {id: "background", src:"./Assets/SeamlessBG.png"},
        {id: "explode", src:"./Assets/Audio/explode.wav"},
        {id: "play_music", src:"./Assets/Audio/play_music.ogg"}
    ];

    function Init():void {
        console.log("Initialization start");

        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

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
        managers.Game.textureAtlas = textureAtlas;

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
            currentScene = new scenes.StartScene();
            stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.PlayScene();
            stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOverScene();
            stage.addChild(currentScene);
            break;
        }
        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();