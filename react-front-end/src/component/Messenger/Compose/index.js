import React, { useState } from "react";
import "./Compose.css";
import Button from "@material-ui/core/Button";

export default function Compose(props) {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    props.addMessage(text);
    setText("");
  };

  return (
    <div className="input_container">
      <form className="compose" onSubmit={(event) => submitForm(event)}>
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {/* <button type="submit" onSubmit={(event) => submitForm(event)}>
          SEND
        </button> */}
        <Button variant="contained" data-type="send_button">
          SEND
        </Button>
      </form>
      {props.rightItems}
    </div>
  );
}
