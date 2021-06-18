import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const ModalComponent = (props) =>{
    return(
        <Modal
        show={props.show}
        onHide={props.hide}
        backdrop="static"
        keyboard={false}
        >

            <Modal.Header closeButton>
                {props.modalHeader}
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.hide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.show}>
                    {props.agreeOption}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;