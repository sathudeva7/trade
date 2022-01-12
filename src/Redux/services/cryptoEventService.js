export const cryptoEventService = {
    getCryptoEvents: getCryptoEvents
};


async function getCryptoEvents() {
    

    var options = { method: 'GET',
    url: 'https://developers.coinmarketcal.com/v1/events',
    qs: { max: '10', coins: 'bitcoin' },
    headers: 
     { Accept: 'application/json',
       'Accept-Encoding': 'deflate, gzip',
       'Access-Control-Allow-Origin':'*',
       'x-api-key': 'yd4zFTpByMaVXfqvk9EBB35FaeuYDUUj9AnJotFZ' } };

    let data = await fetch(options.url, options)
    console.log('ddata', data)
    return await data.json();

    }