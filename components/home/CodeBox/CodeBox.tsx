// @ts-nocheck
'use client';

import React, { useState } from 'react';
import Draggable from 'react-draggable';

const CodeBox = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [currentPage, setCurrentPage] = useState('index.js');
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);

  const handleCloseClick = () => {
    setIsClosed(true);
  };

  const handleTerminalClick = () => {
    setIsTerminalActive(true);
  };

  const handleTerminalInputChange = (event) => {
    setTerminalInput(event.target.value);
  };

  const handleRunCommand = () => {
    let output = '';
    const history = [...terminalHistory];

    if (terminalInput === 'node index.js') {
      output = 'const details = {\n  name: "MockOS",\n  age: Under Construction\n};';
    } else if (terminalInput === 'ls') {
      output = 'Documents Videos Desktop';
    } else if (terminalInput === 'sudo apt install python') {
      output = 'Root directory not configured, kindly contact maintainer.';
    } else {
      output = 'Command not recognized';
    }

    history.push({ input: terminalInput, output });
    setTerminalHistory(history);
    setTerminalInput('');
  };

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  if (isClosed) {
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
    cursor: isTerminalActive ? 'text' : 'default',
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
    <div className="h-screen flex justify-center items-center relative">
      <Draggable handle=".handle-drag">
        <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative" style={codeEditorStyles}>
          <div
            className="handle-drag cursor-move bg-gray-900 px-3 py-2"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center' }}
          >
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full cursor-pointer" onClick={handleCloseClick}></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div
                  onClick={() => changePage('index.js')}
                  style={{
                    backgroundColor: currentPage === 'index.js' ? 'rgb(66, 66, 66)' : 'transparent',
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
                  onClick={() => changePage('aboutme.txt')}
                  style={{
                    backgroundColor: currentPage === 'aboutme.txt' ? 'rgb(66, 66, 66)' : 'transparent',
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
            {currentPage === 'index.js' && (
              <div>
                <pre>
                  <code>
                    const details = &#123;
                    <br />
                    &nbsp;name: &apos;MockOS&apos;,
                    &nbsp;age: &apos;Under Construction&apos;
                    <br />
                    &#125;
                  </code>
                </pre>

                <div className="absolute bottom-0 w-full" style={terminalStyles} onClick={handleTerminalClick}>
                  <div style={terminalContainerStyles}>
                    {terminalHistory.map((item, index) => (
                      <div key={index}>
                        <div className="text-green-600">
                          {isTerminalActive ? 'arnab@portfolio ~ ' : ''}
                          {isTerminalActive ? '$' : ''}
                          &nbsp;
                          <span className="text-white">{item.input}</span>
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
                          value={terminalInput}
                          onChange={handleTerminalInputChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleRunCommand();
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
            {currentPage === 'aboutme.txt' && (
              <div>
                <p>Arnab this side.</p>
                <p>How are you all!!!</p>
                <hr />
                <p>We are doing great</p>
                <p>Excited to contribute to Hacktoberfest.</p>
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default CodeBox;
