import { useState } from 'react';
import { adPost } from '../../config/firebase'


const Dashboard = (props) => {


    const [product , setProduct] = useState("");
    const [price , setPrice] = useState("");
    const [quantity , setQuantity] = useState("");

    const postAd = async () => {
        try{
            await adPost(product,price,quantity)
        }catch (e) {
            alert (e.message)
        }
    }

    return (
        <>
            <input
              onChange = {e => setProduct(e.target.value)}
              type="text"
              id="product"
              placeholder="Product Name"
            />
            <input
              onChange = {e => setPrice(e.target.value)}
              type="text"
              id="price"
              placeholder="Price"
            />
            <input
              onChange = {e => setQuantity(e.target.value)}
              type="text"
              id="quantity"
              placeholder="Quantity"
            />

            <button onClick = {postAd} >Post Ad</button>
        </>
    )

}

export default Dashboard