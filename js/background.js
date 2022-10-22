class Background {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.pos = { x: this.canvasSize.w, y: this.canvasSize.h }
        this.image = new Image()
        this.image.src = "img/background.png"
        this.posX = 0
        this.posY = 0
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.pos.x, this.pos.y)
        this.ctx.drawImage(this.image, this.posX + this.canvasSize.w, this.posY, this.canvasSize.w, this.canvasSize.h)
    }
}