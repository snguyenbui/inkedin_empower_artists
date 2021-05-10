import React, { useState, useEffect } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import axios from "axios";

import useApplicationData from "../../../hooks/useApplicationData";

import "./ConversationList.css";

export default function ConversationList(props) {
  const {
    state,
    setActiveConversation,
    getConversations,
  } = useApplicationData();

  // const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  }, []);

  // const getConversations = () => {
  //   console.log("props.activeUser = ", props.activeUser);
  //   axios.get(`/api/friends/${props.activeUser}`).then((response) => {
  //     let newConversations = response.data.friends.map((result) => {
  //       return {
  //         // photo: result.picture.large,
  //         username: `${result.second_username}`,
  //         first_id: result.first_id,
  //         second_id: result.second_id,
  //         // text:
  //         // "Hello world! This is a long message that needs to be truncated.",
  //       };
  //     });
  //     setConversations([...conversations, ...newConversations]);
  //   });
  // };

  console.log("state conversations", state);

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {state.conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.username}
          data={conversation}
          setConversation={() => setActiveConversation(conversation.username)}
        />
      ))}
    </div>
  );
}
