const EOL = require('os').EOL;

module.exports = class VeryBasicRenderer{
    
    constructor(){
        
    }
    
    render(board){
        
        console.log('=====================' + EOL);
        board.rows.forEach((row) => {
            
            console.log(row);
        });
        
        console.log(EOL);
        console.log('=====================' + EOL);
    }
}