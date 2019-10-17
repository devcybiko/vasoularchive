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
        recordLabel: "",
        cityRegion: "",
        releaseDate: "",
        comments: "",
        image: "",
        file: undefined
    };

    sendRequest(file) {
        console.log(file);
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();

            req.upload.addEventListener("error", event => {
                alert(event);
                reject(req.response);
            });

            const formData = new FormData();
            formData.append("file", file, this.state.image);

            req.open("POST", "http://localhost:3001/upload");
            req.send(formData);
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.sendRequest(this.state.file);
        if (this.state.artist && this.state.titleA) {
            API.saveRecord({
                artist: this.state.artist,
                titleA: this.state.titleA,
                titleB: this.state.titleB,
                recordLabel: this.state.recordLabel,
                cityRegion: this.state.cityRegion,
                releaseDate: this.state.releaseDate,
                comments: this.state.comments,
                image: this.state.image
            })
                .then(this.setState({ artist: "", titleA: "", titleB: "", recordLabel: "", cityRegion: "", releaseDate: "", comments: "", image: "" }));
                // .catch(err => console.log(err));
        }
    };

    handleChange = event => {
        if (event.target.name === 'image') {
            console.log(event.target.files);
            this.state.file = event.target.files[0];
        }
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <form>
                        <Label>Artist:</Label>
                        <Input
                            value={this.state.artist || "Greg"}
                            onChange={this.handleChange}
                            name="artist"
                            placeholder="Name of artist or group"
                        />
                        <Label>A Side (or album title if LP or EP):</Label>
                        <Input
                            value={this.state.titleA  || "Title A"}
                            onChange={this.handleChange}
                            name="titleA"
                            placeholder="A-Side title or Album title"
                        />
                        <Label>B Side:</Label>
                        <Input
                            value={this.state.titleB || "Title B"}
                            onChange={this.handleChange}
                            name="titleB"
                            placeholder="B-Side title or if album, leave blank"
                        />
                        <Label>Record Label (if no label, input 'no label'):</Label>
                        <Input
                            value={this.state.recordLabel || "record label"}
                            onChange={this.handleChange}
                            name="recordLabel"
                            placeholder="Record label name (if none, note 'no label')"
                        />                       
                        <Label>City or Region:</Label>
                        <Input
                            value={this.state.cityRegion || "MoTown"}
                            onChange={this.handleChange}
                            name="cityRegion"
                            placeholder="City/Town or general region of release"
                        />
                        <Label>Date of Release:</Label>
                        <Input
                            value={this.state.releaseDate || "12-04-1962"}
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
                        <ImageUpload
                            value={this.state.image}
                            onChange={this.handleChange}
                            name="image"
                        />
                        <FormBtn onClick={this.handleFormSubmit}>Submit Release</FormBtn>
                    </form>
                </Jumbotron>
            </Container>
        )
    };
};

export default Add;