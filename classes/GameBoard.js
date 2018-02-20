const Enums = require('../enums/GameBoardEnums');
const CheckWinner = require('../lib/checkWinner');

module.exports = class GameBoard{
        
    constructor(){
        
        this.rows;
    }
    
    init(){
        
        this.rows = Array(Enums.ROWS).fill(null).map((e) => {
            
            return Array(Enums.COLUMNS).fill(Enums.EMPTYROW_VAL);
        });
    }
    
    putDisc(colNumber, playerId){
        
        return new Promise((resolve, reject) => {
            
            colNumber = parseInt(colNumber);
            if( !this.isValidColumn(colNumber) ){
                
                return reject( new Error('The column must be a number between 1 and ' + Enums.COLUMNS) );
            }
            
            const emptyRowIndex = this.getEmptyRowForColumn(colNumber);
            if( emptyRowIndex === -1 ){
                
                return reject( new Error('There is no more space in column ' + colNumber) );
            }
            
            this.rows[emptyRowIndex][colNumber-1] = playerId;
            
            return resolve( true );
        });
    }
    
    isValidColumn(number){
        
        return (number > 0 && number <= Enums.COLUMNS);
    }
    
    getEmptyRowForColumn(colNumber){
        
        const colIndex = colNumber - 1;
        for( let i = this.rows.length - 1; i >= 0; i-- ){
            
            if(this.rows[i][colIndex] === Enums.EMPTYROW_VAL){
                return i;
            }
        }
        
        return -1;
    }
    
    checkForWin(){
        
        return CheckWinner( this.rows );
    }
};