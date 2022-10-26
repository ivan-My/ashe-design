import './app.scss';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { routers, raws } from './docs';
import DemoPreview from './components/demo-preview/demo-preview';
const App = () => {
    return (React.createElement("div", { id: "app" },
        "headers",
        React.createElement(HashRouter, null,
            React.createElement(Link, { to: '/button' }, "button"),
            React.createElement(Link, { to: '/input' }, "input"),
            React.createElement(Link, { to: '/mask' }, "mask"),
            React.createElement(DemoPreview, null),
            React.createElement(Routes, null, routers.map((ru, index) => {
                return (React.createElement(Route, { key: index, path: `/${ru}`, element: React.createElement(ReactMarkdown, { children: raws[ru], remarkPlugins: [remarkGfm, remarkDirective], components: {
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (React.createElement(SyntaxHighlighter, { children: String(children).replace(/\n$/, ''), language: match[1], PreTag: "div", ...props })) : (React.createElement("code", { className: className, ...props }, children));
                            },
                        } }) }));
            })))));
};
export default App;
