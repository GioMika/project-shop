
import AppRoutes from './components/Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from './features/categories/categoriesSlice';
import { getProducts } from './features/products/productsSlice';
import UserForm from './components/User/UserForm';

function App() {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getCategories());
  dispatch(getProducts());
}, [dispatch])


  return (
    <div className='app'>
      <Header />
      <UserForm/>
      <div className='container'>
        <Sidebar />
        <AppRoutes />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
