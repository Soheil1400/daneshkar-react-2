import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': '276c89c394msh21f377e488a3ca5p17c6a0jsn1a59d5b0c9cc',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};


const TestApi = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div>
            salam
        </div>
    )
}

export default TestApi