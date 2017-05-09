var gameOverState = {
    
    create: function() {
<<<<<<< HEAD
        var gameOverLabel = game.add.text(80, 80, '\nGAME OVER\nPress the up key to restart', {font: '25px Arial', fill: '#ffffff', align: 'center'});
=======
        var gameOverLabel = game.add.text(80, 80, 'Game Over', {font: '50px Arial', fill: '#ffffff'});
>>>>>>> origin/master
        
       cursors = game.input.keyboard.createCursorKeys();
       cursors.up.onDown.addOnce(this.restart, this);
    },
    restart: function () {
        game.state.start('menu');

}
};
  

