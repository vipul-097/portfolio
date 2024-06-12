import React from 'react'

const Card = () => {
  return (
    <div className='w-[100vw] xl:h-[82vh]  xl:flex flex-row-reverse items-center justify-center  mb-5 px-7  '

    
    
    >
<div className='flex items-center justify-center h-[260px] w-[100%] mt-3 xl:w-[390px] xl:h-[390px]      '   >
<img className='rounded-full  mb-4 mt-4   w-[260px] h-[260px] xl:w-[100%] xl:h-[100%]  object-cover bg-gradient-to-r from-sky-300 to-zinc-200 xl:p-6 p-3  ' src="pic2.png" alt="" />
</div>
<div className='xl:w-[50%] w-[100%] mr-3 flex items-center justtify-center   flex-col text-black  '>
<h1 className='xl:w-[75%]  w-[100%] text-left  text-3xl text-black  xl:font-medium  font-bold bg-gradient red xl:mb-3 mb-2 xl:mb-2   '> <span className='xl:text-5xl   text-black  xl:mb-2 '> Hello I'm Vipul Sharma </span>  <br />full stack developer </h1>
<p className='w-[75%] mb-3'>As a MERN stack developer, I created dynamic web applications.My focus is on creating,efficient user experiences.</p>
<div>


<button className='px-4 py-3 xl:px-6 xl:py-4 text-xs bg-zinc-900 text-white rounded-full shadow-md mr-3 ' id ="contact">Connect with me</button>
 <a href="resume.pdf.pdf" download><button className='px-4 py-3 xl:px-6 xl:py-4 text-xs bg-zinc-900 text-white rounded-full shadow-md mr-3 '> My resume</button></a>
 </div>
</div>

</div>

    
  )
}

export default Card