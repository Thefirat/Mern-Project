import axios from "axios";
import { useEffect, useState } from "react"



const useFetch = (url) => {
    const [seller, setSeller] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(url);
            setSeller(res.data);
            } catch {
               console.log("error!"); 
            }
        };

        fetchData();
    }, [url]);

    const reFetch = async () => {
        try {
            const res = await axios.get(url);
            setSeller(res.data);
            } catch {
               console.log("error!"); 
            }
    };

    return {seller, reFetch}
}

export default useFetch;