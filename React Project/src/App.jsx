import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br />
      <div className='div1'>

        <h1 className='main-1'>Learn to Code</h1>
      <p className='p1'>With the Worlds largest Web developer sites.</p>

      <input type="text"placeholder='Search our tutorial, e.g HTML' className='search1' />
      <p className='p2'><b>Not Sure Where To Begin?</b></p>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className='div2'>
        <br />
      <h1 className='main2-1'>HTML</h1>   
      <p className='p3-1'><b>The language for building webpages</b></p>
     
    <ul>
      <br />
      <li>
      <span className='sp-1'>learn HTML</span>
      </li>
     <br /><br />
     <li> <span className='sp-2'>video tutorials</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>HTML Refrence </span></li>
    <br /><br />
     <li> <span className='sp-4'>Get Certified</span></li>
     <br /><br /><br />
    </ul>
   </div>





   
      <div className='div3'>
        <br />
      <h1 className='main2-2'>CSS</h1>   
      <p className='p3-2'><b>The language for styling web pages</b></p>
     
    <ul>
      <br />
      <li>
      <span className='sp-1'>learn CSS</span>
      </li>
     <br /><br />
     <li> <span className='sp-5'>CSS Reference</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>Get Certified </span></li>
    <br /><br /><br />
    </ul>
   </div>



      <div className='div4'>
        <br />
      <h1 className='main2-3'>JavaScript</h1>   
      <p className='p3-3'><b>The language for programming web pages</b></p>
     
    <ul>
      <br />
      <li>
      <span className='sp-1'>learn Javascript</span>
      </li>
     <br /><br />
     <li> <span className='sp-2'>Javascript Reference</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>Get Certifeid </span></li>
    <br /><br /><br />
    </ul>
   </div>





      <div className='div5'>
        <br />
      <h1 className='main2-4'>Python</h1>   
      <p className='p3-4'><b>A popular programming language</b></p>
     
    <ul>
      <br />
     <br /><br />
     <li> <span className='sp-2'>Python Reference</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>HTML Refrence </span></li>
    <br /><br />
     <li> <span className='sp-4'>Get Certified</span></li>
     <br /><br /><br />
    </ul>
   </div>



      <div className='div6'>
        <br />
      <h1 className='main2-5'>SQL</h1>   
      <p className='p3-5'><b>A language for accessing databases</b></p>
     
    <ul>
      <br />
     <br /><br />
     <li> <span className='sp-2'>Learn SQL</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>SQL Refrence </span></li>
    <br /><br />
     <li> <span className='sp-4'>Get Certified</span></li>
     <br /><br /><br />
    </ul>
   </div>









   <div class="container">
        <div class="card" id="php">
            <h2>PHP</h2>
            <p>A web server programming language</p>
            <button>Learn PHP</button>
        </div>
        <div class="card" id="jquery">
            <h2>jQuery</h2>
            <p>A JS library for developing web pages</p>
            <button>Learn jQuery</button>
        </div>
        <div class="card" id="java">
            <h2>Java</h2>
            <p>A programming language</p>
            <button>Learn Java</button>
        </div>
        <div class="card" id="cpp">
            <h2>C++</h2>
            <p>A programming language</p>
            <button>Learn C++</button>
        </div>
        <div class="card" id="w3css">
            <h2>W3.CSS</h2>
            <p>A CSS framework for faster and better responsive web pages</p>
            <button>Learn W3.CSS</button>
        </div>
        <div class="card" id="bootstrap">
            <h2>Bootstrap</h2>
            <p>A CSS framework for designing better web pages</p>
            <button>Learn Bootstrap</button>
        </div>
    </div>



<button className='main-btn'>Search</button>





 


<img src="./assets.lynx-in-space.webp" alt="" />





  
    </>
    
  )
}

export default App
