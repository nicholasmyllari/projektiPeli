<<<<<<< HEAD
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){

    game.load.image('coal', 'Sprites/coal.png');
    game.load.image('emerald', 'Sprites/platform.png');
    game.load.image('jumpUp', 'Sprites/star.png');
    game.load.image('jumpDown', 'Sprites/star.png');
    game.load.image('slide', 'Sprites/star.png');
    game.load.spritesheet('dude', 'Sprites/dude.png', 32, 48);

}

function create() {

    sprite = game.add.sprite(40, 100, 'coal');

    sprite.animations.add('walk');

    sprite.animations.play('walk', 50, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

}

function update() {
}
=======
//Tänne tulee peli
>>>>>>> origin/master
