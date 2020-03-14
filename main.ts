input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(500)
        }
    }
    music.playTone(932, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.playTone(131, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 62; index++) {
        led.plot(Math.randomRange(0, 4), Math.randomRange(0, 4))
        basic.pause(100)
    }
    music.playTone(587, music.beat(BeatFraction.Whole))
})
basic.showString("Fylde pladen ud?")
basic.forever(function () {
	
})
