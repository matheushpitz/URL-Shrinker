import React from 'react';
import Loading from '../loading/loading.component';
import { Image } from 'react-bootstrap';
import './redirect.css';

const Redirect = (props) => {

    let { text } = props;

    return (
        <div className="header" style={{height: window.screen.height}}>
            <Image src="images/interlink-logo-white.png" className="logo" />            
            <Loading text={text} size="70px" className="redirect-loading"/>            
        </div>
    );
}

export default Redirect;