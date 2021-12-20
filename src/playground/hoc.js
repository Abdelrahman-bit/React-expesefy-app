import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1> some Info </h1>
        <p> there are some information about React, this info comes from: {props.info}</p>
    </div>
);

const requireAuthintication = (InfoComponent) => {
    return (props) => (
        <div>
            {props.isAuthinticated? <InfoComponent {...props}/>: <p> loge in to access this info </p> }
        </div>
    );
};

const AuthInfo = requireAuthintication(Info)


ReactDom.render(<AuthInfo isAuthinticated={false} info="component props"/>, document.querySelector('#root'));