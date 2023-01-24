import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'



const ProductDetails = () => {

    const [product, setProduct] = useState([]);

    const params = useParams();    
    const {slug} = params;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                console.log(result.data);
                setProduct(result.data);
            } catch(err){
                console.log("error");
            }
        }
        fetchData();
    }, [slug]);


    return (
        <div className='product-row'>
            <div className="product-col">
                <img src={product.image} alt={product.name} />
                <Link to={`../seller/${product.sellerId}`}> <img className='seller-product' src={product.sellerImage} alt={product.seller} /></Link>
            </div>
            <div className="product-col">
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <span className="category">{product.category}</span>
                </div>
                <div className="product-info">
                    <span className="price">Price:{product.price}kr</span>
                    <span className="desc">{product.description}</span>
                </div>
                <div className="product-add">
                    <button>Add to Bag</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails