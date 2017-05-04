var game = new Phaser.Game(804, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.stage.backgroundColor = "#4488AA";
    game.load.image('CoalSprite', 'Sprites/CoalSprite.png');
    game.load.image('gem', 'Sprites/gem.png');
 	game.load.spritesheet('jumpUp', 'Sprites/JumpUp.png', 33, 50);
    game.load.spritesheet('fallDown', 'Sprites/fallDown.png', 35, 47);
    game.load.spritesheet('slide', 'Sprites/slide.png', 45, 37);
    game.load.spritesheet('dude', 'Sprites/run.png', 34, 48);
    game.load.spritesheet('grassyGround', 'Sprites/grassAnimation.png', 67, 76);
    game.load.image('sky', 'Sprites/sky.png');
    game.load.image('ground', 'Sprites/ground.png');
}
var coals;
var emeralds;
var platforms;
var player;

function create() {
	//background
    game.add.sprite(0, 0, 'sky');
    //the player and it's physics
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('walk', [0,1,2,3,4]);
    player.animations.play('walk', 20, true);

    //storage for the coals and emeralds
    coals = game.add.group();
	coals.enableBody = true;
	emeralds = game.add.group();
	emeralds.enableBody = true;

    game.physics.startSystem(Phaser.Physics.ARCADE);
    //ground that the player walks on
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 57, 'ground');
    ground.body.immovable = true;

    //moving grass on top of the ground that the player runs on
    for (var i = 12; i >= 0; i--) {
    grass = game.add.sprite(i * 67, game.world.height - 67, 'grassyGround');
    grass.scale.x *= -1;
    grass.animations.add('move');
    grass.animations.play('move', 12, true);
    };
}
//variables for spawning of coals and emeralds
var time_til_spawnC = 20000;
var time_til_spawnE = 20000;
var last_spawn_timeC = 0;
var last_spawn_timeE = 0;



function update() {

    //  Collide the player and the stars with the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    //animation for the player
	if (player.body.velocity.y < 0) {
		player.loadTexture('jumpUp', 20, true);
    } else if (player.body.velocity.y > 0) {
    	player.loadTexture('fallDown', 20, true);
    } else {
    	player.loadTexture('dude', 20, true);
    }

    //controls
    cursors = game.input.keyboard.createCursorKeys();
    if (cursors.down.isDown && player.body.touching.down && hitPlatform) { //slide
        player.loadTexture('slide', 20, true);
    }
    else if (cursors.up.isDown && player.body.touching.down && hitPlatform) { //jump
        player.body.velocity.y = -350;
    }
    //spawn enemies
  var current_time = game.time.time;
  if(current_time - last_spawn_timeC > time_til_spawnC) {
    time_til_spawnC = Math.random()*3000 + 2000;
    last_spawn_timeC = current_time;
    spawnCoal();
  }
  if(current_time - last_spawn_timeE > time_til_spawnE) {
    time_til_spawnE = Math.random()*8000 + 6000;
    last_spawn_timeE = current_time;
    spawnEmerald();
  }
}

function spawnCoal() {
 	var coal = coals.create(700, 400, 'CoalSprite')
 	coal.body.velocity.x = -150;
}

function spawnEmerald() {
	var emerald = emeralds.create(700, 200, 'gem')
	emerald.body.velocity.x = -150;
}

