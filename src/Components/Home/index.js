import React from 'react'
import { StreamChat } from "stream-chat";
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';



function Home (params) {

  const client = new StreamChat(process.env.REACT_APP_API_KEY);
  const userToken =   localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))

  client.setUser(
    {
        id: user._id,
        firstName: user.name.first,
        lastName: user.name.last,
        name: `${user.name.first} ${user.name.last}`,
        image: 'https://picsum.photos/50',
    },
      userToken
    )

  const channel = client.channel('messaging', 'godevs', {
      // add as many custom fields as you'd like
      image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
      name: "Talk About Axios",
    });


  return (
    <React.Fragment>
  <Chat client={client} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
    </React.Fragment>
  )
}


export default Home