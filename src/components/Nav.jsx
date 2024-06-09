import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Nav = () => {
  return (
    <div className='xl:px-7 px-3 py-2 w-full h-[10vh] text-zinc-200 bg-gradient-to-r from-cyan-400 to-blue-700 flex items-center justify-between'>
        <div className='xl:text-3xl text-lg font-black flex items-center'>
          <img className='w-[50px] h-[90px]  rounded-full object-cover ' src="rem.png" alt="" />
          VIPUL</div>
        <div>
            <ul className='flex gap-2 text-xs font-md xl:text-lg xl:gap-4   '>
            <AnchorLink className="anchor-link"> <li className='hover:text-zinc-100 hover:font-bold'>Home</li> </AnchorLink>
            <AnchorLink className="anchor-link" offSet={50} href="#about" > <li  className='hover:text-zinc-100 hover:font-bold'>About me</li> </AnchorLink>
            <AnchorLink className="anchor-link" offSet={50} href="#project" > <li  className='hover:text-zinc-100 hover:font-bold'>Projects</li> </AnchorLink>
            <AnchorLink className="anchor-link" offSet={50} href="#contact" >  <li className='hover:text-zinc-100 hover:font-bold' >Contact</li> </AnchorLink>

            </ul>



        </div>
        
        </div>
  )
}

export default Nav