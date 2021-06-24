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

  render() {
    const groceryList = this.state.shoppingList; //TODO: fetch groceries from state and then create cards

    let element = groceryList.slice(0, 2);

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
              return (
                <Col xs={12} md={4}>
                  <CardComponent header={item.date}>
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
                                item.items.filter((el) => el.completed === true)
                                  .length
                              }
                            </Badge>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Bought{" "}
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
                                item.items.filter((el) => el.completed === false)
                                  .length
                              }
                            </Badge>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            To be Completed{" "}
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
