import React from "react";
import './AppWrapper.css';

const AppWrap = (Component, idName, ClassNames, Tag="div") => function HOC() {

    return (
    <Tag
        id={idName}
        className={`app__container ${ClassNames}`}
    >
        <div
            className="app__wrapper app__flex"
        >
            <Component />
        </div>
    </Tag>);
};

export default AppWrap;