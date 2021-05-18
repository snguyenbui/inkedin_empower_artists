import React from "react";
import { useStyles } from "./Component_Style/Empty.jsx";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Empty = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.buttonContainer}>
      {/* <img
        className={classes.button}
        src="../images/add.png"
        alt="Add"
        onClick={props.onAdd}
      /> */}
      <AddCircleOutlineIcon className={classes.button} onClick={props.onAdd} />
    </main>
  );
};

export default Empty;
