import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Label, ImageUpload } from "../components/Form";

class Add extends Component {
    state = {
        artist: "",
        titleA: "",
        titleB: "",
        cityRegion: "",
        releaseDate: "",
        // image: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.artist && this.state.titleA) {
            API.saveRecord({
                artist: this.state.artist,
                titleA: this.state.titleA,
                titleB: this.state.titleB,
                cityRegion: this.state.cityRegion,
                releaseDate: this.state.releaseDate,
                // image: this.state.image
            })
                .then(this.setState({ artist: "", titleA: "", titleB: "", cityRegion: "", releaseDate: "", comments: "" }));
                // .catch(err => console.log(err));
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // componentDidMount() {
    //     this.loadForm();
    // };

    // loadForm = () => {
        
    //         this.setState({ artist: "", titleA: "", titleB: "", cityRegion: "", releaseDate: "", comments: "" })
        
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <form>
                        <Label>Artist:</Label>
                        <Input
                            value={this.state.artist}
                            onChange={this.handleChange}
                            name="artist"
                            placeholder="Name of artist or group"
                        />
                        <Label>A Side:</Label>
                        <Input
                            value={this.state.titleA}
                            onChange={this.handleChange}
                            name="titleA"
                            placeholder="A-Side title or Album title"
                        />
                        <Label>B Side:</Label>
                        <Input
                            value={this.state.titleB}
                            onChange={this.handleChange}
                            name="titleB"
                            placeholder="B-Side title or if album, leave blank"
                        />
                        <Label>City or Region:</Label>
                        <Input
                            value={this.state.cityRegion}
                            onChange={this.handleChange}
                            name="cityRegion"
                            placeholder="City/Town or general region of release"
                        />
                        <Label>Date of Release:</Label>
                        <Input
                            value={this.state.releaseDate}
                            onChange={this.handleChange}
                            name="releaseDate"
                            placeholder="Exact or approximate release date"
                        />
                        <Label>Notes on Release:</Label>
                        <TextArea
                            value={this.state.comments}
                            onChange={this.handleChange}
                            name="comments"
                            placeholder="Add any relevant notes or comments you may have for this release."
                        />
                        <Label>Image of Record to Upload:</Label>
                        {/* <ImageUpload
                            value={this.state.image}
                            onChange={this.handleChange}
                            name="image"
                        /> */}
                        <FormBtn onClick={this.handleFormSubmit}>Submit Release</FormBtn>

                    </form>
                </Jumbotron>
            </Container>
        )
    };
};

export default Add;