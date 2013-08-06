// References:  

// https://npmjs.org/package/serialport
// http://techvalleyprojects.blogspot.ca/2012/04/powerswitch-tail-ii-and-arduino.html
// https://github.com/voodootikigod/node-serialport

var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty-usbserial1", {
	baudrate: 9600
});

serialPort.on("open", function () {
	console.log("open");
	serialPort.on("data", function (data) {
		console.log("data received: " + data);
	});	
	serialPort.write("ls\n", function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
	});
});


//use this to find out which serial ports the device is connected to

serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});

//on shimmer "shake"
serialPort.write("1");  //light comes on

setTimeout(function(){serialPort.write("1")},5000);

// we engage the device with an "on" -->  "serialPort.write("1") command
// we then disengage the device with a timeout 





// PUT THIS CODE ON THE ARDUINO

// char incoming_char=0;

// void setup() {               
//   // initialize the digital pin as an output.
//   // Pin 13 has an LED connected on most Arduino boards:
//   //pinMode(7, OUTPUT);
//   Serial.begin(9600);
//   pinMode(13, OUTPUT);   
//   Serial.println("Setup has ended, entering loop()");
// }

// void loop() {
//   if (Serial.available())
//   {
  
  
//     incoming_char=Serial.read(); // Get the incoming char
//     if(incoming_char == '1')
//     {
//       digitalWrite(13, HIGH); // Turn the Powertail on
//       Serial.println("Switch ON");
//     }

//     if(incoming_char == '0')
//     {
//       digitalWrite(13, LOW);    // turn the Powertail off
//       Serial.println("Switch OFF");
//     }
//   }
// }










// Out of the box, node-serialport provides two parsers one that simply emits the raw buffer as a data event and the other which provides familiar "readline" style parsing. To use the readline parser, you must provide a delimiter as such:

// var serialport = require("serialport");
// var SerialPort = serialport.SerialPort; // localize object constructor

// var sp = new SerialPort("/dev/tty-usbserial1", { 
//   parser: serialport.parsers.readline("\n") 
// });
// To use the raw parser, you just provide the function definition (or leave undefined):

// var serialport = require("serialport");
// var SerialPort = serialport.SerialPort; // localize object constructor

// var sp = new SerialPort("/dev/tty-usbserial1", { 
//   parser: serialport.parsers.raw
// });
// You can get updates of new data from the Serial Port as follows:

// serialPort.on("data", function (data) {
//   sys.puts("here: "+data);
// });
// You can write to the serial port by sending a string or buffer to the write method as follows:

// serialPort.write("OMG IT WORKS\r");
// Enjoy and do cool things with this code.