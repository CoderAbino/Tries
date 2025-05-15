//----------------------------------------------------------------
// luckCalculator() enter your lucky number inside the function
// dice()
//----------------------------------------------------------------
function luckCalculator(draw) {
  // main code starts from here
  let n;
  const history = []; // this will store the history
  while (n != draw) {
    n = Math.floor(Math.random() * 10000 + 1); // generate random numbers from 1 to 10000
    history.push(n); // add into history
  }
  console.log(`${history}`);
  console.log("-------------------------------------------------------");
  console.log(`-> We got our ticket in ${history.length} times :)`);
}

function dice() {
  let n = Math.floor(Math.random() * 6 + 1);
  console.log(`Its ${n}`);
}
