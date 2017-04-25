var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.stage.backgroundColor = "#4488AA";
    game.load.image('coal', 'Sprites/CoalSprite.jpg');
    game.load.image('gem', 'Sprites/GemSprite.jpg');
 	game.load.image('jumpUp', 'Sprites/JumpUp.jpg');
    game.load.image('fallDown', 'Sprites/fallDown.png');
    game.load.spritesheet('dude', 'Sprites/jumpSprite.png', 32, 48);

}

function create() {

	game.add.sprite(10, 0, 'coal');


    sprite = game.add.sprite(40, 100, 'coal');

    sprite.animations.add('walk');

    sprite.animations.play('walk', 50, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

}

function update() {
}
//Tänne tulee peli

