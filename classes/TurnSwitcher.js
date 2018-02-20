module.exports = class TurnSwitcher{
    
    constructor(players){
        
        this.counter = 0;
        this.players = players;
    }
    
    switchPlayer(){
        
        const player = this.players[this.counter];
        if( this.counter + 1 === this.players.length ){
            
            this.counter = 0;
        } else {
            
            this.counter++;
        }
        
        return player;
    }
}