// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics
let myhttp = require('http');

// use dot notation in javascript to access an object and its methods (commands) and properties
// createServer() takes some arguments to make it provide a useful http server
// 1: function (block of code) that will be run whenever the server receives an http request

let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let subdir;
    let myoutput;
    subdir = myrequest.url;
    switch(subdir) 
      {
        case '/excel':
          myoutput = "You are in the EXCEL subdirectory";
          break;
        case '/olli':
          myoutput = "You are in the OLLI subdirectory";
          break;
        case '/intersession':
          myoutput = "You are in the OLLI subdirectory";
          break;
        case '/certificates':
          myoutput = "You are in the OLLI subdirectory";
          break;
        default:
          myoutput = "You are in the main directory";
          break;
      }
    /* if ( myrequest.url === "/hey" ) {
      mytext = "Well hello there folks...";
    } else {
      mytext = "I don't know you!";
    } */
    
    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );
    myresponse.end(myoutput);
  }
);

// ask http to start listening on a tcp port for incoming http requests

// listen() takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0)
myserver.listen(80, "0.0.0.0");
console.log("server has started");
