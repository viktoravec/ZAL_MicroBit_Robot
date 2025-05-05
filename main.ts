let maxFrequency: number = 83
let minFrequency: number = 1
let frequency = minFrequency
let ready: boolean = false
radio.on()
radio.setGroup(frequency)

input.onButtonPressed(Button.AB, function () {
    music.playTone(300, 500)
    basic.showNumber(3)
    basic.pause(50);
    music.playTone(300, 500)
    basic.showNumber(2)
    basic.pause(50);
    music.playTone(300, 500)
    basic.showNumber(1)
    basic.pause(50);
    basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
    music.playTone(600, 700)
    basic.clearScreen()
radio.sendString("start")
console.log("started")
ready = true
})

radio.onReceivedString(function (recievedString) {
    if (recievedString = "start") {  
 
basic.forever(function(){
    if(ready = true){
    for (let i = minFrequency; i <= maxFrequency; i++) {
        frequency++;
        radio.setGroup(frequency);
        basic.pause(25);
        console.log(frequency)
    }

    for (let i = maxFrequency; i >= minFrequency; i--) {
        frequency--;
        radio.setGroup(frequency);
        basic.pause(25);
        console.log(frequency)
    }
}
})

}
})
   
   
let x: number = input.acceleration(Dimension.X)
let y: number = input.acceleration(Dimension.Y)
let z: number = input.acceleration(Dimension.Z)
