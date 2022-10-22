class Enemy {

    constructor(ctx, canvasSize, width, posX, posY, speed) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.size = {
            w: width,
            h: width * .8
        }
        this.pos = {
            x: posX,
            y: posY
        }
        this.speed = speed
        this.image = new Image();
        this.image.src = 'img/ufo.png'
    }

    draw() {
        this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
        this.move()
    }

    move() {
        if (this.pos.x >= this.canvasSize.w - this.size.w || this.pos.x < 0) {
            this.turnAround()
        }
        this.pos.x += this.speed
    }

    turnAround() {
        this.speed *= -1
    }
}





