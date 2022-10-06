import './App.css';
import LandingPage from './pages/LandingPage.js';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage.js';
import CreatePage from './pages/CreatePage.js';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/create" element={<CreatePage/>}/>
          <Route exact path="/events" element={<EventsPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
