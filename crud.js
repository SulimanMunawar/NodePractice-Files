const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'other-files');
const fileName = `${dirPath}/apple.txt`;

// create file 
fs.writeFileSync(fileName, 'simple text inside this file');

// read file --- utf8 is used to read the file content inside any file
fs.readFile(fileName, 'utf8', (err, content) => {
    console.log(content);
})

// update any file 
fs.appendFile(fileName, ' this text will be added to existing file', (err) => {
    if (!err) {
        console.log('Content of File Updated Successfully');
    }
})

// rename any file

fs.rename(fileName, `${dirPath}/newfile.txt`, (err) => {
    if (!err) {
        console.log('File Name Updated Successfuly');
    }
})

// delete any file 
fs.unlinkSync(`${dirPath}/newfile.txt`);