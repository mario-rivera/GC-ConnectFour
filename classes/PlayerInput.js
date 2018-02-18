const readline = require('readline');

// rl.question('What do you think of Node.js? ', (answer) => {
// 
//   rl.close();
// });

module.exports = class PlayerInput{
    
    constructor(){
        
        this.rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
    }
}