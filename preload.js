var preloadState = {
    preload: function () {
    game.load.image('CoalSprite', 'Sprites/CoalSprite.png');
    game.load.image('gem', 'Sprites/gem.png');
 	game.load.spritesheet('jumpUp', 'Sprites/JumpUp.png', 33, 50);
    game.load.spritesheet('fallDown', 'Sprites/fallDown.png', 35, 47);
    game.load.spritesheet('slide', 'Sprites/slide.png', 45, 37);
    game.load.spritesheet('dude', 'Sprites/run.png', 34, 48);
    game.load.spritesheet('grassyGround', 'Sprites/grassAnimation.png', 67, 76);
    game.load.image('sky', 'Sprites/sky.png');
    game.load.image('ground', 'Sprites/ground.png');
    var preloadLabel = game.add.text(80, 15, 'loading...', {font: '30px Courier', fill: '#ffffff' });

},

create: function() {
    game.state.start('menu');
}
}