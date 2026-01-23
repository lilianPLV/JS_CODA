class Game {
   constructor(){
      this.isRunning = false;
      this.isOver = false;
      this.timer = 190.6000000000091;
      this.players = {};
   }
   update(gameStateFromServer){
      this.isRunning = gameStateFromServer.isRunning;
      this.isOver = gameStateFromServer.isOver;
      this.timer = gameStateFromServer.timer;

      const player_serv = gameStateFromServer.players;

      for (const id in player_serv){
         const data = player_serv[id];
         if(!this.players[id]){
            this.players[id] = new Player(
               id,
               data.name,
               data.skinPath,
               data.position
            );
         }
         else{
            this.players[id].update(data);
         }
      }
      for (const id in this.players) {
         if (!player_serv[id]) {
            delete this.players[id];
         }
      }
      if (!this.lastPositions) this.lastPositions = {};
         for (const id in this.players) {
            const p = this.players[id];
            const key = `${p.renderX},${p.renderY}`;

            if (this.lastPositions[id] !== key) {
            console.log( `X:${p.renderX} Y:${p.renderY}`);
            this.lastPositions[id] = key;
            }
         }
   }
}
