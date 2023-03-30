import {useState, useEffect, useContext} from 'react'
import {Route, Routes } from 'react-router-dom' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="app">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
     
      
     {/* <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/show/:id" element={<Show />} />
       <Route path="/noshow" element={<NoShow />} />
       <Route path="/actorpage/:id" element={<ActorPage />} />
       <Route path="/search" element={<Search />} />
       <Route path="/searched/:search" element={<Searched />} />
       <Route path="/watchlist" element={<Watchlist />} />
     </Routes> */}
    
   </div>
    
  )
}

export default App
