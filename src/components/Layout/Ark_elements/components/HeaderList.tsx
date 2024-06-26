'use client';
import Link from 'next/link';
import React from 'react';
import { IHeaderMenu } from '@/types/Ark';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IoSunnySharp } from 'react-icons/io5';
import IconButton from '../../elements/IconButton';
import SearchBar from '../commons/SearchBar';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa6';

const HeaderMenu: IHeaderMenu[] = [
  { label: '홈', link: '/' },
  { label: '공지사항', link: '/notice' },
];

const HeaderList = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const mainPath = pathname === '/';
  const onClickMode = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className="flex justify-between items-center w-full h-[64px]">
      <ul className="flex ml-4">
        {HeaderMenu.map((menu, idx) => (
          <li key={idx} className="relative">
            <Link
              href={menu.link}
              className={cn(
                'h-[64px] flex items-center font-semibold text-[#9c9d9e] hover:text-[#425ad5] relative transition px-[15px] py-[10px] hover:before:contents-[""] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-[2px] before:transition-[all 200ms cubic-bezier(0.65, 0, 0.35, 1)] hover:before:bg-[#425ad5]',
                menu.link === pathname
                  ? 'text-[#425ad5] before:contents-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:ease-out before:bg-[#425ad5]'
                  : ''
              )}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <SearchBar header={true} main={mainPath} />
        <IconButton
          icon={resolvedTheme === 'light' ? <FaMoon size={20} /> : <IoSunnySharp size={20} />}
          onClickIcon={onClickMode}
        />
      </div>
    </div>
  );
};

export default HeaderList;
