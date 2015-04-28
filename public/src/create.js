function create() {

  // enable arcade physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

  // The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

  // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 30, 'groundLarge');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

  // Now let's create ledges
    var xVals = [0, 1, 6, 7, 3.5, 2, 5, 2, 3, 4, 5, 0, 7, 3.5];
    var yVals = [1, 1, 1, 1, 2, 3, 3, 5, 5, 5, 5, 4, 4, 4];

    var ledgeCreate = function(x, y){
      for (var i = 0; i < x.length; i++){
        ledge = platforms.create(x[i] * 100, y[i] * 100, 'ground100');
        ledge.body.immovable = true;; 
      }
    }(xVals, yVals);

  //player creation time
    // The player and its settings
    player = game.add.sprite(400, 180, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [3, 4, 5, 6, 7], 10, true);
    player.animations.add('right', [3, 4, 5, 6, 7], 10, true);
    player.animations.add('jump', [26], 10, true);
    player.anchor.setTo(.5);

    // Ring creation
      ring = game.add.sprite()

}