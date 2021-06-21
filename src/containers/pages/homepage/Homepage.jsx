import React from "react";
import { Component } from "react";
import axios from "axios";

import { Row, Col, Button } from 'react-bootstrap';

import Hoc from "../../../components/hoc/Hoc";
import NavComponent from "../../../components/navbar/Navbar";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // load json file
    axios
      .get("../data/groceries_list.json")
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Hoc>
        {/*
                    Render list of grocery items as a card. 
                    Card and items completed and to complete
                    May be organize by date
                    
                */}
        <NavComponent bgColor='dark' header='Shopping list' user='Shaarang'/>
        <Row>
            <Col xs={12} md={3}>
                <Button variant='success' size='lg' block>{ '+' }</Button>
            </Col>
        </Row>
      </Hoc>
    );
  }
}

export default Homepage;
