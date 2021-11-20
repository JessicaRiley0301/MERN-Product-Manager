import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ViewOne = (props)  => {

    const {id} = useParams();

    const [thisProduct, setThisProduct] = useState({});

    let history = useHistory()

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setThisProduct(res.data.product);

            })
            .catch(err=> console.log(err))
            // .finally()
    }, [id])

    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        
        if (window.confirm("really?")){

            axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
                .then( res => {
                    console.log(res.data);
                    // remove from DOM after success

                    history.push("/")
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div>
            <h1> test</h1>
            <p>{thisProduct.title}</p>
            <p>{thisProduct.price}</p>
            <p>{thisProduct.description}</p>
            <button onClick={() => deleteProduct(thisProduct._id)}>delete</button>
        </div>
    )
}


export default ViewOne