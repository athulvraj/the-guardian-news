import './styles/app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import Sports from './pages/Sections/Sports';
import Culture from './pages/Sections/Culture';
import LifeAndStyle from './pages/Sections/LifeAndStyle';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import BusyIndicator from './components/BusyIndicator/BusyIndicator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './config/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        
          <div className="app">
            <BusyIndicator />
            <Header />

            <div className="main">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='bookmarks' element={<Bookmarks />} />
              <Route path='article' element={<Article />} />
              <Route path='sports' element={<Sports />} />
              <Route path='culture' element={<Culture />} />
              <Route path='lifeandstyle' element={<LifeAndStyle />} />
              <Route path="*" element={<Home />} />
              </Routes>
            </div>

            <Footer />
          </div>
       
      </BrowserRouter>
    </Provider>
  );
}

export default App;
