import React from 'react';
import './loading.css';

const Loading = (props) => {
    // get data
    let { size, text, color, className } = props;        

    return (
        <div className={className}>
            <div className="loading-spinner"
            style={{
                width: size,
                height: size,
                borderTop: '8px solid ' + color,
                borderLeft: '8px solid ' + color,
                borderRight: '8px solid ' + color,
                borderBottom: '8px solid #ffffff00',
            }}></div>
            <p className="loading-text">{text}</p>
        </div>
    );
}

export default Loading;