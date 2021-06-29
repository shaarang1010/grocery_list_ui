import React from 'react';

import { Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';

import { BsFillPlusSquareFill, BsFillFunnelFill } from "react-icons/bs";

const Controls = props =>{
    return(
        <>
            <Col xs={6} md={3}>
              <Button variant="outline-dark" size="lg" block onClick={props.addAction}>
                <BsFillPlusSquareFill /> Create a new list
              </Button>
            </Col>
            <Col xs={2} md={2}>
              {" "}
            </Col>
            <Col xs={4} md={{ span: 2, offset: 5 }}>
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-dark"
                title={<BsFillFunnelFill />}
              >
                <Dropdown.Item onClick={props.sortDate}>Sort by Date</Dropdown.Item>
                <Dropdown.Item onClick={props.sortName}>Sort by Name</Dropdown.Item>
                <Dropdown.Item onClick={props.sortCompleted}>Sort by Completed</Dropdown.Item>
              </DropdownButton>
            </Col>
        </>
    )
}

export default Controls;