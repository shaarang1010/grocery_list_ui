import React from "react";
import { Component } from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Badge,
  Card,
} from "react-bootstrap";

import Hoc from "../../../components/hoc/Hoc";
import NavComponent from "../../../components/navbar/Navbar";

import CardComponent from "../../../components/card/CardComponent";

import ListComponent from "../../../components/listgroup/ListGroup";

import "./Homepage.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      shoppingList: [],
    };
  }

  componentDidMount() {
    // load json file
    axios
      .get("../data/groceries_list.json")
      .then((response) => {
        const { data } = response;
        this.setState({ shoppingList: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {}

  createRandomName(){
    const names=["Plant", "Cat", "Phones", "Xbox", "Playstation", "AvoToast"];
    let randomNumber = Math.floor(Math.random() * 6);
    return `${names[randomNumber]}_${randomNumber}`;
  }

  render() {
    const groceryList = this.state.shoppingList; //TODO: fetch groceries from state and then create cards
    return (
      <Hoc>
        {/*
                    Render list of grocery items as a card. 
                    Card and items completed and to complete
                    May be organize by date
                    
                */}
        <NavComponent bgColor="dark" header="Shopping list" user="Shaarang" />
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Button variant="success" size="lg" block>
                Create a new list
              </Button>
            </Col>
          </Row>
          <Row>
            {groceryList.map((item) => {
              let randomName = this.createRandomName();
              let completedItems = item.items.filter((el)=> el.completed === true);
              let incompleteItems = item.items.filter((el)=> el.completed === false);
              return (
                <Col xs={12} md={4}>
                  <CardComponent header={randomName} footerText={"Created on " + item.date}>
                    <Accordion defaultActiveKey="1">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="success"
                            eventKey="0"
                            block
                          >
                            Bought{" "}
                            <Badge variant="light">
                              {
                                completedItems.length
                              }
                            </Badge>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <ListComponent variant="flush" items={completedItems}></ListComponent>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="danger"
                            eventKey="1"
                            block
                          >
                            To be Completed{" "}
                            <Badge variant="light">
                              {
                                incompleteItems.length
                              }
                            </Badge>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          <ListComponent variant="flush" items={incompleteItems}></ListComponent>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </CardComponent>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Hoc>
    );
  }
}

export default Homepage;
