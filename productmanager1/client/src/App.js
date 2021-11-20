
import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';


function App() {

  const [products, setProducts] = useState([])

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  

  useEffect( () => {
    axios.get("http://localhost:8000/api/products")
      .then( res => {
        console.log(res.data.allTheProducts);
        setProducts(res.data.allTheProducts)
      })
      .catch ( err => console.log (err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, price, description);
    axios.post("http://localhost:8000/api/products/new", {
      title,
      price,
      description
    })
      .then(res => console.log(res.data))
      .catch( err => console.log(err))


  }

  return (
    <div className="App">
      <h1>Products</h1>
      {JSON.stringify(title)}
      <form onSubmit = {handleSubmit}>
        <p> 
          Title:
          <input type= "text" onChange={e => setTitle(e.target.value)} value={title} /> 
        </p>
        <p> 
          Price:
          <input type= "text" onChange={e => setPrice(e.target.value)} value={price} /> 
        </p>
        <p> 
          Description:
          <input type= "text" onChange={e => setDescription(e.target.value)} value={description} /> 
        </p>
        <button>Submit</button>
      </form>
      <hr />
      {
      products.map((product, i) => {
        return <li key = {product._id}> title: {product.title}, price: {product.price}, description: {product.description}</li>
      })
      }

    </div>
  );
}

export default App;
