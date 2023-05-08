import {useEffect, useState} from "react";
import axios from 'axios';

const UseFetch = (endPoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': '8059ccb76fmsh050338a375e9e0ep1528ccjsncca5b7a318ca',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async ()=> {
        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log('asdfasdf');
            console.log(response.data.data);
            setData(response.data.data);
            setLoading(false);
        }catch (error) {
            setError(error);
            alert("There is an error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);

    const reFetchData = ()=> {
        setLoading(true);
        fetchData();
    }
    return {data, isLoading, error, reFetchData};
};

export default UseFetch;