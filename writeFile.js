var fs = require('fs');
var content = "adding this content";
var filename = 'hello.js';

fs.writeFile(filename, content, function(err) {
  if(err){
    console.log(err.stack);
    return;
  }
  // console.log(filename);
});
