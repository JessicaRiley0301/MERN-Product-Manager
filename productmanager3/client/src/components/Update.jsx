
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';

const Update = (props)  => {

    let history = useHistory();
    const { id } = useParams()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const formUpdate = (e) => {
        e.preventDefault();
        // console.log("ok");
        axios.put("http://localhost:8000/api/products/update/" + id, {
            title,
            price,
            description
        })
            .then( updatedProduct => {
                console.log(updatedProduct.data)
                history.push("/")
            })
            .catch( err => console.log(err))
    }
    return (
        <div>
            title:{JSON.stringify(title)}<br />
            price:{JSON.stringify(price)}<br />
            description:{JSON.stringify(description)}<br />
            <hr />
            <form onSubmit={formUpdate}>
                title:<input type="text" value={title} onChange={e => setTitle(e.target.value)} /><br />
                price:<input type="text" value={price} onChange={e => setPrice(e.target.value)} /><br />
                description:<input type="text" value={description} onChange={e => setDescription(e.target.value)} /><br />

                <button>submit</button>
            </form>
        </div>
    )
    }

export default Update