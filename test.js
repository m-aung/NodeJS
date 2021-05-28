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
// Error Object
// const errorObj = new Error('Some Error Object!');
// errorObj.name = 'ERROR';
// errorObj.code = '4291'; // 
// process.emitWarning(errorObj);

// emit only warning once
// const emitMyWarning = () => {
//     if(!this.warned){
//         this.warned = true;
//         // process.emitWarning object order --> type<string> --> code<string> --> ctor<Function> --> detail<string>
//         process.emitWarning('Only warn once!','myWarning', '2920', );
//     }
// }
// //first time
// emitMyWarning(); // emit
// // second time
// emitMyWarning();

//event: maxListeners
// process.setMaxListeners(1);
// process.on('foo', ()=>{});
// process.on('foo', ()=>{});

// process.stdin.resume();
// const handle = (events) => {
//     console.log(`${events}`)
// }
// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);

// process.env
// can delete or assign environment but everything saved in env is set to string

// process.execPath

// process.exit([code])
// instead of using process.exit() use process.exitCode to wait for the WORKER process to end

// process.hrtime ...to be continued

//kill node process
// process.kill(process.pid,signal_name) // process.on(signal_name, ()=>{})

// memoryUsage
// console.log(process.memoryUsage())
/*
example output:
{
    rss: 18530304, // rss <integer> --> Resident Set Size: total space occupied by main memory (C++ & JS:objecs and code)
    heapTotal: 4014080, //heapTotal <integer> --> V8 memory usage
    heapUsed: 2240344, // heapUsed <integer>
    external: 767191, // external <integer> --> memory used by C++ objects bound to JS manage by V8
    arrayBuffers: 9382 // arrayBuffers <integer> --> memory for all ArrayBuffer and SharedArrayBuffers
}
*/
// can call each individual entities of memoryUsage objects
