import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Card } from "../components/Card";
// import { RecordDetail } from "../components/DetailImage";
import Nav from "../components/Nav";



class Detail extends Component {
  state = {
    record: {},
    recordImage: {}
  };

  componentDidMount() {
    API.getRecord(this.props.match.params.id)
      .then(res => this.setState({ record: res.data }))
      .catch(err => console.log(err));
  }

  getImageSource = imageLocation => {
    API.getRecord(this.props.match.params.id)
      .then(res => this.setState({ rcordImage: res.data }))
      .then(console.log("test" + this.state.recordImage));
  };



  render() {
    return (
      <Container fluid>
        <Nav><Link to="/discography">The Archive</Link><Link to="/">Home</Link></Nav>
        <Card>
          <p>
            {/* <img src="localhost:3001/" {(this.state.record.image).slice(10)} /> */}
            <span id="subject">Artist:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.artist}</span><br />
            <span id="subject">Record Label:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.recordLabel}</span><br />
            <span id="subject">A Side:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.titleA}</span><br />
            <span id="subject">B Side:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.titleB}</span><br />
            <span id="subject">Approximate Release Date:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.releaseDate}</span><br />
            <span id="subject">Notes on release:</span>&nbsp;&nbsp;<span id="returnedInfo">{this.state.record.comments}</span><br />
            <span id="subject">Image location:</span>&nbsp;&nbsp;<span id="returnedInfo">{(this.state.record.image)}</span></p>
        </Card>
      </Container>
    )
  };
};

export default Detail;