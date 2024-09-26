// function callbackFunction(){
//     x(200);
// }
// let x =
// callbackFunction((y) => {
//     console.log(y);
// });
  



function callbackFunction(callback) {
    callback(200);
}

const x = (y) => {
    console.log(y);
};

// Call the function with the callback
callbackFunction(x);
