import axios from "axios";
import { useEffect, useState } from "react"



const useFetch = (url) => {
    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(url);
            setSeller(res.data);

            const result = await axios.get(url);
            setProduct(result.data);
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

            const result = await axios.get(url);
            setProduct(result.data);
            } catch {
               console.log("error!"); 
            }
    };

    return {seller, product, reFetch}
}

export default useFetch;