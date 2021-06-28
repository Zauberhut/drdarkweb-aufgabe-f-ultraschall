let Distanz = 0
basic.forever(function () {
    Distanz = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (Distanz < 10) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (Distanz < 20) {
        basic.showIcon(IconNames.Asleep)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
