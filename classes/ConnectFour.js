module.exports = class ConnectFour{
    
    constructor(board, playerInput, renderer, turnSwitcher){
        
        this.board = board;
        this.playerInput = playerInput;
        this.renderer = renderer;
        this.turnSwitcher = turnSwitcher;
    }
    
    set(){
        
        this.board.init();
        this.playerInput.init();
    }
    
    play(){
        
        return new Promise((resolve, reject) => {
            
            this.renderer.render(this.board);
            
            let winner = this.board.checkForWin(); 
            if( winner !== false ){
                
                console.log('The winner is: ' + winner);
                return resolve(winner);
            }
            
            let player = this.turnSwitcher.switchPlayer();
            player.doTurn()
            .then( this.play.bind(this) ).catch(reject);
        });
    }
}