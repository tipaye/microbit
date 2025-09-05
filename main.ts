input.onSound(DetectedSound.Loud, function () {
    clapped = !(clapped)
    if (clapped) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
let clapped = false
basic.clearScreen()
input.setSoundThreshold(SoundThreshold.Loud, 220)
