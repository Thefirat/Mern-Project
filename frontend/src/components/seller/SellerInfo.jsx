
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'
import SellerProduct from './SellerProduct'


const SellerInfo = () => {

    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            try {

                //Get user in Single seller page
                const result = await axios.get(`/api/users/user/${id}`);
                console.log(result.data);
                setSeller(result.data);


                //get Products created by user
                const res = await axios.get(`/api/products/seller/${id}`);
                console.log(res.data);
                setProduct(res.data);



            } catch (err) {
                console.log("error!!!");
            }
        }
        fetchData();
    }, [id]);


    //Follow users 

    const handlerFollow = () => {
        
    }


    return (
        <div className='seller-row'>
            <div className="seller-col">
                <div className="seller-info">
                    <div className="seller-header">
                        <img src="../assets/images/sellers/js.png" alt="" />
                    </div>
                    <div className="seller-body">
                        <span>{seller.name}</span>
                        <span>{seller.email}</span>
                        <span>{seller.address}</span>
                        <span>{seller.phone}</span>

                    </div>
                    <div className="seller-footer">
                        <span onClick={handlerFollow} className='follow'>Follow</span>
                    </div>
                </div>

            </div>
            <div className="seller-col">
                <h2 className='seller-title'>All products of the Seller {seller.name} </h2>
                <div className="seller-products">
                    <SellerProduct product={product} />
                </div>
            </div>

        </div >
    )
}

export default SellerInfo