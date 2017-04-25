var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.stage.backgroundColor = "#4488AA";
    game.load.image('coal', 'Sprites/CoalSprite.png');
    game.load.image('gem', 'Sprites/gem.png');
 	game.load.image('jumpUp', 'Sprites/JumpUp.png');
    game.load.image('fallDown', 'Sprites/fallDown.png');
    game.load.image('silde', 'Sprites/slide.png');
    game.load.spritesheet('dude', 'Sprites/run.png', 34, 48);

}

function create() {


    sprite = game.add.sprite(40, 100, 'dude');

    sprite.animations.add('walk');

    sprite.animations.play('walk', 5, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

}

function update() {
}
//Tänne tulee peli

