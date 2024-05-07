import Home from './compon/Home/Home';
import CartContent from './compon/CartContent/CartContent';
import DataProvider from './compon/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
    )
    

}

export default App;
