import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { useStyles } from "./Component_Style/ProfilePic.jsx";

import useApplicationData from "../hooks/useApplicationData";

export default function ProfilePic(props) {
  const { state, setFriends } = useApplicationData();
  const classes = useStyles();

  const addFriend = () => {
    const friend = {
      first_user_id: Number(state.activeUser),
      second_user_id: props.userInfo.user_id,
    };
    axios.put(`/api/friends`, friend).then(() => {});
    localStorage.setItem("activeConversation", [
      friend.first_user_id,
      friend.second_user_id,
    ]);
    setFriends();
  };

  const isNotFriends = () => {
    let notFriends = true;
    state.friends.map((friend) => {
      if (
        friend.first_id === props.userInfo.user_id ||
        friend.second_id === props.userInfo.user_id
      ) {
        notFriends = false;
      }
      return null;
    });
    if (state.activeUser === props.userInfo.user_id) {
      notFriends = false;
    }
    return notFriends;
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.userInfo.profile_pic}
          title={props.userInfo.username}
        />
        <CardContent data-card-type="profile-pic">
          <CardActions
            data-card-type="profile-pic"
            className={classes.usernameAndButtonContainer}
          >
            <div>
              <Typography className={classes.username} gutterBottom>
                {props.userInfo.username}
              </Typography>
            </div>
            <div className={classes.button}>
              {isNotFriends() && (
                <IconButton
                  onClick={() => {
                    addFriend();
                  }}
                >
                  <PersonAddIcon />
                </IconButton>
              )}
            </div>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
