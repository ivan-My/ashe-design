import React from 'react';
import { useLocation } from 'react-router-dom';
import './demo-preview.scss';
const DemoPreview = () => {
    const { pathname } = useLocation();
    return (React.createElement("div", { className: 'doc-demo-preview' },
        React.createElement("iframe", { src: `/demo.html#${pathname}`, frameBorder: "0" })));
};
export default DemoPreview;
