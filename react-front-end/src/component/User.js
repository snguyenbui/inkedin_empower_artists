import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import useApplicationData from "../hooks/useApplicationData";

export default function User(props) {
  const { state, setUserPortfolio } = useApplicationData();
  let { id } = useParams();
  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => {
      setUserPortfolio(res.data.portfolio);
    });
  }, []);

  return (
    <div>
      <div>
        <Form />
      </div>
      <div className="profile">
        {state.portfolio[0] && state.portfolio[0].username}
      </div>
      {id === `${state.activeUser}` && <div>add Image</div>}
      <div>add another image</div>
      <Artworks art={state.portfolio} />
    </div>
  );
}
