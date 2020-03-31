import React from 'react';

const Shrinker = (props) => {
    let { onChange, onClick, value } = props;
    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={onClick}>Shrink</button>
        </div>
    );
}

export default Shrinker;