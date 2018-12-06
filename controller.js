// let socket = io();
// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

var messageBtn = document.getElementById('sendMessageBtn');
var messageInput = document.getElementById('message');
var collection = document.getElementById('message-list');
var containerDiv = document.getElementById('container');
var count = 0;

let myNodeList = document.getElementsByTagName("LI");
let note_count = 0;
let currentNote;
let Notes = [];

let li = document.createElement("li");
// interface Message{
//       String id;
//       String message;
// }

function clicked(){
      let msgButton = document.getElementById('sendMessageBtn');
      var temp = document.getElementById('messageInput').value;
      Notes.push(temp);
        count++;
    //   console.log(temp);
      if(temp.length == 0){
            return;
      }
      let div = document.createElement('div');
      div.classList.add('card');
      div.classList.add('hoverable');
      div.classList.add('button')
      

      let div2 = document.createElement('div');
      div2.classList.add('card-content');
      div2.classList.add('close');

      let spanTitle = document.createElement('span');
      spanTitle.classList.add('card-title');
        spanTitle.innerHTML = count + ":" + temp;
      
      document.getElementById('messageInput').value = '';
     
      div2.appendChild(spanTitle);
      div.appendChild(div2);
      collection.appendChild(div);
      

}

class NoteComponent {
    
    constructor(search){
    
        this.search = search;
    }   

    filterList(query){
        query = document.getElementById("searchBox").value;
        console.log(query);

        // let ul = document.getElementById("myUL");
        // let liSearch = ul.getElementsByTagName("li");
        for(let m = 0; m < 100; m++){

          if (Notes[m] != query) {
              alert("Search not found!");
              break;
            //   liSearch[m].style.display = "";
          } else {
            console.log("yes");
            collection.appendChild(query);
            query.style.display = "";
          }
          // liSearch[m].style.display = "";

      }

  return noteList;
  }
}

const nc = new NoteComponent();


var Chat = /** @class */ (function () {
    function Chat() {
        this.currentID = socket.id;
    }
    Chat.prototype.sendMessage = function (message) {
        if (message) {
            socket.emit('chat message', message);
            this.createNewMessage({ id: id, message: message });
        }
    };
    Chat.prototype.createNewMessage = function (msg) {
        var div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('hoverable');
        var div2 = document.createElement('div');
        div2.classList.add('card-content');
        var spanTitle = document.createElement('span');
        spanTitle.classList.add('card-title');
        spanTitle.innerHTML = msg.id + " - " + msg.message;
        if (id && msg.id === id) {
            div.classList.add('blue-grey');
            div.classList.add('darken-1');
            div2.classList.add('white-text');
        }
        div2.appendChild(spanTitle);
        div.appendChild(div2);
        collection.appendChild(div);
    };
    return Chat;
}());

// class Note{
//     constructor(name) {
//         this.name = name;
//     }
//     setDescription(desc) {
//         this.description = desc;
//     }
//     getDescription() {
//         return this.description;
//     }   
//     getName() {
//         return this.name;
//     }   
// }
// class NoteComponent{
//     constructor(search){
//         this.search = search;
//     }
//     filterList(noteList ,query){
//         query = document.getElementById("searchBox").value;
//         console.log(query);
//         let ul = document.getElementById("myUL");
//         let liSearch = ul.getElementsByTagName("li");

//         for(let m = 0; m < liSearch.length; m++){
//             if(Notes[m].getName.includes(query)){
//                 liSearch[m].style.display = "";
//             }
//             else{
//                 liSearch[m].style.display = "none"
//             }
//         }
//         return noteList;
//     }
// }
// const nc = new NoteComponent();
// for(i = 0; i < myNodeList.length; i++){
//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList.appendChild(span);
// }
// let close = document.getElementsByClassName("close");
// for (j = 0; i < close.length; j++) {
// close[j].onclick = function() {
//   let div = this.parentElement;
//   div.style.display = "none";
// }
// }
