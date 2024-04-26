
import './App.css';
import Header from './components/header/Header';
import Footer from './components/header/Footer';
import ProductList from './components/header/ProductList/ProductLisr';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import API from './components/header/ProductList/API';

function App() {
  return (
   <Router>

    <div className="App">
       <Header></Header>
      <main className="App-header">
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/about' element={<About></About>}> </Route>
          <Route path='/ProductList' element={<ProductList></ProductList>}></Route>
          <Route path='/api' element={<API></API>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        

      </main>
      <Footer></Footer>
    </div>

   </Router>
  );
}

export default App;
