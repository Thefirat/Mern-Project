import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const SellerInfo = () => {

    const [seller, setSeller] = useState([]);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`/api/users/user/${id}`);
                console.log(result.data);
                setSeller(result.data);
            } catch (err) {
                console.log("error!!!");
            }
        }
        fetchData();
    }, [id]);



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
                        <span className='follow'>Follow</span>
                    </div>
                </div>

            </div>
            <div className="seller-col">
                <h2 className='seller-title'>All products of the Seller {seller.name} </h2>
                <div className="seller-products">
                    <div className="filter-cards">
                        <div className="filter-card">
                            <div className="card-header">
                                <img src="../assets/images/products/macbook1.jpg" alt="" />
                            </div>
                            <div className="card-body">
                                <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                <span className='category'>Computer</span>
                                <span className="price">12 000kr</span>
                            </div>
                            <div className="card-footer">
                                <button>Add to Bag</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="filter-pagination">
                        <ul>
                            <li><Link to="#">Prev</Link></li>
                            <li className='pagi-active'><Link to="#">1</Link></li>
                            <li><Link to="#">Next</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SellerInfo