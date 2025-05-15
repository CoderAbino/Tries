// set your lucky number
let draw = 9999; // only 0 to 9999

// main code starts from here
let n;
const history = []; // this will store the history

while (true) {
  n = Math.floor(Math.random() * 10000); // generate random numbers from 0 to 9999
  history.push(n); // add into history
  if (n == draw) {
    console.log(`Start -> ${history} <- end`);
    console.log("-------------------------------------------------------");
    console.log(`-> History is above this line`);
    console.log(`-> We got our ticket in ${history.length} times :)`);

    break;
  }
}
