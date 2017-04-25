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
    game.load.image('ground', 'Sprites/ground.png');

}

var platforms;

function create() {

    game.add.sprite(0, 0, 'sky');

    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(0, 250, 'ground');
    ledge.body.immovable = true;
}

function update() {

    //  Collide the player and the stars with the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);

}
