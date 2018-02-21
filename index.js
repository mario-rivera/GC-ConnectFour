const ConnectFourFactory = require('./classes/ConnectFourFactory');
const game = ConnectFourFactory.create();

game.start().then((winner) => {

    console.log('Thanks for playing!');
}).catch((e) => {

    console.log(e);
});
