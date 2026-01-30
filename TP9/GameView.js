class GameView{
    constructor(data_Game){
        this.FRAME_WIDTH = 64;
        this.FRAME_HEIGHT = 64;
        this.FRAME_WIDTH_ATTACK = 192;
        this.FRAME_HEIGHT_ATTACK = 192;

        this.game = data_Game;
        this.canvas = document.querySelector("#all");
        this.ctx = this.canvas.getContext("2d");
        this.canvasTab = document.querySelector("#tab");
        this.ctxTab = this.canvasTab.getContext("2d");
        
        this.startTime = Date.now();
        this.imgs = {};
    }
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground(){
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render(){
        this.clear();
        this.drawBackground();
        this.drawScordBoard();
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

    drawHpBar(player, co_x, co_y, frameWidth) {
        if (player.isDying) return;
        const barWidth = 40;
        const barHeight = 6;

        const hpRatio = player.hp / player.maxHp;

        const barX = co_x + frameWidth / 2 - barWidth / 2;
        const barY = co_y - 10;

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(barX - 1, barY - 1, barWidth + 2, barHeight + 2);
        if (hpRatio > 0.6){
         this.ctx.fillStyle = "green";
        }
        else if (hpRatio > 0.3){
         this.ctx.fillStyle = "orange";
        }
        else {this.ctx.fillStyle = "red";
        }
        this.ctx.fillRect(barX, barY, barWidth * hpRatio, barHeight);
    }

    drawCdBar(player, co_x, co_y,frameWidth) {
        if (player.isDying) return;
        if (player.currentAttackCooldown == 0) return ;

        const barWidth = 40;
        const barHeight = 6;

        const CdRatio = player.currentAttackCooldown / player.attackCooldown;
        const barX = co_x + frameWidth / 2 - barWidth / 2;
        const barY = co_y - 20;

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(barX - 1, barY - 1, barWidth + 2, barHeight + 2);
        this.ctx.fillStyle = "cyan";
        this.ctx.fillRect(barX, barY, barWidth * CdRatio, barHeight);


    }
    drawScordBoard(){
        const timer = Math.floor((Date.now() - this.startTime) / 1000);

        this.ctxTab.clearRect(0, 0, this.canvasTab.width, this.canvasTab.height);

        this.ctxTab.fillStyle = "grey";
        this.ctxTab.font = "30px Arial";
        this.ctxTab.fillRect(0, 0, this.canvasTab.width, this.canvasTab.height);
        this.ctxTab.fillText(`Nombre de joueur(s) =`, 50, 150);

        let nb_players = 0;
        let nb_mort = 0;
        let gagnant = "";
        let list_player = [];
        let remotad = 0;
        let cpt = a;
        let arret = 0;
        
        for (const id in this.game.players){
            nb_players +=1;
            list_player.push(this.game.players[id].name);
            if(this.game.players[id].isDead){
                nb_mort += 1;
            }
        }

        if(!this.game.isRunning){
            this.ctx.font = "50px Arial";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Waiting for players ...", 275, 100);
        }

        let alivePlayers = nb_players - nb_mort;

        if (this.game.isRunning){
            this.ctxTab.fillStyle = "black";
            this.ctxTab.font = "30px Arial";
            this.ctxTab.fillText(`Nombre de joueurs = ${alivePlayers} / ${nb_players}`, 50, 100);
            if(alivePlayers > 1){
                this.ctxTab.fillText(`Temps écoulé : ${timer}s`, 50, 150);
            }else if(alivePlayers === 1){
                arret = timer;
                this.ctxTab.fillText(`Temps écoulé : ${arret}s`, 50, 150);
                this.ctxTab.fillText("Game finished", 50, 200);
                for (const id in this.game.players){
                    if(!this.game.players[id].isDead){
                        gagnant = this.game.players[id].name;
                    }
                }
                this.ctx.font = "50px Arial";
                this.ctx.fillStyle = "Red";
                this.ctx.fillText(`Le/La gagnant(e) est ${gagnant}`, 275, 100);
            }
            for (const id in this.game.players){
                if(this.game.players[id].isDead){
                            this.ctxTab.fillStyle = "black";
                            this.ctxTab.font = "30px Arial";
                            this.ctxTab.fillText(`${alivePlayers + cpt}: ${this.game.players[id].name} est mort`, 45, 950 - remotad);
                            remotad += 30;
                }
            }
        }else{
            this.ctxTab.fillStyle = "black";
            this.ctxTab.font = "30px Arial";
            this.ctxTab.fillText("waiting for the game to start", 50, 150);
        }
        
    }
 
    drawPlayer(player){
        player.animate();
        let diff = [7, 13, 18, 21, 24, 26, 29];
        let check=0;
        let img = this.imgs[player.id];
        let dir = player.direction;

        if (player.direction === 1) dir = 3;
        else if(player.direction === 3) dir = 1;

        let cropX = 64;
        let cropY = 64 * (8 + dir);

        let frameW = this.FRAME_WIDTH;
        let frameH = this.FRAME_HEIGHT;
        let rendX = player.renderX * this.canvas.width;
        let rendY = player.renderY * this.canvas.height;
    

        if(player.isDying){
            cropX *= player.deathSpriteIndex;
            cropY = 64 * 20;
        }

        if(player.isWalking){
            cropX *= player.walkSpriteIndex;
        }

        if(player.isAttacking || player.currentAttackSpriteStep > 0 || player.attackSpriteIndex > 0){
            for (let i = 0; i < diff.length; i++){
                if(player.skinPath === `assets/${diff[i]}.png`){
                    check = 1;
                }
            }
            if(check === 1){
                frameW = 128;
                frameH = 128;
                rendX = (player.renderX) * this.canvas.width-32;
                rendY = (player.renderY) * this.canvas.height-32;
                cropX = 128 * player.attackSpriteIndex;
                cropY = (27 * 128) + (dir * 128);
            }
            else{
                frameW = this.FRAME_WIDTH_ATTACK;
                frameH = this.FRAME_HEIGHT_ATTACK;
                rendX = (player.renderX) * this.canvas.width-64;
                rendY = (player.renderY) * this.canvas.height-64;
                cropX = 192 * player.attackSpriteIndex;
                cropY = (18 * 192) + (dir * 192);
            }
            
        }

        this.ctx.drawImage(
            img,
            cropX,
            cropY,
            frameW,
            frameH,
            rendX,
            rendY,
            frameW,
            frameH
        );
        if (!player.isDying) {
            const drawSize = 64;
            this.ctx.font = "15px Arial";
            this.ctx.fillStyle = "black";
            this.ctx.fillText(player.name, player.renderX * this.canvas.width +14, player.renderY * this.canvas.height - drawSize / 2 + 10);
            this.ctx.fillText(`lvl (${player.lvl})`, player.renderX * this.canvas.width +14, player.renderY * this.canvas.height - drawSize / 2 - 15);
            this.drawHpBar(player, player.renderX * this.canvas.width - drawSize / 20, player.renderY * this.canvas.height - drawSize / 2+35, drawSize);
            this.drawCdBar(player, player.renderX * this.canvas.width - drawSize / 20, player.renderY * this.canvas.height - drawSize / 2+55, drawSize);
        }
    }
}