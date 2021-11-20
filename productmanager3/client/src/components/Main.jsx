
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {

    const [products, setProducts] = useState([])

    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
        .then( res => {
            console.log(res.data.allTheProducts);
            setProducts(res.data.allTheProducts)
        })
        .catch ( err => console.log (err))
    }, [])

    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        
        if (window.confirm("really?")){

            axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
                .then( res => {
                    console.log(res.data);
                    // remove from DOM after success
    
                    setProducts( products.filter( note => note._id !== deleteId))
                })
                .catch(err => console.log(err))
        }

    }

        return (
            <div>
                <h3>all the products:</h3>
                {/* {JSON.stringify(notes)} */}
                {
                    products.map((product, i) => {
                        return (
                            <div key={product._id}>
                                <Link to={"/products/" + product._id}>
                                    <p>
                                        title: {product.title} 
                                    </p>
                                </Link>
                                <Link to={"/products/update/" + product._id}> update </Link>
                                <button onClick={() => deleteProduct(product._id)}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
}
export default Main