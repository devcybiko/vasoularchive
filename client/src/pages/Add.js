import React, { Component } from "react";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Add extends Component {
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


    // componentDidMount() {
    //     this.loadForm();
    // };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1>FORM GOES HERE</h1>
                </Jumbotron>
            </Container>
        )
    };
};

export default Add;