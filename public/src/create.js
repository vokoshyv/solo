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
    var xVals = [200, 300, 400, 500, 200, 300, 400, 500, 0, 700];
    var yVals = [200, 200, 200, 200, 500, 500, 500, 500, 350, 350];
    var ledgeCreate = function(x, y){
      for (var i = 0; i < x.length; i++){
        ledge = platforms.create(x[i], y[i], 'ground100');
        ledge.body.immovable = true;; 
      }
    }(xVals, yVals);

  //player creation time
    // The player and its settings
    player = game.add.sprite(100, game.world.height - 500, 'dude');

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
  //ring creation
    // rings = game.add.group();

    // rings.enableBody = true;
    // rings.physicsBodyType = Phaser.Physics.ARCADE;
    // rings.collideWorldBounds = true;

    // for (var i = 0; i < 30; i++){
    //   var ring = rings.create(i*30, 0, 'ring');
    //   ring.body.gravity.y = 6;
    //   ring.body.bounce.y = 0.7 + Math.random() * 0.2;
    // }

  // //score
  //   scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

}