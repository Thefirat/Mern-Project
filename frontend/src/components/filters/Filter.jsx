import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import axios from 'axios'


const Filter = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
            //Get products from database
          const result = await axios.get("/api/products");
          console.log(result.data);
          setProducts(result.data);

            //Get category from db
          const res = await axios.get("/api/category");
          console.log(res.data);
          setCategory(res.data);
      }
  
      fetchData();
  }, []);

    const filterResult = (catItem) => {
        const catResult = products.filter((curCat) => {
            return curCat.category === catItem;
        });
        setProducts(catResult);
    }
  
    //Search function for category
    const keys = ["name", "seller"];
  
    const search = () => {
      return products.filter((item) => keys.some((key) => item[key]?.toLowerCase().includes(query)))
    };

    const handleReset = async (e) => {
        e.preventDefault();

        const res = await axios.get("/api/category");
        console.log(res.data);
        setCategory(res.data);

    }

    return (
        <div className='filter-row'>
            <div className="filter-col">
                <div className="filter-group">
                    <button onClick={handleReset}>All</button>
                    {category.map((cat) => (
                            <button onClick={() => filterResult(cat.name) }>{cat.name}</button>
                    ))}
        
                </div>

                <div className="filter-group">
                    <input type="search" placeholder='Search...'  onChange={(e) => setQuery(e.target.value)}/>
                </div>
            </div>
            <div className="filter-col">
                <FilterProduct products={search(FilterProduct)} />
            </div>
        </div>
    )
}

export default Filter