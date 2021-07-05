import React from "react";
import { Component } from "react";
import axios from "axios";

import {
  Row,
  Col,
  Jumbotron,
  Form,
  Container,
  ListGroup,
  Button,
} from "react-bootstrap";
import Hoc from "../../../components/hoc/Hoc";

import { BsTrashFill, BsFillPlusSquareFill } from "react-icons/bs";

import "./GroceryList.css";

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

  onCheckHandler = (params) => (e) => {
    const element = document.getElementById(params);
    if (element.style.textDecoration === "none") {
      element.style.textDecoration = "line-through";
    } else {
      element.style.textDecoration = "none";
    }
  };

  onDeleteElementHandler = (index) => (e) =>{
    e.preventDefault();
    let { item } = this.state;
    let { items } = item;
    let newItems = items.filter((el,i) => i !== index);
    item['items'] = newItems;
    this.setState({ item });
  }

  addItemHandler = (e) =>{

  }

  render() {
    return (
      <Hoc>
        <Jumbotron fluid>
          <Col md={{ offset: 3, span: 6 }}>
            <h1> Grocery List </h1>
            <p> Edit or Update your Grocery List </p>
          </Col>
        </Jumbotron>
        <Container>
            <Row>
              <Col xs={12} md={12}>
                <Form.Control
                  size="lg"
                  type="value"
                  ref={(listName) => (this.itemName = listName)}
                />
              </Col>
            </Row>
            <Row>
            <Col xs={12} md={8}>
            <ListGroup variant="flush">
              {this.state.item
                ? this.state.item.items.map((el, index) => {
                    return (
                        <ListGroup.Item key={index}>
                          <Col xs={10} md={6}>
                            <Form.Check
                              type="checkbox"
                              defaultChecked={el.completed}
                              onChange={this.onCheckHandler(
                                `${el.item}_${index}`
                              )}
                              id={el.item}
                              label={
                                
                                <p
                                  id={`${el.item}_${index}`}
                                  style={{
                                    textDecoration: el.completed
                                      ? "line-through"
                                      : "none",
                                  }}
                                >
                                  {el.item}
                                 {" "}
                                 
                                    
                                </p>
                                
                                
                              }
                              value={el.item}
                              feedback="Click to select"
                            />
                          </Col>
                          <Col sm={2}>
                              
                          </Col>
                           
                        </ListGroup.Item>
                      
                    );
                  })
                : null}
                <ListGroup.Item>
                  <Col md={5} xs={8}>
                  <Form.Control type="text" placeholder="Add new item" />
                  </Col>
                </ListGroup.Item>
                <Row>
              <Col xs={4} md={4}>
              <Button variant="outline-dark">
                   <BsFillPlusSquareFill/> Add
                </Button>
              </Col>
            </Row>
            </ListGroup>
            </Col>
            </Row>
        </Container>
      </Hoc>
    );
  }
}

export default GroceryList;
