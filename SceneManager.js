class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.loadLevelOne();
    };

    clearEntities() {
        this.game.entities = [];
    };

    loadLevelOne() {
        this.x = 0;

        this.Hamtaro = new Hamtaro(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
        this.game.addEntity(this.Hamtaro);

    };

    update() {

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.Hamtaro.x - midpoint) this.x = this.Hamtaro.x - midpoint;

    };

    draw(ctx) {

    };
};
