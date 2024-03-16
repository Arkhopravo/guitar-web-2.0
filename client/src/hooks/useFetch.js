import { useState,useEffect } from "react"
import axios from "axios"
import { makeRequest } from "../makeRequest";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

useEffect(() => {
    const fetchData = async ()=>{
      try{
        setLoading(true);
        const res = await makeRequest.get(url,{
          headers:{
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          }
        })
        setData(res.data.data);
      }catch(err){
        setError(true)
      }
      setLoading(false);
    };
    fetchData(); 
},[url]);

return {data, loading, error};
}

export default useFetch;