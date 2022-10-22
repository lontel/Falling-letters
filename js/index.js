window.onload = () => {

    const startBtn = document.getElementById('startBtn')
    startBtn.onclick = () => {
        Game.init()
        document.querySelector('#start').classList.toggle("hide")
        document.querySelector('#myCanvas').classList.toggle("hide")
    }
}
