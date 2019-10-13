import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Discography extends Component {
    state = {
        discography: [],
    };

    componentDidMount() {
        this.loadDiscography();
    };

    loadDiscography = () => {
        API.getRecords()
            .then(res =>
                this.setState({ discography: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    {this.state.discography.length ? (
                        <List>
                            {this.state.discography.map(record => (
                                <ListItem key={record._id}>
                                    <Link to={"/records/" + record._id}>
                                        
                                    <strong>{record.artist}</strong> - {record.titleA} / {record.titleB} - {record.recordLabel}
                                        
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No data to list!</h3>
                    )}
                </Jumbotron>
            </Container>
        )
    };
};

export default Discography;