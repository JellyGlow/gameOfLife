//------------------VERY BASIC LOCAL SERVER
// const http = require('http');

// const server = http.createServer(function(request, response) {
//   // magic happens here!
// });

//the code below (essentially a local server) needs npm (node) in the project folder to run. Once it's there you can do: node myServer8080.js and when you open it on the address where it's listening, here outputted at http://localhost:PORT

//what I'm trying to figure out here is how to show my .html page (appropriately linked with all its style and script sheets) into my local server at port 8080

const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("404 error");
  }
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
  //here we are using a TEMPLATE LITTERAL
  //which is simply this
  //(accent grave) http://somethinginteresting:${}/path(accent grave)
  //these are used for string concatenations
});

//NOTE: CONST & LET instead of VAR
//
//use const by default.
//use let if you have to rebind a variable.
//use var to signal untouched legacy code. ie: avoid using var and use let instead, going forward.

//--------NOTE: FAT ARROW FUNCTIONS-------
//they are one-line mini functions
//it eliminates the need to use:

//-curly brakets (when only a single expression)
//-function
//-return

//ex:
//in ES5
// const thisOne = function (x, y) {
//   return x * y;
// };

//in ES6
// const thisOne = (x, y) => x*y ;

//PS => what are Promises?