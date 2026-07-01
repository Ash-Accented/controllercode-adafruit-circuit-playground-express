input.setAccelerometerRange(AcceleratorRange.TwoG); //Set the bound on acceleration to be 2G on startup

forever (function(){ //Loop this code for as long as the controller is not reset
    input.buttonA.onEvent(ButtonEvent.Click, function () {
        keyboard.type("A")
    })
    input.buttonB.onEvent(ButtonEvent.Click, function () {
        keyboard.type("B")
    })
    let x = input.acceleration(Dimension.X);
    let y = input.acceleration(Dimension.Y);
    let z = input.acceleration(Dimension.Z);
    let xLight = light.range(0, 2)
    let yLight = light.range(3, 2)
    let zLight = light.range(6, 2);
    //setTimeout(function () { console.log(("X VAL: ", x)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    //setTimeout(function () { console.log(("Y VAL: ", y)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    //setTimeout(function () { console.log(("Z VAL: ", z)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    if (x >= 500 && x > y && x > z) {
        xLight.setAll(0xffffff) 
        yLight.clear()
        zLight.clear()
    }
    else {
        xLight.clear()
    }
    if (y >= 500 && y > x && y > z) {
        yLight.setAll(0x800080)
        xLight.clear()
        zLight.clear()
    }
    else {
        yLight.clear()
    }
    if (z >= 2000 && z > x && z > y) {
        zLight.setAll(0x0000ff)
        xLight.clear()
        yLight.clear()
    }
    else {
        zLight.clear()
    }
})



