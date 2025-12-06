import fs from "fs";

let textByLine = fs.readFileSync("code.txt").toString().split("\n");
let zeroCounter = 0;

function twistDial(arrDialTwists) {
  let dialVal = 50; // dial starts at 50
  for (let i = 0; i < arrDialTwists.length; i++) {
    switch (`${arrDialTwists[i][0]}`) {
      case "R":
        dialVal = (dialVal + parseInt(arrDialTwists[i].split("R")[1])) % 100;
        console.log(
          `The dial is rotated R${
            arrDialTwists[i].split("R")[1]
          } to point at ${dialVal}`
        );
        break;
      case "L":
        dialVal = (dialVal - parseInt(arrDialTwists[i].split("L")[1])) % 100;
        console.log(
          `The dial is rotated L${
            arrDialTwists[i].split("L")[1]
          } to point at ${dialVal}`
        );
        break;
    }
    if (dialVal == 0) console.log("Another zero!: " + zeroCounter++);
  }
}
twistDial(textByLine);

console.log(`Number of zeros: ${zeroCounter}`);

// Dial goes from 0 ot 99
// The actual password is the number of times the dial is left pointing at 0 after any rotation in the sequence.

// Resources:
// Writing from console.log to file using fs: https://stackoverflow.com/questions/8393636/configure-node-js-to-log-to-a-file-instead-of-the-console

// Continue: https://adventofcode.com/2025/day/1#part2
