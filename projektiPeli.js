var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.stage.backgroundColor = "#4488AA";
    game.load.image('coal', 'Sprites/CoalSprite.jpg');
    game.load.image('gem', 'Sprites/GemSprite.jpg');
 	game.load.image('jumpUp', 'Sprites/JumpUp.jpg');
    game.load.image('fallDown', 'Sprites/fallDown.png');
    game.load.spritesheet('dude', 'Sprites/jumpSprite.png', 32, 48);
    game.load.image('sky', 'Sprites/sky.png');
}

var platforms;

function create() {

	game.add.sprite(10, 0, 'coal');

    sprite = game.add.sprite(40, 100, 'coal');

    sprite.animations.add('walk');

    sprite.animations.play('walk', 50, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;
}

function update() {
}
//Tänne tulee peli

