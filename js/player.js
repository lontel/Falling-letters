class Player {

    constructor(ctx, canvasSize, posX, posY, sizeX, sizeY) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.pos = {
            x: posX,
            y: posY
        }
        this.size = {
            w: sizeX,
            h: sizeY
        }
        this.score = 0
        this.image = new Image();
        this.image.src = 'img/pickup.png'

    }

    draw() {
        this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
    }

    moveLeft() {
        if (this.pos.x > this.canvasSize.w - this.canvasSize.w * .99)
            this.pos.x -= this.canvasSize.w * .07
    }

    moveRight() {
        if (this.pos.x + 10 < this.canvasSize.w - this.size.w)
            this.pos.x += this.canvasSize.w * .07
    }

}