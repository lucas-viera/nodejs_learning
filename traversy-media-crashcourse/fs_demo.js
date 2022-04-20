const fs = require('fs');
const path = require('path');

//Example of folder creation
// fs.mkdir(path.join(__dirname, '/test-from-fs'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created ok');
// });

//Example of file writing
// fs.writeFile(path.join(__dirname, '/test-from-fs', 'hello.txt'), 
//     'Content for file', 
//     err => {
//         if (err) throw err;
//         console.log('File written ok'); 

//         //Exmple of file appending
//         fs.appendFile(
//             path.join(__dirname, '/test-from-fs', 'hello.txt'),
//             'Node is awesome',
//             err => {
//                 if (err) throw err;
//                 console.log('File appended ok');
//             }
//         );
//     }
// );

// Example of file reading (comment previous code if folder and file are created)
fs.readFile(path.join(__dirname, '/test-from-fs', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Example of file renaming
fs.rename(
    path.join(__dirname, '/test-from-fs', 'hello.txt'),
    path.join(__dirname, 'test-from-fs', 'hello2222.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed ... ');
    } 
);