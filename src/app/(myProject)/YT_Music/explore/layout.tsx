import React from 'react';

import { Metadata } from 'next';
import Header from '@/components/Layout/elements/Youtube_Header';
import SideBar from '@/components/Layout/SideBar';
import { ThemeProvider } from '../../../../../provider/ThemeProvider';

// export const metadata: Metadata = {
//   title: 'YTMUSIC',
//   description: 'Generated by create next app',
//   icons: {
//     icon: './youtube.png',
//   },
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-full ">
      <SideBar />
      <div className="w-full  xl:w-[calc(100% - 240px)]">
        <Header>{children}</Header>
      </div>
    </div>
  );
}
