import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const ViewOne = (props)  => {

    const {id} = useParams();

    const [thisProduct, setThisProduct] = useState({});

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setThisProduct(res.data.product);
            })
            .catch(err=> console.log(err))
            // .finally()
    }, [id])

    return (
        <div>
            <h1> test</h1>
            <p>{thisProduct.title}</p>
        </div>
    )
}


export default ViewOne