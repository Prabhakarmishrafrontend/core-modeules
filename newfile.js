const fs = require("fs");

//creating a new file.
//fs.writeFileSync("read.txt", "Welcome to my channel");

//if it is present data overwrite.
//fs.writeFileSync("read.txt", "Prabhakar Mishra");

//append function apply here
//fs.appendFileSync("read.txt", "how are you I am fine. Thank you");


/*Node.js includes an additional data type called buffer
(not available in browser's javascript).
Buffer is mainly used to store binary data.
while reading from a file or receiving packets over the networks. */
//const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

//<Buffer 50 72 61 62 68 61 6b 61 72 20 4d 69 73 68 72 61 0d 0a 0d 0a 68 6f 77 20 61 72 65 20 79 6f 75 20 49 20 61 6d 20 66 69 6e 65 2e 20 54 68 61 6e 6b 20 79 ... 2 more bytes>

/*org_data = buf_data.toString();
console.log(org_data);*/

//to rename the file (commands)
fs.renameSync("read.txt", "readwrite.txt");