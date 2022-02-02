import axios from 'axios';

export const signalService = {
    getSignals: getSignals,
    searchSignals: searchSignals,
    postSignals: postSignals
};

async function getSignals(id) {
    try {
    //     let signals = [{
    //         id: 1,
    //         trader_id: 0,
    //         name: 'cardano',
    //         entryPrice: 1.23,
    //         description: 'Short Term Hold',
    //         targets: [
    //             {price: 1.25, acheived: false},
    //             {price: 1.26, acheived: false},
    //             {price: 1.27, acheived: false}
    //         ],
    //         paid: false
    //     }, {
    //         id: 2,
    //         trader_id: 0,
    //         name: 'bitcoin',
    //         entryPrice: 45000,
    //         description: 'Long Term Hold',
    //         targets: [
    //             {price: 46000, acheived: true},
    //             {price: 47700, acheived: false},
    //             {price: 50000, acheived: false}
    //         ],
    //         paid: true
    //     },{
    //         id: 3,
    //         trader_id: 0,
    //         name: 'ethereum',
    //         entryPrice: 45000,
    //         description: 'Long Term Hold',
    //         targets: [
    //             {price: 46000, acheived: true},
    //             {price: 47700, acheived: false},
    //             {price: 50000, acheived: false}
    //         ],
    //         paid: true
    //     }
    // ];

      
    return await axios.get(`http://localhost:5000/api/signal/signals/${id}`)
        .then((response) => {
            console.log(response)
           return response.data;
        })
    } catch (error) {
        console.log(error);
    }
}

async function handleResponse (response) {
    return await response;
}

async function searchSignals(coin) {
    return await fetch(`https://api.coingecko.com/api/v3/search?query=${coin}`)
        .then(res => res.json())
        .then(json => handleResponse(json))
}

async function postSignals(newSignal) {
    console.log(newSignal)
    return await axios.post(`http://localhost:5000/api/signal/create`, newSignal)
        .then((response) => {
            console.log(response)
           return response.data;
        })
}