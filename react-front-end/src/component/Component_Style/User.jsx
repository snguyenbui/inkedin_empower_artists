import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  rootUserInfo: {
    backgroundColor: "#ecebfa",
    backgroundImage:
      "https://www.transparenttextures.com/patterns/lined-paper.png",
    // // minWidth: 275,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "550",
    height: 392,

    // background: "lavender",
    // padding: "20%",
  },
  rootUserInfoText: {
    // paddingTop: "60px",
    // paddingLeft: "70px",
    // paddingRight: "70px",
    // paddingBottom: "60px",
    // padding: "20px",
    width: "90%",
    height: "100%",
    borderLeft: "3px solid #6d0323",
    marginLeft: "5%",
    paddingLeft: "5%",
    paddingTop: "4%",

    // left: "0",
    textAlign: "left",
  },
  underline: {
    color: "#00007f",
    // fontweight: "4px",
    // size: 10,
    // height: "10px",
    border: "1px solid #00007f",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "lavender",
  },
  title: {
    fontSize: 24,
    color: "black",
    fontStyle: "bold",
    // textDecoration: "underline #6d0323",
  },
  username: {
    fontSize: 20,
    color: "black",
    paddingBottom: "25px",
  },
  description: {
    fontSize: 14,
    color: "black",
    paddingBottom: "25px",
  },
  pos: {
    marginBottom: 12,
    color: "lavender",
  },
  link: {
    color: "lavender",
  },
  websiteLink: {
    padding: "20px",
  },
  form: {
    color: "white",
  },
}));

export { useStyles };
