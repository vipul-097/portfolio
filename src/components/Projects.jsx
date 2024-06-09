import React from 'react'

const Projects = () => {
  return (
   <div >
     <h1 className='xl:text-3xl xl:font-semibold text-2xl font-medium  text-center mt-4 mb-3 px-7' >Projects</h1>
<div className='flex items-center justify-around px-7' id="project">
 
<div className='xl:w-[50%] w-full  mb-3 flex flex-col items-center mt-4  '>
        
        <a href="https://front-end-major-react-eoyor2zdw-vipul-sharmas-projects-21df61b1.vercel.app/">
        <img className='xl:w-[100%]  w-[100%] h-[35vh] object-cover px-5 bg-blue-200  py-3 mb-5' src="ss.png" alt="" />
        </a>
        </div>
<div className='xl:w-[35%] flex flex-col items-center justify-center  mb-3 w-[100%]'>
  <h1 className='xl:text-xl text-sm text-center  font-medium mb-3 border-b border-zinc-400'>Movies and webseries app</h1>
  
  <p className='xl:text-sm text-[10px] font-medium'>Overview: Developed a web application for browsing and
searching movies and web series.
Front-end: Utilized React.js to create dynamic and interactive
user interfaces.
State Management: Employed Redux Toolkit for efficient
state management, ensuring a seamless user experience.
Styling: Implemented responsive and modern designs using tailwind css</p>
</div>


</div>





    
</div>
  )
}

export default Projects