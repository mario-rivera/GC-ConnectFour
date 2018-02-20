const readline = require('readline');
const EOL = require('os').EOL;

module.exports = class PlayerInput{
    
    constructor(){
        
    }
    
    init(){
        
        this.rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
    }
    
    prompt(text){
        
        return new Promise((resolve, reject) => {
            
            this.rl.question(text + EOL, (answer) => {
                
                resolve(answer);
                this.rl.pause();
            });
        });
    }
}