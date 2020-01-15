import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import io from 'socket.io-client';
import axios from 'axios';

import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const socket = io(process.env.REACT_APP_API_URL);

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      html: '',
      css: '',
      js: '',
    };
  }

  componentDidUpdate() {
    // this.runCode();
  }

  componentDidMount() {
    socket.on('text-update', (data) => {
      //    const { id } = this.state;
      //    if (data.id === id) return;
      this.setState({
        html: data.html,
        css: data.css,
        js: data.js,
      });
    });
  }

  syncUpdates = () => {
    const data = { ...this.state };

    axios
      .post(`${process.env.REACT_APP_API_URL}/update-editor`, data)
      .catch(console.error);
  };

  runCode = () => {
    const { html, css, js } = this.state;

    const { iframe } = this.refs;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    const { html, js, css } = this.state;
    const codeMirrorOptions = {
      theme: 'material',
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
      <div className="App">
        <section className="playground" style={{ width: '100%' }}>
          {/* <div className="code-editor html-code">
            <div className="editor-header">HTML</div>
            <CodeMirror
              value={html}
              options={{
                mode: "htmlmixed",
                ...codeMirrorOptions
              }}
              onBeforeChange={(editor, data, html) => {
                this.setState({ html }, () => this.syncUpdates());
              }}
            />
          </div>
          <div className="code-editor css-code">
            <div className="editor-header">CSS</div>
            <CodeMirror
              value={css}
              options={{
                mode: "css",
                ...codeMirrorOptions
              }}
              onBeforeChange={(editor, data, css) => {
                this.setState({ css }, () => this.syncUpdates());
              }}
            />
          </div> */}
          <div className="code-editor js-code" style={{ height: '100%' }}>
            <div className="editor-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js }, () => this.syncUpdates());
              }}
            />
          </div>
        </section>
        {/* <section className="result">
          <iframe title="result" className="iframe" ref="iframe" />
        </section> */}
      </div>
    );
  }
}

export default App;
