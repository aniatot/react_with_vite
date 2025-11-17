import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <div className="body-section">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
