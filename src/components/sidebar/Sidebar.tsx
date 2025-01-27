import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-grey-80 text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-32' : 'w-16'
      }`}
    >
      <nav role='navigation' className='mt-24'>
        <Button
          type='button'
          size='icon'
          className='absolute top-4 left-4 hover:bg-grey-70'
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label='Toggle Sidebar'
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span className='sr-only'>Toggle Sidebar</span>
        </Button>
        <ul className='space-y-2'>
          <li
            className='px-4 py-2 hover:bg-grey-70 cursor-pointer'
            tabIndex={0}
          >
            {isOpen ? 'Button' : 'B'}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
