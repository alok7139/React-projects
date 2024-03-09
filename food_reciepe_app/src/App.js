import {Routes , Route} from 'react-router-dom'
// import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favourite from './pages/favourite';
import Details from './pages/details';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-800 text-lg'> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favourite' element={<Favourite/>}/>
          <Route path='/reciepe-item/:id' element={<Details/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
