const ConnectFourFactory = require('./classes/ConnectFourFactory');
const game = ConnectFourFactory.create();

game.set();

game.play().then((winner) => {
    
}).catch((e) => {
    
    console.log(e);
});