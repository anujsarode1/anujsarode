function group(x, y, action) {
    if (action == "add") {
        return x + y;
    } else if (action == "sub") {
        return x - y;
    } else if (action == "mul") {
        return x * y;
    } else if (action == "div") {
        return x / y;
    }
}
let a =
    group(64877, 85858755875, "mul");

console.log("THE REUSLT IS = " + a);

// function callbackfunction(x){

// }

