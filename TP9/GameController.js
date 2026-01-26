class GameController {
    constructor() {
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        this.data_Game = new Game();

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
        this.gameView = new GameView(this.data_Game);

        this.lastServerUpdate = performance.now();

        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);
        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);

    }
    // === Main render loop ===
    loop(timestamp) {
        const alpha = Math.min( (timestamp - this.lastServerUpdate) / this.SERVER_INTERVAL, 1);
        for (let player in this.data_Game.players){
            this.data_Game.players[player].interpolate(alpha);
        }
        //console.log(alpha);
        this.gameView.createImg();
        this.gameView.render();
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
            this.lastServerUpdate = performance.now();
        }
    }
    initInput(){
        window.addEventListener("keydown", (e) =>{
            switch(e.key){
                case "z":
                    this.inputState.up = true;
                    // console.log(this.inputState.up);
                    break;
                case "q":
                    this.inputState.left = true;
                    // console.log(this.inputState.left);
                    break;
                case "s":
                    this.inputState.down = true;
                    // console.log(this.inputState.down);
                    break;
                case "d":
                    this.inputState.right = true;
                    // console.log(this.inputState.right);
                    break;
                case " ":
                    this.inputState.attack = true;
                    break;
                case "m":
                    this.data_Game.hp = 0;
                    break;
            }
        });
        window.addEventListener("keyup", (e) =>{
            switch(e.key){
                case "z":
                    this.inputState.up = false;
                    break;
                case "q":
                    this.inputState.left = false;
                    break;
                case "s":
                    this.inputState.down = false;
                    break;
                case "d":
                    this.inputState.right = false;
                    break;
                case " ":
                    this.inputState.attack = false;
                    break;
                case "m":
                    this.data_Game.hp = 0;
                    break;
            }
        });
        // window.addEventListener("click", (e) =>{
        //     if(e.button === 0){
        //         this.inputState.attack = false;
        //     }
        // });
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