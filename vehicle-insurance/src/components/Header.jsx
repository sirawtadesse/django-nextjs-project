"use client";
import Container from './Container';
import React from 'react';
import Logo from "./Logo";
import NavLinks from './NavLinks';
import Button from './Button';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';
import { navData } from '@/constants';


const MobileNavLinks = ({ children, ...props }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};

const Header = () => {
  const handleButtonClick = () => {
    // Handle button click event
    console.log('Button Clicked!');
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className='relative z-10'>
            <Logo />
          </div>

          <div className='hidden lg:flex lg:gap-10 items-center'>
            <NavLinks />
          </div>

          <div className="flex items-center gap-6">
            <h1 className="text-white text-lg font-bold">My App</h1>
            <a href="/Proposal" class="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md mt-4">Proposal</a>
            <a href="/Claim" class="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md mt-4">Claim</a>
            <a href="/Login" class="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md mt-4">LogIn</a>
            <a href="/Signup" class="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md mt-4">Register</a>
            <a href="/User" class="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md mt-4">Users</a>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outline-none"
                    aria-label='Toggle site navigation'
                  >
                    {open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -32, transition: { duration: 0.2 } } }
                          className="absolute inset-x-0 z-0 top-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className='space-y-4'>
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLinks key={_id} href={href}>
                                {title}
                              </MobileNavLinks>
                            ))}
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                          <Link href='/Login' class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Log In</Link>
                          <Link href='/signup' class="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-md mt-4">Register</Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header;