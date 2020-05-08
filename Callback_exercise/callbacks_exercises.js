// class Clock {
//     constructor () {
//         const date = new Date;
//         this.hours = date.getHours();
//         this.minutes = date.getMinutes();
//         this.seconds = date.getSeconds();
//         this.printTime();
//         // setInterval(() => {
//         //     this._tick();
//         // }, 1000);
//         // const that = this;
//         // setInterval(function() {
//         //     that._tick();
//         // },1000);
//     }
//     printTime () {
//         // HH:MM:SS
//         const time = `${this.hours}:${this.minutes}:${this.seconds}`;
//         console.log(time);
//         const ticking = this._tick.bind(this);
//         // debugger
//         setTimeout(ticking, 1000);
//         // setTimeout(this._tick.bind(this), 1000);
        
//     }
//     _tick () {
//         this.seconds++;
//         if (this.seconds > 59) {
//             this.seconds = 0;
//             this.minutes ++;
//         }
//         if (this.minutes > 59) {
//             this.minutes = 0;
//             this.hours ++;
//         }
//         if (this.hours > 23) {
//             this.hours = 0;
//         }
//         this.printTime();
//     }
// }

// const clock = new Clock();

const readline = require("readline");  
const userInteract = readline.createInterface({input: process.stdin, output: process.stdout});

// const addNumbers = function (sum, numsLeft, completionCallback) {
//     function fnAsync(callback){
//         // console.log(numsLeft); //prints numsLeft (already decremented, so 2 on first loop)
//         userInteract.question("Enter number:\n",function(inputNum) {
//             sum += parseInt(inputNum);
//             console.log(`current sum: ${sum}`);
//             callback();
//         });
//         // console.log(sum); //prints sum (not yet added to because we're still waiting for an answer, so 0 on first loop)
//     }

//     function loop() {
//         if (numsLeft === 0) {
//             completionCallback(sum);
//             userInteract.close();
//             return; 
//         }
//         numsLeft--;
//         fnAsync(loop);
//     }

//     loop();


//     // if (numsLeft > 0) {
//     //     userInteract.question("Enter number:\n",function(inputNum) {
//     //         sum += parseInt(inputNum);
//     //         console.log(sum);
//     //         // userInteract.close(); 
//     //         console.log(1);
//     //     });
//     // } else {
//     //     completionCallback(sum);
//     // }
//     // addNumbers(sum, numsLeft--, completionCallback);
// }

// console.log(addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`))); //prints undefined after first loop (while waiting for first response)
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));




 
const absurdBubbleSort = function (arr, sortCompletionCallback) {
    function askIfGreaterThan(el1, el2, callback) {
        userInteract.question(`Is ${el1} greater than ${el2}?\n`, function(input) {
            callback(input === "yes" ? true : false);
        });
    }
    // askIfGreaterThan(5,10,function (bool) { console.log(bool ? "yep" : "nope"); }); //tested askIfGreaterThan and it worked
    function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
        if (i < arr.length - 1) {
            askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
                if (isGreaterThan) {
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    madeAnySwaps = true;
                }
                // console.log(arr); 
                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            });
        }
        if (i === arr.length - 1) {
            outerBubbleSortLoop(madeAnySwaps);
            // dummy();
        }
    }
    function dummy () {
        console.log("in outer bubble sort");
    }

    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop); 
        } else {
            sortCompletionCallback(arr) 
        }
    }
    outerBubbleSortLoop(true);
    // innerBubbleSortLoop([4, 8, 2, 10, 9], 0, false, dummy);
}
absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    userInteract.close();
  });


// absurdBubbleSort(); //call with no arguements for test


