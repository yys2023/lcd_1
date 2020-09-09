let distance = 0
I2C_LCD1602.LcdInit(32)
basic.pause(1000)
I2C_LCD1602.ShowString("distance:", 0, 0)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    I2C_LCD1602.ShowString("" + distance + "     ", 9, 0)
    if (distance <= 10 && distance >= 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(1000)
})
