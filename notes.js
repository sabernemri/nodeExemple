// console.log("starting note.js");

// var add=(x,y)=>{
//     return x+y;
//  }
//  var sub=(x,y)=>{
//     return x-y;
//  }
// module.exports={
//     add,
//     sub}
const { log } = require('console');
const fs=require('fs');

var  fetchNotes = ()=>{  
    try {
        return (JSON.parse(fs.readFileSync('notes.txt')));
   
    } catch (error) {
        return [];
    }}

    var  addNote = (title,body) =>{
        var notes=fetchNotes();

     var note ={
         title,
         body
    };
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
}

var removeNote = (title)=>{
    var notes=fetchNotes();
  var filtreNotes =  notes.filter(note =>  note.title!==title );
 
    fs.writeFileSync("notes.txt", JSON.stringify(filtreNotes));

    
}
var readNote = (title)=>{
    var notes=fetchNotes();
    var filtreNotes =  notes.filter(note =>  note.title===title );
 console.log(filtreNotes)

}
var getAll =()=>{
    var notes=fetchNotes();

    console.log(notes)

}
var logNote=(nots )=>{
    console.log("*************")
    console.log("no title")

}
module.exports={
    addNote,
    removeNote,
    readNote,
    logNote,
    getAll
    }; 
