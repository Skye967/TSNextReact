

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"
}

// function fiveHeadsSync() {
//   let headsCount = 0;
//   let attempts = 0;
//   while (headsCount < 5) {
//     attempts++;
//     let result = tossCoin();
//     console.log(`${result} was flipped`);
//     if (result === "heads") {
//       headsCount++;
//     } else {
//       headsCount = 0;
//     }
//   }
//   return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
  const flipPromise = new Promise<string>((resolve, reject) => {
      // your code here!
        while (headsCount < 5) {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if (result === "heads") {
            headsCount++;
          } else {
            headsCount = 0;
          }
        }
    if (headsCount >= 5) {
      return resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      return reject('Something messed up our coin flipping fun!')
    }
      
  });
  return flipPromise
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");