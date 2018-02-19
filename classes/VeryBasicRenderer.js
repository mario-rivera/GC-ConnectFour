module.exports = class VeryBasicRenderer{
    
    constructor(){
        
    }
    
    render(board){
        
        board.rows.forEach((row) => {
            
            console.log(row);
        });
    }
}