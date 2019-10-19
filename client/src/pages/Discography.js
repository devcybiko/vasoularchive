import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";

class Discography2 extends React.Component {
    state = {
        discography: [],
    };

    componentDidMount() {
        this.loadDiscography();
    };

    CellFormatter(cell, row) {
        return (<div><a href={"records" + "/" + row._id} id="tableLink">{cell}</a></div>);
    }

    loadDiscography = () => {
        API.getRecords()
            .then(res =>
                this.setState({ discography: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div id="compView">
                    <Container fluid>
                        <Nav><a className="active" href="/">HOME</a><a href="#" id="selected">THE ARCHIVE</a><a href="/addentry">ADD ENTRY</a></Nav>
                        <Jumbotron>
                            <BootstrapTable data={this.state.discography} bodyStyle={{ background: '#dbb286' }} options={this.options} pagination search>
                                <TableHeaderColumn dataField='id' dataField='artist' dataFormat={this.CellFormatter} isKey dataSort>Artist or Group <span id="tiny">(click tab to sort by)</span></TableHeaderColumn>
                                <TableHeaderColumn dataField='titleA' >A-Side</TableHeaderColumn>
                                <TableHeaderColumn dataField='titleB' >B-Side</TableHeaderColumn>
                                <TableHeaderColumn dataField='recordLabel' dataSort>Label <span id="tiny">(click tab to sort by)</span></TableHeaderColumn>
                                <TableHeaderColumn dataField='cityRegion' dataSort>City or Region <span id="tiny">(click tab to sort by)</span></TableHeaderColumn>
                            </BootstrapTable>
                        </Jumbotron>
                    </Container>
                </div ><div id="smallScreen">
                <Container fluid>
                <Nav><a className="active" href="/">HOME</a><a href="#" id="selected">THE ARCHIVE</a><a href="/addentry">ADD ENTRY</a></Nav>
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
            </div></div>
        );
    }


}
export default Discography2;    