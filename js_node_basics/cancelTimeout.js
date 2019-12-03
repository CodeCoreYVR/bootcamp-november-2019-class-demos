// 'setInterval' is like 'setTimeout' except
// that it will call the callback every interval
// in milliseconds.

let count = 5;

const intervalId = setInterval(() => {
    if (count <= 0) {
        console.log("Go!");
        clearInterval(intervalId);

    } else {
        console.log(count + "..."); // 1 ...
        count -= 1;
    }
}, 1000);

// console.log("intervalId: ", intervalId);

setInterval()