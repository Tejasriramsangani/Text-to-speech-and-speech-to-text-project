 import React from 'react';
 import Navbar from './component/Navbar';
 import Tts from './component/Tts';
 import Stt from './component/Stt';
 import Home from './component/Home.js';
 import Contact from './component/Contact.js';
 import About from './component/About.js';
import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import LoginPage from './component/LoginPage.jsx'
import Sign from './component/Sign .js'
import Ourteam from './component/Ourteam.js'
import Footer from './component/Footer.js'

function App() {
  const user = localStorage.getItem('token');

  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {user && <Route path='/' exact element={<Home/>}></Route>}

    <Route path='/'element={<Home/>} />
      <Route path='/Stt'element={<Stt/>} />
      <Route path='/Tts'element={<Tts/>} />
      <Route path='/Contact'element={<Contact/>} />
      <Route path='/About'element={<About/>} />
      <Route path='/Sign' exact element={<Sign />}></Route>
      <Route path='/LoginPage' exact element={<LoginPage />}></Route>
      <Route path='/Ourteam' element={<Ourteam/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/' exact element={<Navigate replace to='/login'/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
 
  
 }
 export default App;