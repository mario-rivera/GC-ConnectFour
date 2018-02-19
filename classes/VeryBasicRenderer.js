module.exports = class VeryBasicRenderer{
    
    constructor(board){
        
        this.board = board;
    }
    
    render(){
        
        this.board.rows.forEach((row) => {
            
            console.log(row);
        });
    }
}