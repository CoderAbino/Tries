// set your lucky number
const draw = 9999; // only 0 to 9999

// main code starts from here
let n;
const history = []; // this will store the history

while (n != draw) {
  n = Math.floor(Math.random() * 10000); // generate random numbers from 0 to 9999
  history.push(n); // add into history
}

console.log(`${history}`);
console.log("-------------------------------------------------------");
console.log(`-> We got our ticket in ${history.length} times :)`);
