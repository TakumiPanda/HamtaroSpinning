class GameEngine {
    constructor() {
        this.entities = [];
        this.ctx = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

    };

    init(ctx) { // called after page has loaded
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.timer = new Timer();
    };

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.save();
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }
    };

    update() {
        var entitiesCount = this.entities.length;

        // for (var i = 0; i < entitiesCount; i++) {
        //     var entity = this.entities[i];
        //
        //     if (!entity.removeFromWorld) {
        //         entity.update();
        //     }
        // }
        //
        // for (var i = this.entities.length - 1; i >= 0; --i) {
        //     if (this.entities[i].removeFromWorld) {
        //         this.entities.splice(i, 1);
        //     }
        // }
    };

    loop() {
        this.clockTick = this.timer.tick();
        // this.update();
        this.draw();
    };
};
