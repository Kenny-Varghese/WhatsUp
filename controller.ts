// let socket = io();
// let messageBtn = <HTMLElement> document.getElementById('sendMessageBtn');
// let messageInput = <HTMLInputElement> document.getElementById('message');
// let collection = <HTMLElement> document.getElementById('message-list');
// let id: String;
// let containerDiv = <HTMLElement> document.getElementById('container');

// interface Message {
//     id : String;
//     message : String;
// }

// class Chat{
//     currentID: String;
//     constructor() {
//         this.currentID = socket.id;
//     }
//     sendMessage(message: String) {
//         if(message) {
//             socket.emit('chat message', message);
//             this.createNewMessage({id, message});
//         }
//     }
//     createNewMessage(msg: Message) {
//         let div = document.createElement('div');
//         div.classList.add('card');
//         div.classList.add('hoverable');
//         let div2 = document.createElement('div');
//         div2.classList.add('card-content');
//         let spanTitle = document.createElement('span');
//         spanTitle.classList.add('card-title');
//         spanTitle.innerHTML = `${msg.id} - ${msg.message}`;
//         if (id && msg.id === id) {
//             div.classList.add('blue-grey');
//             div.classList.add('darken-1');
//             div2.classList.add('white-text');
//         }
//         div2.appendChild(spanTitle);
//         div.appendChild(div2);
//         collection.appendChild(div);
//     }
// }
// socket.on('connect', () => {
//     socket.on('username set', (myId: String) => {
//         id = myId;
//         containerDiv.style.visibility = 'visible';
//     });
//     let chat = new Chat();
//     // usernameBtn.onclick = () => {
//     //     let username = usernameInput.value;
//     //     if(username) {
//     //         socket.emit('set username', username);
//     //     }
//     // }
//     messageBtn.onclick = () => {
//         console.log("clicked");
//         if(id) {
//             let message = messageInput.value;
//             chat.sendMessage(message);
//         }
        
//     }
// })