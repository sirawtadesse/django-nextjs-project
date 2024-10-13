import { navData } from '@/constants'
import React, {useState} from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const NavLinks = () => {
  const [hoverIndex,setHoverIndex]=useState(null);
  return (
    <>
    {navData.map(({_id,title,href})=>(
      <Link 
      key={_id} 
      href={href} 
      className="relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base text-black transition-colors"
      onMouseEnter={()=>setHoverIndex(_id)}
      onMouseLeave={()=>setHoverIndex(null)}

      >
      <AnimatePresence>
        {hoverIndex=== _id && (
          <motion.span 
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            intial={{opacity:0}}
            animate={{opacity:1,transition :{duration:0.15}}}
            exit={{opacity:0,transition:{duration:0.15 ,delaye:0.2,}}}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 ">{title}</span>
      
      </Link>
    ))}
    
    </>
  )
}

export default NavLinks