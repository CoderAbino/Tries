//--- set your lucky draw -------
let draw = 9999;
//-------------------------------

//--- don't touch ---------------
// this is the draw
let n;

// this store count of draw
let i = 0;

// this will store the history
const history = [];

while (true) {
  n = Math.random(); // generate token between 0 - 1
  n *= 10000; // convert that token into thound digit number
  n = Math.floor(n); // remove the decimals
  i++; // count generate times
  history.push(n); // add into history

  // when to stop
  if (n == draw) {
    console.log(`Start -> ${history} end`);
    console.log("--------------------------------------------");
    console.log(`|- Above this line is the history of draw -|`);
    console.log("--------------------------------------------");
    console.log(`|-   We got out ticket in ${i} times :)   -|`);
    console.log("--------------------------------------------");
    break;
  }
}
