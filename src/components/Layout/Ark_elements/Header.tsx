import React from 'react';

import HeaderList from './components/HeaderList';
import LostArkLogo from './commons/LostArkLogo';

const ArkHeader = () => {
  return (
    <header className="flex justify-center h-[64px] items-center border-b-[1px] w-full z-10 relative bg-white dark:bg-[#121212]">
      <nav className="flex gap-4  justify-between w-[1200px] items-center h-full ">
        <LostArkLogo />
        <HeaderList />
      </nav>
    </header>
  );
};

export default ArkHeader;
