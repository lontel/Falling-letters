const Game = {
    title: 'Falling letters',
    author: 'Leon Lonte',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    background: undefined,
    FPS: 60,
    framesIndex: 0,
    letterArr: [],

    keys: {
        moveLeft: 'ArrowLeft',
        moveRight: 'ArrowRight'
    },

    canvasSize: {
        w: undefined,
        h: undefined
    },

    init() {
        this.canvasDom = document.querySelector("#myCanvas")
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.createAll()
        this.start()
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createAll() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(
            this.ctx,
            this.canvasSize,
            this.canvasSize.w / 2 - this.canvasSize.w * 0.15 / 2,
            this.canvasSize.h * .8,
            this.canvasSize.w * 0.15,
            this.canvasSize.h * 0.2
        )
        this.enemy = new Enemy(
            this.ctx,
            this.canvasSize,
            this.canvasSize.w * .15,
            this.canvasSize.h * 0.1,
            this.canvasSize.h * .01,
            10
        )

    },

    createLetters() {
        this.letter = new Letter(
            this.ctx,
            this.canvasSize,
            this.enemy.pos.x,
            this.enemy.pos.y + this.enemy.size.h,
            this.canvasSize.h * .1,
            this.canvasSize.w * .1
        )
        this.letterArr.push(this.letter)

    },

    drawLetters() {
        this.letterArr.forEach(letter => {
            letter.draw()
            letter.move()
        })
    },

    drawAll() {
        this.background.draw()
        this.player.draw()
        this.enemy.draw()
        this.drawLetters()
    },

    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.moveLeft: this.player.moveLeft()
                    break;
                case this.keys.moveRight: this.player.moveRight()
                    break;
            }
        }
    },

    start() {
        this.intervalId = setInterval(() => {
            this.framesIndex++
            this.clearAll()
            this.drawAll()
            this.checkCollision()
            if (this.framesIndex % 100 === 0) {
                this.createLetters()
            }
        }, 1000 / this.FPS)
        setTimeout(() => {
            clearInterval(this.intervalId)
            this.drawScore()
        }, 20000)
    },

    drawScore() {
        this.ctx.fillStyle = "#000000";
        this.num = this.player.score
        this.ctx.fillText('GAME OVER', this.canvasSize.w / 2 - 130, this.canvasSize.h / 2)
        this.ctx.fillText(`Score: ${this.num}`, this.canvasSize.w * .5 - 65, this.canvasSize.h * .6)
    },

    checkCollision() {
        this.letterArr.forEach((char, index, arrChar) => {
            if (this.isBetweenXAxes(char) && this.isBetweenYAxes(char)) {
                arrChar.splice(index, 1)
                char.isGoldenChar ? this.player.score += 2 : this.player.score++
            }
        })
    },

    isBetweenXAxes(char) {
        return this.player.pos.x < char.pos.x &&
            char.pos.x < this.player.pos.x + this.player.size.w
    },

    isBetweenYAxes(char) {
        return this.player.pos.y < char.pos.y &&
            char.pos.y < this.player.pos.y + this.player.size.h
    }
}
