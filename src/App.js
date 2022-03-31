import './styles/app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import BusyIndicator from './components/BusyIndicator/BusyIndicator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './config/store';
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BusyIndicator />
        <Header />

        <div className="main">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='bookmarks' element={<Home />} />
              <Route path='article' element={<Article />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
        
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
