class Hamtaro {
  constructor(game, x, y, spritesheet){
    Object.assign(this, {game, x, y, spritesheet});

    this.spritesheet = ASSET_MANAGER.getAsset("./Hamtaro.png");

    this.animation = new Animator(this.spritesheet, 8, 9, 32, 33, 8, 0.5, 6.5, false, true);

    this.loadAnimations(spritesheet);
  };

  loadAnimations(spritesheet)
  {
    // this.idleAnim = [];
    //
    // this.idleAnim = [0];
    // this.idleAnim = [0] = new Animator(spritesheet, 8, 9, 32, 33, 1, 0.5, 7, false, true);
  };

  update()
  {

  };

  draw(ctx)
  {

  // ctx.drawImage(this.spritesheet, 8, 9, 32, 33, 0, 0, 96, 99);
  this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 3);

  };
};
