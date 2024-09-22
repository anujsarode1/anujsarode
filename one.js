const stand = require('http');
let standout = stand.createServer((request, response) => {
    response.write("https://anujsarode1.github.io/anujsarode/bikaner.html");
    response.end();
});


const address = "127.0.0.1";
const port = 4000;
standout.listen(port, address, () => {
    console.log("server is running at http://" + address + ":" + port);
});