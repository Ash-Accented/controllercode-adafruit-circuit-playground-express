input.setAccelerometerRange(AcceleratorRange.TwoG); //Set the bound on acceleration to be 2G on startup
const miliG_X_Pos = 800 //Acceleration of x movement (in miligravities) minimum for detection as input, in the positive direction
const miliG_X_Neg = -1*(miliG_X_Pos); //Acceleration of x movement (in miligravities) minimum for detection as input, in the negative direction
const miliG_Y_Pos = 800
const miliG_Y_Neg = -1*(miliG_Y_Pos);
const miliG_Z_Pos = 1800 

const xLight = light.range(0, 2); 
const yLight = light.range(3, 2);
const zLight = light.range(6, 2);


function clearLights(stripLightA: light.NeoPixelStrip, stripLightB: light.NeoPixelStrip) {
    stripLightA.clear();
    stripLightB.clear();
}

function checkAcceleration(x: number, y: number, z: number) {
    if (x >= miliG_X_Pos && x > y && x > z) {
        xLight.setAll(0xffffff); //White
        clearLights(yLight, zLight);
        keyboard.type("Left! ");
        
    }
    else if (x <= miliG_X_Neg && x < y && x < z) {
        xLight.setAll(0x66ff66); //Green
        clearLights(yLight, zLight);
        keyboard.type("Right! ");
    }
    else {
        xLight.clear()
    }

    if (y >= miliG_Y_Pos && y > x && y > z) {
        yLight.setAll(0x9966ff); //Electric Purple
        clearLights(xLight, zLight);
        keyboard.type("Backward! ");
    }
    else if (y <= miliG_Y_Neg && y < x && y < z) {
        yLight.setAll(0x99ccff); //Light Blue
        clearLights(xLight, zLight);
        keyboard.type("Forward! ")
    }
    else {
        yLight.clear();
    }

    if (z >= miliG_Z_Pos && z > x && z > y) {
        zLight.setAll(0x0000ff); //Blue
        clearLights(xLight, yLight);
        keyboard.type("Shield! ")
    }
    else {
        zLight.clear();
    }
}

forever (function(){ //Loop this code for as long as the controller is not reset
    input.buttonA.onEvent(ButtonEvent.Click, function () {
        keyboard.type("A");
    })
    input.buttonB.onEvent(ButtonEvent.Click, function () {
        keyboard.type("B");
    })
    let x = input.acceleration(Dimension.X);
    let y = input.acceleration(Dimension.Y);
    let z = input.acceleration(Dimension.Z);
    

    //setTimeout(function () { console.log(("X VAL: ", x)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    //setTimeout(function () { console.log(("Y VAL: ", y)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    //setTimeout(function () { console.log(("Z VAL: ", z)) }, 500); //Sets timeout to be 500 ms and prints the current acceleration values to the terminal
    checkAcceleration(x, y, z);
})





