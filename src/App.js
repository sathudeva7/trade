import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SignalPost from './Components/SignalPost';
import Home from './Pages/Home';
import TraderProfile from './Pages/TraderProfile';
import { Routes } from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename='trade'>
        <Routes />
      </BrowserRouter>
      <Footer />      
    </div>
  );
}

export default App;
