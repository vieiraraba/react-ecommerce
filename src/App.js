import './App.css';
import Product from './components/Product/Product'
import {products} from './data/products'

function App() {
console.log(products);
  return (
    <>
    <h1>Keeanu Reeves</h1>
    {products.map((item, index) => {
      return <Product key={index}/>
    })}
    <Product/>
    </>
  );
}

export default App;