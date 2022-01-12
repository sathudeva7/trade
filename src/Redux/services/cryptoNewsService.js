export const cryptoNewsService = {
    getCryptoNews: getCryptoNews
};

async function handleResponse (response) {
    return await response;
}

async function getCryptoNews() {
    console.log('s')
    return await fetch('https://newsdata.io/api/1/news?apikey=pub_349808104397ea9c52096fd1ded9228410b3&category=business,technology&language=en&q=crypto%20assets%20AND%20Cryptocurrencies')
        .then(res => res.json())
        .then(json => handleResponse(json))
}