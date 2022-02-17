
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeadNav from './Component/HeadNav';
import HomeHeader from './Component/HomeHeader';


function App() {
  return (
    <BrowserRouter>


       <div className="App">
          <HeadNav />
    </div>

    <Routes>
    <Route  element={<HomeHeader />} path='/'/>

    </Routes>


    </BrowserRouter>
 
  );
}

export default App;
