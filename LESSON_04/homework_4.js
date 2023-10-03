const fs = require('fs-extra');

fs.mkdirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest');
fs.ensureDirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest');

let file = 'C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest\Test_1.txt';
const fileContent = 'Текст файла';
fs.createFileSync (file);

fs.ensureFileSync(file);
fs.outputFileSync(file, fileContent);
const data = fs.readFileSync(file, 'utf8')
console.log(data) 


fs.mkdirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_2');
fs.ensureDirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_2');

fs.moveSync ('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest\Test_1.txt ', '.C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_2');

fs.mkdirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_3');
fs.ensureDirSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_3');

fs.copyFileSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_2\Test_1.txt','.C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_3\Test_1.txt')
    
fs.removeSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_3\Test_1.txt');
fs.removeSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest');
fs.removeSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_2');
fs.removeSync('C:\Users\USER_2021\it-academy\homework_IT-academy\LESSON_04\newTest_3');

