import axios from "axios";
import { useReducer, useEffect } from "react";

export default function useApplicationData() {
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_ACTIVE_USER = "SET_ACTIVE_USER";
  const SET_USER_PORTFOLIO = "SET_USER_PORTFOLIO";
  const SET_ACTIVE_CONVERSATION = "SET_ACTIVE_CONVERSATION";
  const GET_MESSAGES = "GET_MESSAGES";
  const GET_CONVERSATIONS = "GET_CONVERSATIONS";

  const reducer = (state, action) => {
    const actions = {
      SET_APPLICATION_DATA: {
        ...state,
        ...action.data,
      },
      SET_ACTIVE_USER: {
        ...state,
        ...action.data,
      },
      SET_USER_PORTFOLIO: {
        ...state,
        ...action.data,
      },
      SET_ACTIVE_CONVERSATION: {
        ...state,
        ...action.data,
      },
      GET_CONVERSATIONS: {
        ...state,
        ...action.data,
      },
      GET_MESSAGES: {
        ...state,
        ...action.data,
      },
      default: new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      ),
    };
    return actions[action.type] || actions.default;
  };

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    artworks: [],
    friends: [],
    jobs: [],
    messages: [],
    flag: false,
    activeUser: 0,
    portfolio: [],
    activeConversation: "",
    conversations: [],
  });

  const setActiveUser = (paramId) => {
    dispatch({
      type: SET_ACTIVE_USER,
      data: { activeUser: paramId },
    });
    localStorage.setItem("User", paramId);
  };

  const setUserPortfolio = (portfolio) => {
    dispatch({
      type: SET_USER_PORTFOLIO,
      data: { portfolio },
    });
  };

  const setActiveConversation = (activeConversation) => {
    dispatch({
      type: SET_ACTIVE_CONVERSATION,
      data: { activeConversation },
    });
  };

  const getConversations = () => {
    axios.get(`/api/friends/${state.activeUser}`).then((response) => {
      let conversations = response.data.friends.map((result) => {
        return {
          username: `${result.second_username}`,
          first_id: result.first_id,
          second_id: result.second_id,
        };
      });
      dispatch({ type: GET_CONVERSATIONS, data: { conversations } });
    });
  };

  const getMessages = () => {
    axios.get(`/api/messages/${state.activeUser}`).then((response) => {
      let messages = response.data.messages.map((result) => {
        return {
          username: `${result.second_username}`,
          first_id: result.first_id,
          second_id: result.second_id,
        };
      });
      dispatch({ type: GET_MESSAGES, data: { messages } });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/users`),
      axios.get(`/api/artworks`),
      axios.get(`/api/jobs`),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        data: {
          users: all[0].data.users,
          artworks: all[1].data.artworks,
          jobs: all[2].data.jobs,
          flag: true,
        },
      });
    });
  }, []);

  return {
    state,
    setActiveUser,
    setUserPortfolio,
    setActiveConversation,
    getConversations,
    getMessages,
  };
}
