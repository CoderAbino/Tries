//--- set your lucky draw ---------
let draw = 9999; // only 0 to 9999
//---------------------------------

//--- don't touch -----------------
// this is the draw
let n;

// this store count of draw
let i = 0;

// this will store the history
const history = [];

while (true) {
  n = Math.random() * 10000; // generate token between 0 - 9999
  n = Math.floor(n); // remove the decimals
  i++; // count generate times
  history.push(n); // add into history

  // when to stop
  if (n == draw) {
    console.log(`Start -> ${history} <- end`);
    console.log("--------------------------------------------");
    console.log(`|- Above this line is the history of draw -|`);
    console.log("--------------------------------------------");
    console.log(`|-   We got out ticket in ${i} times :)   -|`);
    console.log("--------------------------------------------");
    break;
  }
}
