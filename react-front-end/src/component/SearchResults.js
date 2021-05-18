import React from "react";
import { useHistory } from "react-router-dom";
// Artworks
import Artwork from "./Artwork";
import Grid from "@material-ui/core/Grid";
// Users
import ProfilePic from "./ProfilePic";
// Jobs table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { useStyles } from "./Component_Style/SearchResults.jsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const SearchResults = (props) => {
  const storage = JSON.parse(localStorage.getItem("search_results"));

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: "center",
    },
    gridContainer: {
      // paddingLeft: "50px",
      // paddingRight: "50px",
      // paddingTop: "50px",
      paddingBottom: "50px",
    },
    page_container: {
      paddingTop: "50px",
      margin: "3%",
    },
    page_titles: {
      color: "#B9A1BE",
    },
    table_container: {
      // marginLeft: "3%",
      // marginRight: "3%",
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();
  const history = useHistory();

  // RETURN SEARCHED ARTWORKS
  const artworks = () => {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justify="center"
        >
          {storage.artworks.map((artpiece) => {
            console.log("artpiece:  ", artpiece);
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Artwork
                  id={artpiece.id}
                  title={artpiece.title}
                  image={artpiece.img_link}
                  description={artpiece.descrip}
                  price={artpiece.price}
                  forSale={artpiece.for_sale}
                  url={artpiece.project_link}
                  author_id={artpiece.author_id}
                  username={artpiece.username}
                />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  };

  // RETURN SEARCHED USERS
  const users = () => {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justify="center"
        >
          {storage.users.map((user) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <div
                  onClick={() => {
                    history.push(`/portfolio/${user.id}`);
                  }}
                >
                  <ProfilePic userInfo={user} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  };

  // RETURN SEARCHED JOBS
  const jobs = () => {
    return (
      <TableContainer component={Paper} className={classes.table_container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Pay</StyledTableCell>
              <StyledTableCell align="right">Company</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {storage.jobs.map((row) => (
              <StyledTableRow
                key={row.id}
                onClick={() => {
                  history.push(`/jobs/${row.id}`);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">{row.pay}</StyledTableCell>
                <StyledTableCell align="right">{row.company}</StyledTableCell>
                <StyledTableCell align="right">{row.location}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className={classes.page_container}>
      <h1 className={classes.page_titles}>{storage && "Art!"}</h1>
      <div>{storage && artworks()}</div>
      <h1 className={classes.page_titles}>{storage && "People!"}</h1>
      <div>{storage && users()}</div>
      <h1 className={classes.page_titles}>{storage && "Jobs!"}</h1>
      <div>{storage && jobs()}</div>
    </div>
  );
};

export default SearchResults;
