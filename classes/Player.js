module.exports = class Player{
    
    constructor(playerId, playerInput, board){
        
        this.playerId = playerId;
        this.playerInput = playerInput;
        this.board = board;
    }
    
    doTurn(){
        
        return this.playerInput.prompt('Select a column (1-7):')
        .then((answer) => {
            
            return this.board.putDisc(answer, this.playerId)
            .catch((e) => {
                
                console.log(e.message);
                return this.doTurn();
            });
        });
    }
}