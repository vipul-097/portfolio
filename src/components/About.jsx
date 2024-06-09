import React from 'react'

const About = () => {
  return (
    <div className='about w-full xl:h-[38vh] ' id="about" >
    <h1 className='w-full text-2xl font-medium  xl:text-3xl xl:font-semibold text-center mt-4 mb-3 xl:mb-4 xl:mt-6' >About me</h1>
<div className=' xl:flex xl:px-7   ' id="about">

    <div className='text-2xl text-black flex items-center flex-col p-3 px-8 xl:w-[50%]  '>

<p className='text-xs  xl:text-lg '>A full-stack developer using MERN is responsible for the entire software development lifecycle of web applications using the MERN technology stack. Their role includes both frontend and backend development, ensuring seamless performance and optimal user experience.</p>
</div>
      <div className='flex gap-2 mt-4  text-center xl:w-[50%] items-center ' >

      <div className='left w-[50%]  flex flex-col items-center justify-center  border-zinc-500 border-r-[3px]'> 

<h1 className='text-xl xl:text-lg font-bold  mb-2  bg-gradient-to-r from-green-500 to-blue-600 inline-block text-transparent bg-clip-text'>1+</h1>
<h2 className='xl:text-lg '>years of experience </h2>
</div>
<div className='right  w-[50%]  flex flex-col items-center' >
<h1 className='text-xl xl:text-lg font-bold  mb-2  bg-gradient-to-r from-green-500 to-blue-600 inline-block text-transparent bg-clip-text '>10+</h1>
<h2 className='xl:text-lg '>Projects completed</h2> 
</div>

      </div>



      
    </div>
    </div>
  )
}

export default About