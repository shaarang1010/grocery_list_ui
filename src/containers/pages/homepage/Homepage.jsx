import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import { Container, Row, Col, Button, Accordion, Badge, Card } from 'react-bootstrap';

import Hoc from '../../../components/hoc/Hoc';

import CardComponent from '../../../components/card/CardComponent';

import ListComponent from '../../../components/listgroup/ListGroup';

import Controls from '../../../components/actioncontrols/ActionControl';

import { connect } from 'react-redux';

import { addCartItemsAction, removeItemsFromCartAction } from '../../../actions/cartAction';

import { selectGroceryItemAction } from '../../../actions/groceryAction';

import './Homepage.css';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      shoppingList: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // load json file
    axios
      .get('../data/groceries_list.json')
      .then((response) => {
        const { data } = response;
        const elements = data.map((el) => {
          return { ...el, name: this.createRandomName() };
        });
        this.props.addToCart(elements);
        this.setState({ shoppingList: elements, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {}

  createRandomName() {
    const names = ['Plant', 'Cat', 'Phones', 'Xbox', 'Playstation', 'AvoToast', 'DA', 'WAVC'];
    let randomNumber = Math.floor(Math.random() * 8);
    return `${names[randomNumber]}_${randomNumber}`;
  }

  _sortByDateHandler = () => {
    this.state.shoppingList.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  _sortByCompletedHandler = () => {
    this.state.shoppingList.sort((a, b) => {});
  };

  _sortByNameHandler = () => {
    this.state.shoppingList.sort((a, b) => {
      if (a.groceryListName < b.groceryListName) {
        return -1;
      }
      if (a.groceryListName > b.groceryListName) {
        return 1;
      }
      return 0;
    });
  };

  _onClickHandler = (e) => {};

  render() {
    const groceryList = this.props.cartItems; //TODO: fetch groceries from state and then create cards
    if (this.state.isLoading) return null;
    return (
      <Hoc>
        <Container>
          <Row>
            <Controls
              sortDate={this._sortByDateHandler}
              sortName={this._sortByNameHandler}
              sortCompleted={this._sortByCompletedHandler}
            />
          </Row>
          <Row>
            {groceryList.map((item, index) => {
              let randomName = item.name;
              let completedItems = item.items.filter((el) => el.completed === true);
              let incompleteItems = item.items.filter((el) => el.completed === false);
              return (
                <Col xs={12} md={4} key={index}>
                  <CardComponent
                    header={randomName}
                    link={`/list/${item.id}`}
                    footerText={'Created on ' + new Date(item.date).toUTCString()}
                  >
                    <Accordion defaultActiveKey="1">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="success" eventKey="0" block>
                            Bought <Badge variant="light">{completedItems.length}</Badge>
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
                          <Accordion.Toggle as={Button} variant="danger" eventKey="1" block>
                            To be Completed <Badge variant="light">{incompleteItems.length}</Badge>
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.groceryList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addCartItemsAction(data)),
    removeFromCart: (data) => dispatch(removeItemsFromCartAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
