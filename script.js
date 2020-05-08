const playBtn = document.getElementById("play-button")
const pauseBtn = document.getElementById("pause-button")
const stopBtn = document.getElementById("stop-button")
const txtIn = document.getElementById("text")
const spdIn = document.getElementById("speed")
let currentChar

playBtn.addEventListener('click', () => {
    playtext(txtIn.value)
})
pauseBtn.addEventListener("click", pauseText)
stopBtn.addEventListener("click", stopText)
spdIn.addEventListener("input", () => {
    stopText()
    playtext(utterance.text.substring(currentChar))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener('end', () => {
    txtIn.disabled = false
})
utterance.addEventListener("boundary", e => {
    currentChar = e.charIndex
})

function playtext(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utterance.text = text
    utterance.rate = spdIn.value || 1
    txtIn.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}