import React, { useState, useEffect } from "react";
import axios from "axios";
import Messenger from "./Messenger/Messenger";

export default function Friends(props) {
  const [friends, setFriends] = useState([]);

  console.log("props = ", props);
  useEffect(() => {
    const url = `/api/friends/${props.activeUser}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setFriends(res.data.friends);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("friends = ", friends);

  const friendsListUsernames = friends.map((friend) => {
    return friend.second_username;
  });

  return (
    <div>
      {friends[0] && <p> Friends loaded </p>}
      {friends[0] && <p>{friendsListUsernames}</p>}
      <div className="Friend">You have reached the friend route</div>
      <div>
        <Messenger activeUser={props.activeUser} />
      </div>
    </div>
  );
}

// import React from "react";
// import axios from "axios";
// import Messenger from "./Messenger/Messenger";

// export default function Friends(props) {
//   const getFriends = () => {
//     if (props.activeUser === 0) {
//       return [];
//     }
//     axios.get(`/api/friends/${props.activeUser}`).then((res) => {
//       friends = res.data.friends;
//       console.log(friends);
//     });
//   };
//   let friends = [];
//   getFriends();

//   return (
//     <div>
//       <Messenger />
//       {friends[0] && <p> Friends loaded </p>}
//       <div className="Friend">You have reached the friend route</div>
//     </div>
//   );
// }
