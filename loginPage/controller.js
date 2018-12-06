// let socket = io();
var messageBtn = document.getElementById('sendMessageBtn');
var messageInput = document.getElementById('message');
var collection = document.getElementById('message-list');
var containerDiv = document.getElementById('container');

// interface Message{
//       String id;
//       String message;
// }

function clicked(){
      let msgButton = document.getElementById('sendMessageBtn');
      var temp = document.getElementById('messageInput').value;

      console.log("ur mom sucks");
      console.log(temp);
      if(temp.length == 0){
            return;
      }
      let div = document.createElement('div');
      div.classList.add('card');
      div.classList.add('hoverable');
      let div2 = document.createElement('div');
      div2.classList.add('card-content');
      let spanTitle = document.createElement('span');
      spanTitle.classList.add('card-title');
      spanTitle.innerHTML = temp;
      document.getElementById('messageInput').value = '';
      // spanTitle.innerHTML = `${msg.id} - ${msg.message}`;
      // if (id && msg.id === id) {
      //       div.classList.add('blue-grey');
      //       div.classList.add('darken-1');
      //       div2.classList.add('white-text');
      // }
      div2.appendChild(spanTitle);
      div.appendChild(div2);
      collection.appendChild(div);
      // socket.on('chat message' (msg:Message) => {
      //       this.newMessage(msg);
      // });
}

// function newMessage(msg: Message){
//       let div = document.createElement('div');
//       div.classList.add('card');
//       div.classList.add('hoverable');
//       let div2 = document.createElement('div');
//       div2.classList.add('card-content');
//       let spanTitle = document.createElement('span');
//       spanTitle.classList.add('card-title');
//       spanTitle.innerHTML = `${msg.id} - ${msg.message}`;
//       if (id && msg.id === id) {
//             div.classList.add('blue-grey');
//             div.classList.add('darken-1');
//             div2.classList.add('white-text');
//       }
//       div2.appendChild(spanTitle);
//       div.appendChild(div2);
//       collection.appendChild(div);
// }





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
// socket.on('connect', function () {
//     socket.on('username set', function (myId) {
//         id = myId;
//         containerDiv.style.visibility = 'visible';
//     });
//     var chat = new Chat();
//     // usernameBtn.onclick = () => {
//     //     let username = usernameInput.value;
//     //     if(username) {
//     //         socket.emit('set username', username);
//     //     }
//     // }
//     messageBtn.onclick = function () {
//         console.log("clicked");
//         if (id) {
//             var message = messageInput.value;
//             chat.sendMessage(message);
//         }
//     };
// });
