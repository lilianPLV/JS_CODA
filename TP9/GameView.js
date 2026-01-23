class GameView{
    constructor(data_Game){
        this.FRAME_WIDTH = 64;
        this.FRAME_HEIGHT = 64;
        this.FRAME_WIDTH_ATTACK = 192;
        this.FRAME_HEIGHT_ATTACK = 192;

        this.game = data_Game;
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");


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
            const player = this.game.players[id];
            player.animate();
            this.drawPlayer(player);
        }
    }

    drawPlayer(player){
        let FRAME_ROW = 10;
        let FRAME_ROW_ATTACK = 18;
        const img = new Image();
        img.src = player.skinPath;

        if(player.isWalking){
            if(player.direction === 0){
                FRAME_ROW = 8;
            }
            else if(player.direction === 3){
                FRAME_ROW = 9;
            }
            else if(player.direction === 2){
                FRAME_ROW = 10;
            }
            else if(player.direction === 1){
                FRAME_ROW = 11;
            }
        }
        else if(player.isDying){
            if(player.hp >= 0){
                FRAME_ROW = 20;
            }
        }
        else if(player.isAttacking){
            if(player.direction === 0){
                FRAME_ROW_ATTACK = 18;
            }
            else if(player.direction === 3){
                FRAME_ROW_ATTACK = 19;
            }
            else if(player.direction === 2){
                FRAME_ROW_ATTACK = 20;
            }
            else if(player.direction === 1){
                FRAME_ROW_ATTACK = 21;
            }
            else{
                player.direction = player.direction;
            }
        }
        // if(player.isAttacking){
        //     this.ctx.drawImage(
        //         img,
        //         player.attackSpriteIndex * this.FRAME_WIDTH_ATTACK,
        //         FRAME_ROW_ATTACK * this.FRAME_HEIGHT_ATTACK,
        //         this.FRAME_WIDTH_ATTACK,
        //         this.FRAME_HEIGHT_ATTACK,
        //         player.renderX * this.canvas.width,
        //         player.renderY * this.canvas.height,
        //         this.FRAME_WIDTH_ATTACK,
        //         this.FRAME_HEIGHT_ATTACK
        //     );
        // }
        
        // else if(!player.isAttacking){
        this.ctx.drawImage(
            img,
            player.walkSpriteIndex * this.FRAME_WIDTH,
            FRAME_ROW * this.FRAME_HEIGHT,
            this.FRAME_WIDTH,
            this.FRAME_HEIGHT,
            player.renderX * this.canvas.width,
            player.renderY * this.canvas.height,
            this.FRAME_WIDTH,
            this.FRAME_HEIGHT
        );
        // }
    }
}