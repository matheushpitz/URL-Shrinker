import React from 'react';
import './shrinker.css';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

const Shrinker = (props) => {
    let { onChange, onClick, data } = props;
    return (
        <div>
            <Row>
                <Col className="align-component shrinker-form">
                    <FormControl className="inline-form" type="text" placeholder="Paste the link to shrink it" value={data.value} onChange={onChange} />
                    <Button className="inline-form shrinker-submit" onClick={onClick}>Shrink</Button>
                </Col>                
            </Row>
            
            <Row>
                <Col xl="12">
                    <span className={data.error ? 'shrinker-message-error' : 'shrinker-message'}>{data.message}</span>
                </Col>
            </Row>

            <Row>
                <Col xl="12">
                    {data.shrinkedUrl === null ? ( null ) : (
                        <span className="shrinker-message">
                            <a href={data.shrinkedUrl} target="_blank" rel="noopener noreferrer">
                                {data.shrinkedUrl}
                            </a>
                        </span>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default Shrinker;