import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { Card } from "../components/Card";
import { TopImage } from "../components/Header";
import Nav from "../components/Nav";

class Home extends Component {
    state = {
        user: '',
    };

    render() {
        return (
            
            <Container fluid>
                <Container fluid>
                    <Nav><Link to="/discography">The Archive</Link></Nav>
                    <TopImage />
                    <br />
                    <Card>
                        <h3>Mission Statement:</h3>
                        <p>Test test</p>
                    </Card>
                    <Link to="/discography">Discography List</Link>
                </Container>
            </Container>
        )
    };
};

export default Home;