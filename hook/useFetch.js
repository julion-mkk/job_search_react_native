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
            'X-RapidAPI-Key': '36b3f54f4cmsh7c965e68088b010p19655ejsn1a39d65b9d62',
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
            console.log(error + "asdf");
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