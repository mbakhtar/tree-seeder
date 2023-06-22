input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.servo1.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.servo1.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
0
)
fwdMotors.servo1.fwdSetAngle(0)
