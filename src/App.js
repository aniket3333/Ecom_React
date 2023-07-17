import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/productDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/another-component" element={<ProductDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
