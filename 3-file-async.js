var fs = require('fs');
var contents = "Yoooooo";
var filename = "hello.txt";

fs.writeFile(filename, contents, function(err, buffer) {
  if(err) {
    console.error(err.stack);
    return;
  }
});

   console.log(filename);
