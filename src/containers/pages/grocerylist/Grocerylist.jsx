import React from 'react';
import { Component } from 'react';
import { Row, Col, Jumbotron, Form, Container, ListGroup, Button } from 'react-bootstrap';
import Hoc from '../../../components/hoc/Hoc';
import { BsTrashFill, BsFillPlusSquareFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { addCartItemsAction } from '../../../actions/cartAction';
import './GroceryList.css';
import { selectGroceryItemAction, updateGroceryCartItem } from '../../../actions/groceryAction';

class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      item: null,
      newGroceryItem: ''
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    // load json file
    let { cartItems } = this.props;
    this.props.selectGroceryItem(cartItems.groceryList[id - 1]);
  }

  onCheckHandler = (params, index) => (e) => {
    const element = document.getElementById(params);
    if (element.style.textDecoration === 'none') {
      element.style.textDecoration = 'line-through';
    } else {
      element.style.textDecoration = 'none';
    }
    this.props.updateGroceryCartItem(index);
  };

  onDeleteElementHandler = (index) => (e) => {
    e.preventDefault();
    let { item } = this.state;
    let { items } = item;
    let newItems = items.filter((el, i) => i !== index);
    item['items'] = newItems;
    this.setState({ item });
  };

  onChangeHandler = (e) => {
    this.setState({ newGroceryItem: e.target.value });
  };

  addItemHandler = (e) => {
    let { groceryItem } = this.props;
    let itemsList = [...groceryItem.items, { item: this.state.newGroceryItem, completed: false }];
    let updatedGroceryList = { ...groceryItem.item, items: itemsList };
    this.setState({ item: updatedGroceryList, newGroceryItem: '' });
  };

  render() {
    const { groceryList, groceryItemName } = this.props.groceryItem;
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
                value={groceryItemName ? groceryItemName : ''}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <ListGroup variant="flush">
                {groceryList
                  ? groceryList.map((el, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <Col xs={10} md={6}>
                            <Form.Check
                              type="checkbox"
                              defaultChecked={el.completed}
                              onChange={this.onCheckHandler(`${el.item}_${index}`, index)}
                              id={el.item}
                              label={
                                <h6
                                  id={`${el.item}_${index}`}
                                  style={{
                                    textDecoration: el.completed ? 'line-through' : 'none'
                                  }}
                                >
                                  {el.item}{' '}
                                </h6>
                              }
                              value={el.item}
                              feedback="Click to select"
                            />
                          </Col>
                          <Col sm={2}></Col>
                        </ListGroup.Item>
                      );
                    })
                  : null}
                <ListGroup.Item>
                  <Col md={12} xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Add new item"
                      value={this.state.newGroceryItem}
                      onChange={this.onChangeHandler}
                      style={{ border: '0', boxShadow: 'none' }}
                    />
                  </Col>
                </ListGroup.Item>
                <Row>
                  <Col md={6} xs={6}>
                    <Button
                      style={{ marginTop: '10px', marginLeft: '10px' }}
                      variant="outline-dark"
                      onClick={this.addItemHandler}
                    >
                      <BsFillPlusSquareFill style={{ marginRight: '5px' }} /> Add
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    groceryItem: state.groceryItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addCartItemsAction(data)),
    selectGroceryItem: (data) => dispatch(selectGroceryItemAction(data)),
    updateGroceryCartItem: (data) => dispatch(updateGroceryCartItem(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);
