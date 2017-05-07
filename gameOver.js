var gameOverState = {
    
    crate: function() {
        var gameOverLabel = game.add.text(80, 80, 'Game Over', {font: '50px Arial', fill: '#ffffff'});
        
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.restart,this);
    },
    restart: function () {
        game.state.start('menu');
    }
};