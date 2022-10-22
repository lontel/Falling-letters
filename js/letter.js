class Letter {
    constructor(ctx, canvasSize, posX, posY, width) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.size = {
            w: width,
            h: width
        }
        this.pos = {
            x: posX,
            y: posY
        }
        this.speedY = .7
        this.isGoldenChar = this.setGoldenChar()
        this.randomChar = this.getRandomChar()
        if (this.isGoldenChar) {
            this.randomChar = this.randomChar.toUpperCase()
            this.speedY = 1.5
        }
    }

    getRandomChar() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    setGoldenChar() {
        const probability = Math.random() * (100 - 1) + 1
        return probability < 40 ? true : false
    }

    draw() {
        this.ctx.font = '48px serif'
        this.ctx.fillText(this.randomChar, this.pos.x, this.pos.y)
        this.ctx.fillStyle = '#804be2'
        this.move()
    }

    move() {
        this.pos.y += this.speedY
    }
}

