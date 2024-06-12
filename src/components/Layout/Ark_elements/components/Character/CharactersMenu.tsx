'use client';
import ItemsPage from '@/app/(myProject)/LostArk/character/[Id]/items/page';
import OthersPage from '@/app/(myProject)/LostArk/character/[Id]/others/page';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CharactersMenu = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState('');
  return (
    <>
      <div className="w-full">
        <div className=" p-5 bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] rounded-lg">
          <ul className="flex">
            <li onClick={() => setSelectedTab('')}>능력치</li>
            <li onClick={() => setSelectedTab('items')}>착용장비</li>
            <li onClick={() => setSelectedTab('Others')}>부캐</li>
          </ul>
        </div>
        <div className=" mt-3 bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] rounded-lg">
          {selectedTab === '' && children}
          {selectedTab === 'items' && <ItemsPage />}
          {selectedTab === 'Others' && <OthersPage />}
        </div>
      </div>
    </>
  );
};

export default CharactersMenu;