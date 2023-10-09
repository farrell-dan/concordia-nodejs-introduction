const messageInput = document.querySelector('#user-input');
const conversationElem = document.querySelector('#conversation-container');

// focus the input on load
const handleFocus = () => {
  messageInput.focus();
};

// updateConversation expects an object with 'user' and 'text'
const updateConversation = (message) => {
  const { author, text } = message;
  const messageElem = document.createElement('p');

  messageElem.classList.add('message', author);
  messageElem.innerHTML = `<span>${text}</span>`;
  conversationElem.appendChild(messageElem);
  conversationElem.scrollTop = conversationElem.scrollHeight;

  if (author === 'user') messageInput.value = '';
  handleFocus();
};

const userMessage = messageInput.value;

const sendMessage = (event) => {
  event.preventDefault();

  const message = { author: 'user', text: messageInput.value };
  updateConversation(message);


  const botText = message.text;
  
  const getBotMessage = (text) => {
    const commonGreetings = ["hi", "hello", "howdy"];
    const commonGoodbyes =["goodbye", "farewell", "ciao"]
    let botMsg = botText;
    const botMsgLower = botMsg.toLocaleLowerCase();
    
    console.log(botMsgLower);

    for (const greeting of commonGreetings) {
      const botCheck = new RegExp(greeting, 'i');
      if (botCheck.test(botMsgLower)) {
      botMsg = "Hello!";
      break;
    }
  };
  for (const goodbye of commonGoodbyes) {
    const botCheck = new RegExp(goodbye, 'i');
    if (botCheck.test(botMsgLower)) {
    botMsg = "Goodbye!";
    break;
  }
};
  return botMsg;
}

const botBot = getBotMessage(botText)

const url = `/bot-message?userMessage=${botBot}`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      updateConversation(data.message);
    });
};

// call handleFocus on load
handleFocus();


 // const getBotMessage = (text) => {
  //   const commonGreetings = ["hi", "hello", "howdy"];
  //   let botMsg = userMessage;
  //   const botMsgLower = botMsg.toLocaleLowerCase();
  //   for (const greeting of commonGreetings) {
  //     const botCheck = new RegExp(greeting, 'i');
  //     if (botCheck.test(botMsgLower)) {
  //     botMsg = "Hello!";
  //   }
  //   return botMsg;
  // };
  // }

  // const url = `/bot-message?userMessage=${getBotMessage(messageInput.value)}`;