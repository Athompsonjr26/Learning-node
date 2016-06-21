var fs = require('fs');
// var contents = "Yoooooo";
var filename = "hello.txt";

fs.readFile(filename, function(err, buffer) {
  if(err) {
    console.error(err.stack);
    return;
  }
  console.log(buffer.toString().toUpperCase());
});

   console.log(filename);
