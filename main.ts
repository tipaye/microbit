input.onButtonPressed(Button.A, function () {
    if (num >= 9) {
        num = 0
    } else {
        num += 1
    }
    basic.showNumber(num)
})
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
let num = 0
basic.clearScreen()
input.setSoundThreshold(SoundThreshold.Loud, 220)
num = 0
