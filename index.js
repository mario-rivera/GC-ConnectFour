const GameBoard = require('./classes/GameBoard');
const PlayerInput = require('./classes/PlayerInput');
const VeryBasicRenderer = require('./classes/VeryBasicRenderer');


const renderer = new VeryBasicRenderer();
const board = new GameBoard();
board.init();

for( var i = 0; i < 10; i ++ ){


    board.putDisc(4, 1).then((winner) => {

        if( winner !== false ){
            
            // console.log(winner);
            renderer.render(board);
            process.exit();
        }
    }).catch((e) => {

        console.log(e.message);
        process.exit();
    });    
}