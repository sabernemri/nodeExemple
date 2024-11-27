console.log("starting app.js")



// fs.appendFileSync("greet.txt","hello word");
// const note=require('./note.js');

// console.log(note.add(2,5));
// console.log(note.sub(2,5));
// console.log("process",process.argv);
// console.log("yargs",yargs.argv);
// var title =yargs.argv.title;
// console.log(title);
const fs=require('fs');

const yargs = require('yargs');
const notes= require('./notes.js');
const argv=yargs.argv; 

var title =yargs.argv.title;
var body=yargs.argv.body;
var command=yargs.argv._[0];


if (command==="add") {
    console.log("adding note");
    notes.addNote(title,body)
}else if (command==="read") {
    console.log("read note")
    notes.readNote(title);
}else if (command==="list") {
    console.log("listing all notes")
    notes.getAll();
}else if (command==="remove") {
    console.log("removing")
    notes.removeNote(title);
}else

{
    console.log("unknow command was used!!")
}