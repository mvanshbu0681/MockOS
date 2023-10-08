'use client'

import React, { Component } from 'react';
import Draggable from 'react-draggable';

class DragMe extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isClosed: false,
      terminalInput: '',
      terminalOutput: '',
      terminalHistory: [],
      isCursorBlinking: false,
      isTerminalActive: false,
    };
  }

  handleCloseClick = () => {
    this.setState({ isClosed: true });
  };

  handleTerminalInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ terminalInput: event.target.value });
  };

  handleRunCommand = () => {
    const { terminalInput }: any = this.state;
    let terminalOutput = '';
    const terminalHistory = this.state.terminalHistory.slice();

    if (terminalInput === 'node index.js') {
      // Simulate running the node command
      terminalOutput = 'const details = {\n  name: "Arnab Roy",\n  age: 18,\n  hobby: "coding and guitar",\n};';
    } else {
      terminalOutput = 'Command not recognized';
    }

    terminalHistory.push({ input: terminalInput, output: terminalOutput });
    this.setState({ terminalOutput, terminalHistory, terminalInput: '' });
  };

  handleTerminalClick = () => {
    // Activate the terminal for text input
    this.setState({ isTerminalActive: true });
  };

  render() {
    if (this.state.isClosed) {
      return null; // Don't render anything if the window is closed
    }

    const codeEditorStyles = {
      width: '800px',
      height: '600px',
    };

    const terminalContainerStyles = {
      backgroundColor: '#333',
      color: 'white',
      fontFamily: 'Monaco, monospace',
      padding: '12px',
      borderRadius: '4px',
      height: '200px',
      overflowY: 'auto',
      cursor: this.state.isCursorBlinking ? 'text' : 'default',
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
      cursor: 'text', // Change the cursor to text when active
    };

    return (
      <>
        <div className="h-screen flex justify-center items-center relative">
          <Draggable handle='.handle-drag'>
            <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative" style={codeEditorStyles}>

              {/* Top Bar with controls */}
              <div className='handle-drag cursor-move bg-gray-900 px-3 py-2' style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                <div style={{ display: 'flex' }}>
                  <div
                    className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2 cursor-pointer"
                    onClick={this.handleCloseClick}
                  ></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
              </div>


              <div className="p-4 text-white">
                <pre>
                  <code>
                    const details = &#123;
                    <br />
                    &nbsp;name: 'Arnab Roy',
                    <br />
                    &nbsp;age: 18,
                    <br />
                    &nbsp;hobby: 'coding and guitar',
                    <br />
                    &#125;
                  </code>
                </pre>
              </div>
              <div className="absolute bottom-0 w-full" style={terminalStyles} onClick={this.handleTerminalClick}>
                <div style={terminalContainerStyles}>
                  {this.state.terminalHistory.map((item: any, index: any) => (
                    <div key={index}>
                      <div>
                        <div>
                          {this.state.isTerminalActive ? 'arnab@portfolio ~ % ' : ''}
                          {this.state.isTerminalActive ? '$' : ''}
                          &nbsp;
                          {item.input}
                        </div>
                      </div>
                      <div>{item.output}</div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>arnab@portfolio ~ % $</p>
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
          </Draggable>
        </div>
      </>
    );
  }
}

export default DragMe;