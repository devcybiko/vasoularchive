import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { Card } from "../components/Card";
import { TopImage } from "../components/Header";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    state = {
        user: '',
    };

    render() {
        return (
            <Container fluid>
                <Container fluid>
                    <Nav><a className="active" href="#">HOME</a><a href="/discography">THE ARCHIVE</a><a href="/addentry">ADD ENTRY</a></Nav>
                    <TopImage />
                    <br />
                    <Jumbotron>
                        <h3>Mission Statement:</h3>
                        <p>Test test</p>
                    </Jumbotron>
                </Container>
            </Container>
        )
    };
};

export default Home;