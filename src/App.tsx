import { Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import Cart from './pages/cart';
import NotFound from './pages/not-found';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
