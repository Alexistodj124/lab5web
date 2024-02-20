// Create Title box 
const titleBox = document.createElement('div');

//Title box
titleBox.style.width = '100%';
titleBox.style.height = '20vh';
titleBox.style.backgroundColor = '#8B0000'; 
titleBox.style.border = '1px solid Black'; 
titleBox.style.boxSizing = 'border-box';
titleBox.style.display = 'flex';
titleBox.style.justifyContent = 'space-between';
titleBox.style.alignItems = 'center';

// Crete Title 
const title = document.createElement('h2');

//Title
title.textContent = 'Alexisto Chat';
title.style.fontSize = '1.5em'; 
title.style.textAlign = 'center'; 
title.style.margin = '0'; 

// CHAT ICON
const image = document.createElement('img');
image.src = 'img/chat-icon.png'
image.style.height = '10vh';


//Create Moon
const moon = document.createElement('img');
moon.src = 'img/klipartz.com.png'
moon.style.height = '10vh';

// Dark Mode ON OFF
let clicked = false;
moon.addEventListener('click', handleClick);
function handleClick() {
  if (!clicked) {
    chatDiv.style.background = 'black';
    messageInput.style.background = 'black';
  } else {
    chatDiv.style.background = 'white';
    messageInput.style.background = 'white';
  }
  clicked = !clicked;
}

titleBox.appendChild(image);
titleBox.appendChild(title);
titleBox.appendChild(moon);

//Crete Chat div
const chatDiv = document.createElement('div');

// ChatDIV
chatDiv.style.display = 'flex'; 
chatDiv.style.flexDirection = 'column'; 
chatDiv.style.alignItems = 'center'; 
chatDiv.style.width = '100%'; 
chatDiv.style.height = '60vh'; 
chatDiv.style.paddingTop = '20px'; 
chatDiv.style.paddingBottom = '20px'; 
chatDiv.style.backgroundColor = '#f0f0f0'; 
chatDiv.style.border = '1px solid black'; 
chatDiv.style.margin = '0 auto'; 
chatDiv.style.overflowY = 'auto'; 


// Create Message input
const messageInput = document.createElement('input');
messageInput.type = 'text';
messageInput.id = 'message';
messageInput.placeholder = 'Type your message...';

//Message input
messageInput.style.width = 'calc(100% - 100px)'; // Adjust width to accommodate the send button
messageInput.style.height = '10vh';
messageInput.style.padding = '10px';
messageInput.style.boxSizing = 'border-box';
messageInput.style.border = '1px solid black';
messageInput.style.display = 'inline-block'; 


// Create send button
const sendButton = document.createElement('button');
sendButton.textContent = 'Send';
sendButton.onclick = sendMessage;
messageInput.addEventListener('keypress', handleKeyPress);

// Send button
sendButton.style.width = '100px'; 
sendButton.style.height = '10vh';
sendButton.style.padding = '10px';
sendButton.style.boxSizing = 'border-box';
sendButton.style.backgroundColor = '#8B0000';
sendButton.style.color = 'black';
sendButton.style.border = '1px solid black';
sendButton.style.cursor = 'pointer';
sendButton.style.float = 'right'; 

document.body.appendChild(titleBox);
document.body.appendChild(chatDiv);
document.body.appendChild(messageInput);
document.body.appendChild(sendButton);
document.body.style.background = 'black';

// ENter send
function handleKeyPress(event) {
  if (event.keyCode === 13) { 
    sendMessage();
  }
}

//Send Message
function sendMessage() {
  const message = document.createTextNode(messageInput.value);
  if (message.textContent.trim() !== '') {
    const messageContainer = document.createElement('div');
    messageContainer.style.backgroundColor = '#FFCCCC';
    messageContainer.style.borderRadius = '10px';
    messageContainer.style.padding = '10px';
    messageContainer.style.margin = '10px 0';
    messageContainer.style.maxWidth = '70%';
    messageContainer.style.alignSelf = 'flex-end';
    messageContainer.appendChild(message);
    chatDiv.appendChild(messageContainer);
    messageInput.value = '';
    chatDiv.scrollTop = chatDiv.scrollHeight;

  }
}
