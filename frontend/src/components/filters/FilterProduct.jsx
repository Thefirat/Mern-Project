import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import FilterProductInfo from './FilterProductInfo';


const FilterProduct = ({ products }) => {

    
    const [pageNumber, setPageNumber] = useState(0);
    const sellerPerPage = 12;
    const pagesVisited = pageNumber * sellerPerPage;


    const pageCount = Math.ceil(products.length / sellerPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <>
            <div className="filter-cards">
                {
                    products.slice(pagesVisited, pagesVisited + sellerPerPage).map((product) => (
                        <FilterProductInfo key={product._id} product={product} />
                    ))}
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