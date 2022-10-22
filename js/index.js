window.onload = () => {

    const startBtn = document.getElementById('start-btn')
    startBtn.onclick = () => {
        Game.init()
        document.querySelector('.start').classList.toggle("hide")
        document.querySelector('#myCanvas').classList.toggle("hide")
    }
}
