import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditProduct from './EditProduct'

const ProductItem = ({ product }) => {

    const id = product._id;

    //Open the edit window for edit product
    const [openEdit, setOpenEdit] = useState(false);


    //Delete Product
    const handlerDeleteProduct = async (e) => {
        e.preventDefault();

        try {

            const { data } = await axios.delete(`/api/products/delete/${id}`);
            if (data) {

                alert("Product deleted successfully!");
            }


        } catch (err) {
            alert("Product not deleted!!")
        }
    }
    return (

        <>
            <div className="filter-card" key={product._id}>
                <div className="card-header">
                    <img src={product.image} alt={product.name} />

                </div>
                <div className="card-body">
                    <Link to={`../${product.slug}`}>{product.name} <FontAwesomeIcon icon={faEye} /> </Link>
                    <span className='category'>{product.category}</span>
                    <span className="price">{product.price}kr</span>
                </div>
                <div className="card-footer account">
                    <button onClick={() => setOpenEdit(true)}><FontAwesomeIcon icon={faPencil} /> Edit</button>
                    <button onClick={(handlerDeleteProduct)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </div>
            </div>
            {openEdit && <EditProduct product={product} setOpenEdit={setOpenEdit} />}
        </>
    )
}

export default ProductItem