export const cryptoService = {
    getCryptoData: getCryptoData
}

async function handleResponse (response) {
    return await response;
}

async function getCryptoData(cryptoName) {
    return await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
        .then(res => res.json())
        .then(json => handleResponse(json))
    // try {
    //        return async () => {
    //           const response = await fetch(
    //             `https://api.coingecko.com/api/v3/coins/${cryptoName}`
    //           );
    //           return await response.json();
    //         }
          
    // } catch (error) {
    //     console.log(error);
    // }
}