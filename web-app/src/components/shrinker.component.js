import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Shrinker = (props) => {
    let { onChange, onClick, value, spanMessage } = props;
    return (
        <div>
            <Row>
                <Col xl="12">
                    <input type="text" value={value} onChange={onChange} />
                    <button onClick={onClick}>Shrink</button>
                </Col>
            </Row>
            
            <Row>
                <Col xl="12">
                    <span>{spanMessage}</span>
                </Col>
            </Row>
        </div>
    );
}

export default Shrinker;