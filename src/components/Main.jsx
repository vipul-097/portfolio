import React from 'react'

const Card = () => {
  return (
    <div className='w-[100%] xl:h-[82vh] xl:flex flex-row-reverse items-center justify-center  mb-5 px-7  ' >
<div className='flex items-center justify-center h-[260px] w-[100%] mt-3 xl:w-[440px] xl:bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-green-500 hover:to-purple-500 xl:h-[440px] p-[2px]  rounded-full  '   >
<img className='rounded-full  mb-4 mt-4   w-[260px] h-[260px] xl:w-[100%] xl:h-[100%]  object-cover   ' src="vip.png" alt="" />
</div>
<div className='w-full flex items-center justify-center  flex-col  '>
<h1 className=' text-3xl  xl:font-medium  font-bold bg-gradient red xl:mb-5 mb-2 xl:mb-2   '> <span className='xl:text-5xl   bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text xl:mb-2 '> Hello I'm Vipul Sharma </span>  <br />full stack developer </h1>
<p className=' xl:font-normal  xl:text-base text-xs mb-4 text-left xl:mb-6'>As a MERN stack developer,I crafted dynamic web applications.My focus <br /> is on creating responsive ,efficient user experiences. </p>
<div>
<button className='px-4 py-3 xl:px-6 xl:py-4 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500  text-white rounded-full mr-3 xl:mr-5 hover:bg-blue-700'>Connect with me</button>
 <a href="resume.pdf.pdf" download><button className='px-4 py-3 xl:px-6 xl:py-4 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500  text-white rounded-full mr-2 hover:bg-blue-700'> My resume</button></a>

</div>

</div>

    </div>
  )
}

export default Card