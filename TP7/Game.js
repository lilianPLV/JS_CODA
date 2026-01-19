// Exemple de message recu par le backend, à utiliser pour vos tests :
const backendData = {
   "isRunning":true,
   "isOver":false,
   "timer":190.6000000000091,
   "players":{
      "3cd71bbb-6a6b-4d4e-80e3-107130328a27":{
         "name":"blabla",
         "skinPath":"./assets/3.png",
         "position":[
            0.5600000000000003,
            0.17999999999999977
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":3,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      },
      "28ead291-fcea-4b41-a596-d3c876c49a53":{
         "name":"bloublou",
         "skinPath":"./assets/4.png",
         "position":[
            0.44,
            0.19
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":0,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      }
   }
};

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
   }
}

const game = new Game();
console.log("Initial game state:", game);
game.update(backendData);

// Simulate a player leaving and a new player joining
delete modifiedBackendData.players["3cd71bbb-6a6b-4d4e-80e3-107130328a27"];
modifiedBackendData.players["new-player-id"] = {
   name: "AAA",
   skinPath: "./assets/8.png",
   position: [0.5, 0.2],
   lvl: 1,
   hp: 100,
   maxHp: 100,
   hpRegenRate: 10,
   speed: 0.2,
   direction: 1,
   isAttacking: false,
   isWalking: false,
   isDying: false,
   attackCooldown: 1,
   currentAttackCooldown: 0,
};
game.update(modifiedBackendData);
