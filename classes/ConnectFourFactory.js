const GameBoard = require('./GameBoard');
const PlayerInput = require('./PlayerInput');
const VeryBasicRenderer = require('./VeryBasicRenderer');
const Player = require('./Player');
const DumbPlayer = require('./DumbPlayer');
const TurnSwitcher = require('./TurnSwitcher');
const ConnectFour = require('./ConnectFour');

module.exports = class ConnectFourFactory{
    
    static create(){
        
        const renderer = new VeryBasicRenderer();
        const board = new GameBoard();
        const playerInput = new PlayerInput();
        
        const player1 = new Player(1, playerInput, board);
        const player2 = new DumbPlayer(2, board);
        
        const turnSwitcher = new TurnSwitcher([player1, player2]);
        
        const connectFour = new ConnectFour( board, playerInput, renderer, turnSwitcher );
        
        return connectFour;
    }
};