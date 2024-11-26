import Klassekart from './klassekart.jsx'
import Profile from './Profile.jsx';
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
