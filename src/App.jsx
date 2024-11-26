import './App.css'
import Klassekart from './assets/components/Klassekart'
import Profile from './assets/components/profile';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
  
    <Routes>
      <Route path="/" element={<Klassekart />}/> 
      <Route path="/:profile" element={<Profile />} />
    </Routes>

  )
}

export default App
