import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const FilterProduct = ({ products }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const sellerPerPage = 12;
    const pagesVisited = pageNumber * sellerPerPage;

    const displaySellers = products.slice(pagesVisited, pagesVisited + sellerPerPage).map((product) => (
        <div className="filter-card" key={product._id}>
            <div className="card-header">
                <img src="./assets/images/products/macbook1.jpg" alt={product.name} />
                <Link to={`../seller/${product.sellerId}`}><img className='card-sellers' src="./assets/images/sellers/js.png" alt={product.seller} /></Link>
            </div>
            <div className="card-body">
                <Link to={`../${product.slug}`}> {product.name} <FontAwesomeIcon icon={faEye} /> </Link>
                <span className='category'>{product.category}</span>
                <span className="price">{product.price}kr</span>
            </div>
            <div className="card-footer">
                <button>Add to Bag</button>
            </div>
        </div>
    ));


    const pageCount = Math.ceil(products.length / sellerPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <>
            <div className="filter-cards">
                {displaySellers}
            </div>
            {/* Page pagination */}
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

export default FilterProduct