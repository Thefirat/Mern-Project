import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SellFilter from './SellFilter.jsx';



const SellFilters = () => {

  const [seller, setSeller] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {

        const result = await axios.get("/api/users/all");
        console.log(result.data);
        setSeller(result.data);
    }

    fetchData();
}, []);

  //Search 
  const keys = ["name", "email", "address"];

  const search = () => {
    return seller.filter((item) => keys.some((key) => item[key]?.toLowerCase().includes(query)))
  };

  return (
    <div className='sell-fill-row'>
      <div className="sell-fill-col">
        <input type="search" placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />
        
      </div>
      <div className="sell-fill-col">
          <SellFilter seller={search(SellFilter)} />
      </div>
    </div>
  )
}

export default SellFilters