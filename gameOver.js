var gameOverState = {
    
    crate: function() {
        var gameOverLabel = game.add.text(80, 80, 'Game Over', {font: '50px Arial', fill: '#ffffff'});
        
        cursors = game.input.keyboard.createCursorKeys();
        cursors.up.onDown.addOnce(this.restart,this);
    },
    restart: function () {
        game.state.start('menu');
    }
};