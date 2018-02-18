const GameBoard = require('./classes/GameBoard');

const board = new GameBoard();
board.init();

for( var i = 0; i < 10; i ++ ){


    board.putDisc(4, 1).then((winner) => {
        
        if( winner !== false ){
            
            console.log(winner);
            process.exit();
        }
    }).catch((e) => {
        
        console.log(e.message);
        process.exit();
    });    
}