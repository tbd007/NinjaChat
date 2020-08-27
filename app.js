// dom query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim(); //message is id of form input
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log('error'))
});

// update user
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset input form
    newNameForm.reset();
    //show then hide update msg
    updateMssg.innerText = `Your name was updated to ${newName}`; 
    setTimeout(() => updateMssg.innerText = '', 2000);
});

//update chat room 
rooms.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

//check local storage for username
const username = localStorage.username ? localStorage.username : 'anonymous';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'anonymous');

//get chats and render
chatroom.getChats(data =>{chatUI.render(data)});