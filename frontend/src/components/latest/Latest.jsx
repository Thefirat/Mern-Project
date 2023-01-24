import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Latest = () => {

    const [users, setUsers] = useState([]);  //Default is empty

    const [products, setProducts] = useState([]);
    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setUsers(result.data);

            const res = await axios.get("/api/products");
            console.log(res.data);
            setProducts(res.data);
        }

        fetchData();
    }, []);



    return (
        <div className='latest-row'>
            <div className="latest-col">
                <h2>New Products</h2>
                <div className="latest-products">
                    {/* Only last 3 fetch not all */}
                    {products.slice(-3).map((product) => (
                        <div className="latest-group" key={product._id}>
                            <div className="latest-header">
                                <img src={product.image} alt={product.name} />

                            </div>
                            <div className="latest-body">
                                <Link to={` /${product.slug}`}>{product.name}<FontAwesomeIcon icon={faEye} /> </Link>
                                <span className='category'>{product.category}</span>
                                <span className="price">{(product.price).toFixed(2)}kr</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="latest-col">
                <h2>We provide supports to newly registered sellers</h2>
                <div className="latest-sellers">


                    {/* Only last 6 fetch not all */}
                    {users.slice(-6).map((user) => (

                        <div className="sellers-group" key={user._id}>
                            <div className="sellers-header">
                                <img src={user.image} alt={user.name} />
                            </div>
                            <div className="sellers-body">
                                <Link to={`seller/${user._id}`}>{user.name}<FontAwesomeIcon icon={faEye} /> </Link>
                                <span className='follow'>Follow</span>
                                <span className="date">Member Since:{(user.createdAt).slice(0, 10)}</span>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Latest