class GameController {
    constructor() {
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;
        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);
        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);

        this.data_Game = new Game;

        this.serverUrl = localStorage.getItem("backend");
        this.skinPath = localStorage.getItem("skinPath");
        this.pseudo = localStorage.getItem("pseudo");

        this.inputState = {
            up : false,
            down : false,
            left : false,
            right : false,
            attack : false
        };

        this.socket = new WebSocket(this.serverUrl);
        this.gameView = new GameView;
        // this.gameView.drawBackground();
    }
    // === Main render loop ===
    loop(timestamp) {
        // Request the next frame
        requestAnimationFrame(this.loop);
    }
    initSocket(){
        this.socket.onopen = () => {
            console.log("Connected to server");
            
            this.socket.send(JSON.stringify({
                name: this.pseudo,
                skinPath: this.skinPath
            }));
        };
        this.socket.onmessage = (e) => {
            console.log("Got the message");
            this.data_Game.update(JSON.parse(e.data));
        }
    }
    initInput(){
        window.addEventListener("keydown", (e) =>{
            switch(e.key){
                case "w":
                    this.inputState.up = true;
                    console.log(this.inputState);
                    break;
                case "a":
                    this.inputState.left = true;
                    console.log(this.inputState);
                    break;
                case "s":
                    this.inputState.down = true;
                    console.log(this.inputState);
                    break;
                case "d":
                    this.inputState.right = true;
                    console.log(this.inputState);
                    break;
            }
        });
        window.addEventListener("click", (e) =>{
            if(e.button === 0){
                this.inputState.attack = true;
                console.log(this.inputState);
            }
        });
        window.addEventListener("keyup", (e) =>{
            switch(e.key){
                case "w":
                    this.inputState.up = false;
                    console.log(this.inputState);
                    break;
                case "a":
                    this.inputState.left = false;
                    console.log(this.inputState);
                    break;
                case "s":
                    this.inputState.down = false;
                    console.log(this.inputState);
                    break;
                case "d":
                    this.inputState.right = false;
                    console.log(this.inputState);
                    break;
            }
        });
        window.addEventListener("click", (e) =>{
            if(e.button === 0){
                this.inputState.attack = false;
                console.log(this.inputState);
            }
        });
    }
    startInputSender() {
        setInterval(() => {
            if (this.socket.readyState !== WebSocket.OPEN) {
                return;
            }
            const message = {
                type : "input",
                input: this.inputState
            };
            this.socket.send(JSON.stringify(message));
        }, this.SERVER_INTERVAL);
    }
}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
AAA = new GameController();
AAA.initSocket();
AAA.initInput();
AAA.startInputSender();