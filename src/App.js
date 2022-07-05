import './App.css';
import Product from './components/Product/Product'
import {products} from './data/products'

function App() {
  return (
    <>
    <h1>Keeanu Reeves</h1>
    {products.map((item, index) => {
      return <Product key={index} title={item.title} price={item.price} amount={item.amount} description={item.description} image={item.image}/>
    })}
    </>
  );
}

export default App;