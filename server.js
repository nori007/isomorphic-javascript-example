// 서버 측 시작 스크립트

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import App from './components/App';
import Html from './components/Html';

const server = express();
const port = process.env.PORT || 6806;

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', (req, res) => {
    // const title = 'Sample Application';
    // const app = ReactDOM.renderToString(<App />);
    // res.send(`
    //     <!doctype html>
    //     <html>
    //     <head>
    //         <title>${title}</title>
    //         <src script="client.js"></script>
    //     </head>
    //     <body>
    //         <div id="app">${app}</div>
    //     <body>
    //     </html>
    // `)
    const body = ReactDOM.renderToString(<App />);
    const html = ReactDOM.renderToStaticMarkup(
        <Html 
            title="My App"
            description="Isomorphic web application sample"
            body={body} 
        />
    );

    res.send(`<!doctype html>\n` + html);
});

server.listen(port, () => {
    console.log(`app is listening at http://lcoal:${port}/`);
})

