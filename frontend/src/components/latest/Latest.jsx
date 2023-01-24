import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Latest = () => {

    const [users, setUsers] = useState([]);  //Default is empty

    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setUsers(result.data);
        }

        fetchData();
    }, []);
    return (
        <div className='latest-row'>
            <div className="latest-col">
                <h2>New Products</h2>
                <div className="latest-products">
                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/macbook1.jpg" alt="" />

                        </div>
                        <div className="latest-body">
                            <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                            <span className='category'>Computer</span>
                            <span className="price">12 000kr</span>
                        </div>
                    </div>

                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/iphone14.jpg" alt="" />

                        </div>
                        <div className="latest-body">
                            <Link to="">Iphone 14 <FontAwesomeIcon icon={faEye} /></Link>
                            <span className='category'>Phone</span>
                            <span className="price">10 000kr</span>
                        </div>
                    </div>
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