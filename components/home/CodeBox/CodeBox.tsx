// @ts-nocheck
'use client';

import React, { Component } from 'react';
import Draggable from 'react-draggable';

class CodeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
      currentPage: 'index.js', // Default to index.js
      isTerminalActive: false,
      terminalInput: '',
      terminalOutput: '',
      terminalHistory: [],
    };
  }

  handleCloseClick = () => {
    this.setState({ isClosed: true });
  };

  handleTerminalClick = () => {
    this.setState({ isTerminalActive: true });
  };

  handleTerminalInputChange = (event) => {
    this.setState({ terminalInput: event.target.value });
  };

  handleRunCommand = () => {
    const { terminalInput } = this.state;
    let terminalOutput = '';
    const terminalHistory = this.state.terminalHistory.slice();

    if (terminalInput === 'node index.js') {
      terminalOutput = 'const details = {\n  name: "Arnab Roy",\n  age: 18,\n  hobby: "coding and guitar",\n};';
    } else {
      terminalOutput = 'Command not recognized';
    }

    terminalHistory.push({ input: terminalInput, output: terminalOutput });
    this.setState({ terminalOutput, terminalHistory, terminalInput: '' });
  };

  changePage = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  render() {
    if (this.state.isClosed) {
      return null;
    }

    const codeEditorStyles = {
      width: '650px',
      height: '450px',
    };

    const contentStyles = {
      paddingTop: '50px',
    };

    const terminalContainerStyles = {
      backgroundColor: '#333',
      color: 'white',
      fontFamily: 'Monaco, monospace',
      padding: '12px',
      borderRadius: '4px',
      height: '150px',
      overflowY: 'auto',
      cursor: this.state.isTerminalActive ? 'text' : 'default',
    };

    const terminalStyles = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
    };

    const inputStyles = {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      outline: 'none',
      width: '100%',
      resize: 'none',
      cursor: 'text',
    };

    return (
      <>
        <div className="h-screen flex justify-center items-center relative">
          <Draggable handle=".handle-drag">
            <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative" style={codeEditorStyles}>
              <div className="handle-drag cursor-move bg-gray-900 px-3 py-2" style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full cursor-pointer" onClick={this.handleCloseClick}></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      onClick={() => this.changePage('index.js')}
                      style={{
                        backgroundColor: this.state.currentPage === 'index.js' ? 'rgb(66, 66, 66)' : 'transparent',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        display: 'flex',
                        cursor: 'pointer',
                      }}
                    >
                      <p className="m-0" style={{ color: 'white', fontSize: '11px', alignSelf: 'center' }}>
                        index.js ×
                      </p>
                    </div>
                    <div
                      onClick={() => this.changePage('aboutme.txt')}
                      style={{
                        backgroundColor: this.state.currentPage === 'aboutme.txt' ? 'rgb(66, 66, 66)' : 'transparent',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        display: 'flex',
                        cursor: 'pointer',
                      }}
                    >
                      <p className="m-0" style={{ color: 'white', fontSize: '11px', alignSelf: 'center' }}>
                        aboutme.txt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 text-white" style={contentStyles}>
                {this.state.currentPage === 'index.js' && (
                  <div>
                    <pre>
                      <code>
                        const details = &#123;
                        <br />
                        &nbsp;name: &apos;Arnab Roy&apos;,
                        <br />
                        &nbsp;age: 18,
                        <br />
                        &nbsp;hobby: &apos;coding and guitar&apos;,
                        <br />
                        &#125;
                      </code>
                    </pre>

                    <div className="absolute bottom-0 w-full" style={terminalStyles} onClick={this.handleTerminalClick}>
                      <div style={terminalContainerStyles}>
                        {this.state.terminalHistory.map((item, index) => (
                          <div key={index}>
                            <div>
                              <div className="text-green-600">
                                {this.state.isTerminalActive ? 'arnab@portfolio ~ ' : ''}
                                {this.state.isTerminalActive ? '$' : ''}
                                &nbsp;
                                <span className="text-white">{item.input}</span>
                              </div>
                            </div>
                            <div>{item.output}</div>
                          </div>
                        ))}
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <p className="text-green-600">arnab@portfolio ~ $</p>
                          &nbsp;
                          <div>
                            <input
                              style={inputStyles}
                              value={this.state.terminalInput}
                              onChange={this.handleTerminalInputChange}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  this.handleRunCommand();
                                }
                              }}
                              autoFocus
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.currentPage === 'aboutme.txt' && (
                  <div>
                    <p>Arnab this side.</p>
                    <p>How are you all!!!</p>
                  </div>
                )}
              </div>
            </div>
          </Draggable>
        </div>
      </>
    );
  }
}

export default CodeBox;
