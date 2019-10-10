import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Detail extends Component {
    state = {
      records: [],
      artist: "",
      titleA: "",
      titleB: "",
      region: "",
      city: "",
      releaseDate: "",
      image: ""
    };

    render() {
      return (
          <Container fluid>
              <Jumbotron>
                  <h1>RECORD DETAILS GO HERE</h1>
              </Jumbotron>
          </Container>
      )
  };
};

export default Detail;