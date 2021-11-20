
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
                            </div>
                        )
                    })
                }
            </div>
        )
}
export default Main