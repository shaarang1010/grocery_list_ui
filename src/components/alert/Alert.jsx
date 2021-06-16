import React from 'react';

import Alert from 'react-bootstrap/Alert';

const AlertComponent = props => {
    return(
        <Alert variant={props.variant} onClose={props.close} show={props.show} closeLabel='Close' dismissible={true}>
            <Alert.Heading>
                {props.heading}
            </Alert.Heading>
            <p>
                {props.alertText}
            </p>
        </Alert>
    )
}

export default AlertComponent;