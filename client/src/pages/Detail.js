import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Card } from "../components/Card";
import Nav from "../components/Nav";
import { RecordDetail } from "../components/DetailImage";


class Detail extends Component {
  state = {
    record: {},
  };

  componentDidMount() {
    API.getRecord(this.props.match.params.id)
      .then(res => this.setState({ record: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const image = "http://localhost:3001/" + this.state.record.image;
    return (
      <Container fluid>
        <Nav><a className="active" href="/">HOME</a><a href="/discography">THE ARCHIVE</a><a href="/addentry">ADD ENTRY</a></Nav>
        <Card>
          <p>
            <RecordDetail src={image} alt={image} />
            <span id="subject">Artist:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.artist}</span><br />
            <span id="subject">Record Label:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.recordLabel}</span><br />
            <span id="subject">A Side:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.titleA}</span><br />
            <span id="subject">B Side:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.titleB}</span><br />
            <span id="subject">Approximate Release Date:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.releaseDate}</span><br />
            <span id="subject">Notes on release:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.comments}</span><br />
            </p>
        </Card>
      </Container>
    )
  };
};

export default Detail;