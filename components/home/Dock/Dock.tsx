"use client";
import React from 'react';
import { Dock } from 'react-osx-dock';

const DockMain = () => {
  return (
    <div>
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2">
        {/*<div className="bg-opacity-10 backdrop-blur rounded-2xl p-4 border border-[#ffffff25] dock-container">*/}
          <Dock itemWidth={50} magnification={1} magnifyDirection='up'>
            {['finder', 'slack', 'spotify', 'guitar-pro', 'terminal', 'trash'].map(
              (letter) => (
                <img
                  className="letter"
                  src={`${letter}.png`}
                  onClick={() => (window.location.href = "https://www.spotify.com")}
                  key={letter}
                />
              )
            )}
          </Dock>
        </div>
      </div>
    //</div>
  );
}

export default DockMain