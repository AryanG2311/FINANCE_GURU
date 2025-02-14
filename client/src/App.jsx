import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Newspage from './webpages/Newspage'
import LandingPage from './webpages/Landingpage'
import LoginSignup from './webpages/Loginsignup'
import Chatbot from './webpages/Chatbot'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

export default function App() {
  const [count, setCount] = useState(0)

  return (
   <>
         <BrowserRouter>
         <Routes>

  <Route path='/News' element ={<Newspage/>}/>
    <Route path='/' element = {<LandingPage/>}/> 
    <Route path='/login' element ={<LoginSignup/>}/>
<Route path='/chatbot' element = {<Chatbot/>}/>


  </Routes>
  </BrowserRouter>
</>
   
  )
}







