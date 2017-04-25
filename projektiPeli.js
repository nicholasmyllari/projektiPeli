var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.stage.backgroundColor = "#4488AA";
    game.load.image('coal', 'Sprites/CoalSprite.png');
    game.load.image('gem', 'Sprites/gem.png');
 	game.load.image('jumpUp', 'Sprites/JumpUp.png');
    game.load.image('fallDown', 'Sprites/fallDown.png');
    game.load.image('silde', 'Sprites/slide.png');
    game.load.spritesheet('dude', 'Sprites/run.png', 34, 48);
    game.load.image('sky', 'Sprites/sky.png');

}

var platforms;

function create() {


    game.add.sprite(0, 0, 'sky');
    sprite = game.add.sprite(40, 100, 'dude');


    sprite.animations.add('walk');

    sprite.animations.play('walk', 5, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

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

