class GameView{
    constructor(data_Game){
        this.FRAME_WIDTH = 64;
        this.FRAME_HEIGHT = 64;
        this.FRAME_WIDTH_ATTACK = 192;
        this.FRAME_HEIGHT_ATTACK = 192;

        this.game = data_Game;
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.imgs = {};
    }
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground(){
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render(){
        this.clear();
        this.drawBackground();
        for (const id in this.game.players){
            this.drawPlayer(this.game.players[id]);
        }
    }
    createImg(){
        for(let player in this.game.players){
            this.imgs[player] = new Image();
            this.imgs[player].src = this.game.players[player].skinPath;
        }
    }
    
    drawPlayer(player){
        this.imgs[player] = new Image();
        this.imgs[player].src = player.skinPath;
        player.animate();
        let FRAME_ROW_ATTACK = 18;
        let img = this.imgs[player.id];
        let dir = player.direction;

        if (player.direction === 1) dir = 3;
        else if(player.direction === 3) dir = 1;

        let cropX = 64;
        let cropY = 64 * (8 + dir);

        let cropDeathY = 64 * 20;

        if(player.isWalking){
            cropX *= player.walkSpriteIndex;
        }

        if(player.isDying){
            if(this.game.player.hp === 0){
                cropDeathY *= player.deathSpriteIndex;
            }
        }

        if(player.isAttacking){
            cropX = 192 * player.attackSpriteIndex;
            cropY = 192 * ((54 + dir) * 3);
        }

        this.ctx.drawImage(
            img,
            cropX,
            cropY,
            this.FRAME_WIDTH,
            this.FRAME_HEIGHT,
            player.renderX * this.canvas.width,
            player.renderY * this.canvas.height,
            this.FRAME_WIDTH,
            this.FRAME_HEIGHT
        );
    }
}