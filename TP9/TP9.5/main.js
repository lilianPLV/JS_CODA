import Game from "./modele/Game.js";
import GameController from "./controler/GameController.js";
import GameView from "./view/GameView.js";

const game = new Game();

const gameView = new GameView(game);

const gameController = new GameController(game, gameView);