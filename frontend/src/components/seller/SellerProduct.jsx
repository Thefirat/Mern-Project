import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const SellerProduct = ({ product }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 1;
    const pagesVisited = pageNumber * productPerPage;

    const displayProduct = product.slice(pagesVisited, pagesVisited + productPerPage).map((product) => (
        <div className="filter-card">
            <div className="card-header">
                <img src="../assets/images/products/macbook1.jpg" alt={product.name} />
            </div>
            <div className="card-body">
                <Link to={`../${product.slug}`}>{product.name}<FontAwesomeIcon icon={faEye} /> </Link>
                <span className='category'>{product.category}</span>
                <span className="price">{product.price}kr</span>
            </div>
            <div className="card-footer">
                <button>Add to Bag</button>
            </div>
        </div>
    ));


    const pageCount = Math.ceil(product.length / productPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }


    return (
        <>
            <div className="filter-cards">
                {displayProduct}
            </div>

            <ReactPaginate className="filter-pagination"
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                pageClassName={"pagi-item"}
                pageLinkClassName={"pagi-link"}
                activeClassName={"pagi-active"}
                activeLinkClassName={"linkPagi"}
                previousClassName={"pagi-item"}
                previousLinkClassName={"pagi-link"}
                nextClassName={"pagi-item"}
                nextLinkClassName={"pagi-link"}
                breakClassName={"pagi-item"}
                breakLinkClassName={"pagi-link"}
                disabledClassName={"disabledPagi"}

            />

        </>
    )
}

export default SellerProduct