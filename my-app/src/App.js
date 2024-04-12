
import './App.css';
import Header from './components/header/Header';
import Footer from './components/header/Footer';
import ProductList from './components/header/ProductList/ProductLisr';


function App() {
  return (
   
    <div className="App">
       <Header>
        
       </Header>
      <main className="App-header">
        
        <ProductList></ProductList>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
