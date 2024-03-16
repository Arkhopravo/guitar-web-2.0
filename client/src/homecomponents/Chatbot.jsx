import React from 'react'
import steps from '../chat'
import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {

    const config = {
        botAvatar: "https://png.pngtree.com/png-clipart/20190902/original/pngtree-cute-girl-avatar-element-icon-png-image_4393286.jpg",
        floating: true,
      };
  return (
    <div>
          <ChatBot className="text-black"
 
            // This appears as the header
            // text for the chat bot
            headerTitle="Harmio-Bot"
            steps={steps}
            {...config}

            />
           
    </div>
  )
}

export default Chatbot