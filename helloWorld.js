const http = require('http');

function hello(request, response) {
    console.log(request.url);
    response.write("Hello, World! Author: Denis Sychev");
    response.end();
}

http.createServer(hello).listen(1234, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is in progress');
    }
});

