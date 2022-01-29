input.onSound(DetectedSound.Loud, function () {
    Rover.MotorRunDual(245, 255)
    basic.pause(5500)
    Rover.MotorStopAll(MotorActions.Stop)
})
