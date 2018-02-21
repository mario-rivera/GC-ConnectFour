module.exports = class ConnectFour{

    constructor(board, playerInput, renderer, turnSwitcher){

        this.board = board;
        this.playerInput = playerInput;
        this.renderer = renderer;
        this.turnSwitcher = turnSwitcher;
    }

    start(){

        this.set();
        return this.play().then( this.onGameWon.bind(this) );
    }

    set(){

        this.board.init();
        this.playerInput.init();
        this.turnSwitcher.reset();
        
        this.turnSwitcher.players.forEach((player) => {

            if( typeof player.reset !== 'undefined' ){
                player.reset();
            }
        });
    }

    play(){

        let player = this.turnSwitcher.switchPlayer();

        return player.doTurn().then((move) => {

            this.renderer.render(this.board);

            let winner = this.board.checkForWin();
            if( winner !== false ){

                return winner;
            }

            return this.play();
        });
    }

    onGameWon(winner){

        console.log('The winner is: ' + winner + '. ');

        return this.playerInput.prompt('Play again? (y/n)').then((answer) => {

            if(answer.toLowerCase() == 'y' || answer.toLowerCase() == 'yes'){

                this.playerInput.close();
                return this.start();
            }

            return winner;
        });
    }
}
