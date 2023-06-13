const fs = require('fs-extra');

fs.ensureDirSync('folder_1');
fs.ensureFileSync('folder_1/file_1.txt');

fs.ensureDirSync('folder_2');
fs.moveSync('folder_1/file_1.txt', 'folder_2/file_1.txt');

fs.ensureDirSync('folder_3');
fs.copySync('folder_2/file_1.txt', 'folder_3/copyoffile_1.txt');

fs.emptyDirSync('folder_2');
fs.emptyDirSync('folder_3');
fs.removeSync('folder_1');
fs.removeSync('folder_2');
fs.removeSync('folder_3');