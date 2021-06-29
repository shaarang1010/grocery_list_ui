import React from "react";
import { Component } from "react";
import axios from "axios";

import { Row, Col, Jumbotron, Form, Container } from "react-bootstrap";
import Hoc from "../../../components/hoc/Hoc";
//import { useParams } from 'react-router-dom';
//import Hoc from '../../../components/hoc/Hoc';

class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      item: null,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    // load json file
    axios
      .get("../data/groceries_list.json")
      .then((response) => {
        const { data } = response;
        this.setState({ item: data.filter((el) => el.id === id)[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Hoc>
        <Jumbotron fluid>
          <h1> Grocery List </h1>
          <p> Edit or Update your Grocery List </p>
        </Jumbotron>
        <Container>
          <Form>
            <Row>
              <Col xs={12} md={12}>
                <Form.Control
                  size="lg"
                  type="value"
                  ref={(listName) => (this.itemName = listName)}
                />
              </Col>
            </Row>
            <Form.Group as={Col}>
              {this.state.item? this.state.item.items.map((el, index) =>{
                  return(
                      <Col xs={6} md={3} key={index}>
                        <Form.Check type="checkbox" defaultChecked={el.completed} label={el.item} value={el.item} /> 
                      </Col>
                  )
              }): null}
              </Form.Group>
          </Form>
        </Container>
      </Hoc>
    );
  }
}


export default GroceryList;
