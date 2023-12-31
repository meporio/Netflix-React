
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { action,originals } from './urls';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={action} title="Netflix Originals"/>
     <RowPost url= {originals} title="Action" isSmall/>
    </div>
  );
}

export default App;
