import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';

// utils
import headerItems from '../utils/headerItems';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row sm:items-center p-3 justify-between h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        {headerItems.map(item => <HeaderItem key={item.title} title={item.title} Icon={item.icon} />)}
      </div>

      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='hulu logo'
      />
    </header>
  );
}

export default Header;