import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';


const Create = (props)  => {

    let history = useHistory()


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, price, description);
        axios.post("http://localhost:8000/api/products/new", {
            title,
            price,
            description
        })
            .then( res => {
                console.log(res.data)
                history.push("/")
            })
            .catch( err => console.log(err))
    
    
    }
    return (
        <div>
        <h1>Create Product</h1>
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
        
        </div>
    )
    }

export default Create