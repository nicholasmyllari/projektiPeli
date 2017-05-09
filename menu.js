var menuState = {
    
    create: function () {
        var nameLabel = game.add.text(80, 80, 'The Nuclear game \n  Collect the nuclear gems and avoid the coals', {
            font: '25px Arial', fill: '#ffffff', align: 'center' });
        
        var startLabel = game.add.text(80, game.world.height-80, 'Press the "up" key to start', 
        {font: '25px Arial', fill: '#ffffff', align: 'center'});
    
        cursors = game.input.keyboard.createCursorKeys();
        cursors.up.onDown.addOnce(this.start, this);
    },
        start: function() {
            game.state.start('play'); 
        }
      
    } 

