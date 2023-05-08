import {useState} from "react";
import axios from 'axios';

const UseFetch = async () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [isErrorR, setError] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': '8059ccb76fmsh050338a375e9e0ep1528ccjsncca5b7a318ca',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}