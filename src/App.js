
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Products from './pages/Products';
import ProductPage from "./pages/ProductPage"
import About from "./pages/About"
import CategoriesPage from './pages/CategoriesPage';
import useUIContext from './UIContext';
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:categoryName/:categoryType" element={<Products/>}/>
        <Route path="/:categoryName" element={<CategoriesPage/>}/>
        <Route path="/:categoryName/:categoryType/:productId" element={<ProductPage/>}/>
        <Route path="/despre-noi" element={<About/>}/>

      </Routes>
      <Footer className="footer-class"/>
    </div>
    </Router>
  );
}

export default App;
  