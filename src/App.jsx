import React from 'react'
import Main from "./components/Main"
import Contact from "./components/Contact"
import About from './components/About'
import Projects from './components/Projects'
import Nav from "./components/Nav"
const App = () => {

  return (
    <>
  
    <div className='container mx-auto bg-gradient-to-r from-blue-100 to-blue-200'>
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