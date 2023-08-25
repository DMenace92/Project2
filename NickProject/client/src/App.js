import './App.css';
import NavBar from './Components/NavBarFooter/NavBar'
import MainPage from './Components/MainPage'
import EventsComponent from './Components/Events/EventsComponent';
import Footer from './Components/NavBarFooter/Footer'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/events" element={<EventsComponent/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
