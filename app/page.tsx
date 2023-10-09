import React from 'react';
import Navbar from '@/components/shared/navbar/navbar';
import CodeBox from '@/components/home/CodeBox/CodeBox';
import Dock from '@/components/home/Dock/Dock';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/123/938/desktop-wallpaper-100-best-mac-macbook-pro-m1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full" style={backgroundStyle}></div>
      <Navbar />
      <CodeBox />
      <Dock />
    </div>
  );
}

export default Home;
