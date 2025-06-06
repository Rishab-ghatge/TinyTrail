// import React from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <nav className='bg-violet-400 h-14 px-4 text-white font-medium flex justify-between items-center'>
//       <div className='logo font-bold text-2xl md:text-3xl'>
//         <Link href={"/"}>TinyTrail</Link>
//       </div>
//       <ul className='flex justify-center gap-5'>
//         <Link href={"/"}><li className='mt-1'>Home</li></Link>
//         <Link href={"/about"}><li className='mt-1'>About</li></Link>
//         {/* <Link href={"/shorten"}><li className='mt-1'>Shorten</li></Link> */}
//         <Link href={"/contact"}><li className='mt-1'> Contact Us</li></Link>
//         <li className='flex gap-2'>
//           {/* <Link href={"/generate"}><button className='bg-violet-500 p-2 py-1 font-bold shadow-lg rounded-xl'>Try Now</button></Link> */}
//           <a  href="https://github.com/Rishab-ghatge/TinyTrail"  target="_blank" rel="noopener noreferrer"><button className='bg-violet-500 p-2 py-1 font-bold shadow-lg rounded-xl'>Github</button></a>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-violet-400 px-4 text-white font-medium'>
      <div className='max-w-7xl mx-auto flex justify-between items-center h-14'>
        <div className='logo font-bold text-2xl md:text-3xl'>
          <Link href={'/'}>TinyTrail</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        <ul className='hidden md:flex justify-center gap-5 items-center'>
          <Link href={'/'}><li className='mt-1'>Home</li></Link>
          <Link href={'/about'}><li className='mt-1'>About</li></Link>
          <Link href={'/contact'}><li className='mt-1'>Contact Us</li></Link>
          <li>
            <a href="https://github.com/Rishab-ghatge/TinyTrail" target="_blank" rel="noopener noreferrer">
              <button className='bg-violet-500 p-2 py-1 font-bold shadow-lg rounded-xl'>Github</button>
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 mt-2 px-2 pb-4'>
          <Link href={'/'}><li className='mt-1'>Home</li></Link>
          <Link href={'/about'}><li className='mt-1'>About</li></Link>
          <Link href={'/contact'}><li className='mt-1'>Contact Us</li></Link>
          <li>
            <a href="https://github.com/Rishab-ghatge/TinyTrail" target="_blank" rel="noopener noreferrer">
              <button className='bg-violet-500 p-2 py-1 font-bold shadow-lg rounded-xl w-full'>Github</button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
