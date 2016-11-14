var filereader = require('./fileReaderExample2.js');

filereader.amFileReader("../resources/file1.txt",function(error, content){
  if(error){
    console.log('Error Message'+ error.message);
  }

  console.log("File Content: \n" + content );

})
