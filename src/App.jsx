import React from 'react'
import Main from "./components/Main"
import Contact from "./components/Contact"
import About from './components/About'
import Projects from './components/Projects'
import Nav from "./components/Nav"
const App = () => {

  return (
    <>
  
    <div  className='w-full  '   style = {{
      height: "100%",
      width: "100%",
      backgroundImage:
      'url("https://images.unsplash.com/photo-1629196615270-9b6d717454da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
   }}>
      <Nav/>
<Main/>
<About/>
<Projects/>
<Contact/>

    </div>








</>
  )
 
}

export default App