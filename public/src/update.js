function update() {
  game.physics.arcade.collide(player, platforms);
  // game.physics.arcade.collide(rings, platforms);
  // game.physics.arcade.overlap(player, rings, collectStar, null, this);
  // function collectStar(player, ring){
  //   ring.kill();
  //   score += 10;
  //   scoreText.text = 'Score: ' + score;
  // }


  var cursors = game.input.keyboard.createCursorKeys();
  
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;
        player.scale.x = -Math.abs(player.scale.x);
        if (!player.body.touching.down){
          player.animations.play('jump');
        }else{
          player.animations.play('left');
        }
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;
        player.scale.x = Math.abs(player.scale.x);
        player.animations.play('right');
        if (!player.body.touching.down){
          player.animations.play('jump');
        }else{
          player.animations.play('right');
        }
    }
    else if (!player.body.touching.down){
      player.animations.play('jump');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -300;
    }

}