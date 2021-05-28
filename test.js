/*
// using readline
const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Who are you? ', name => {
    console.log(`Hey there ${name}`);
    readline.close();
});
*/
// Process event listeners
// event: beforeExit
// process.on('beforeExit', code => {
//     console.log('beforeExit event with code: ', code); 
// })
// event: exit
// process.on('exit', code => {
//     console.log('exit event with code: ', code);
// })
// console.log(hello)
// console.log('Hello! ');

// event: warnings
// const warn = process.on('warning', (warning)=> {
//     // console.warn('More events than allowed!')
//     console.warn('name: ', warning.name);
//     console.warn('message: ', warning.message);
//     console.warn('stack: ', warning.stack)
// });
//event: emitWarning
// process.emitWarning('custom Warning triggered!', {
//     type: 'testing', // type <string> // change the text of warning. default is 'Warning' // print out in testing:
//     code: '300', // code <string>  // print out in [300]
//     detail: 'This is from emitWarning!', // detail <string> // print out in : 'This is from emitWarning'
//     ctor: 'for stack trace' // ctor <Function>
// });
