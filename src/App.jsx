import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
