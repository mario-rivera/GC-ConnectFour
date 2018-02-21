const Enums = require('../enums/GameBoardEnums');

module.exports = class DumbPlayer{

    constructor(playerId, board){

        this.playerId = playerId;
        this.board = board;

        this.currentCol = 1;
    }

    doTurn(){

        if( this.currentCol === Enums.COLUMNS ){

            throw new Error('No more spaces to drop discs.');
        }

        return this.board.putDisc(this.currentCol, this.playerId)
            .catch((e) => {

                this.currentCol++;
                return this.doTurn();
            });
    }

    reset(){

        this.currentCol = 1;
    }
}
