export const signalService = {
    getSignals: getSignals
};

async function getSignals(id) {
    try {
        let signals = [{
            id: 1,
            trader_id: 0,
            name: 'cardano',
            entryPrice: 1.23,
            description: 'Short Term Hold',
            targets: [
                {price: 1.25, acheived: false},
                {price: 1.26, acheived: false},
                {price: 1.27, acheived: false}
            ],
            paid: false
        }, {
            id: 2,
            trader_id: 0,
            name: 'bitcoin',
            entryPrice: 45000,
            description: 'Long Term Hold',
            targets: [
                {price: 46000, acheived: true},
                {price: 47700, acheived: false},
                {price: 50000, acheived: false}
            ],
            paid: true
        },{
            id: 3,
            trader_id: 0,
            name: 'ethereum',
            entryPrice: 45000,
            description: 'Long Term Hold',
            targets: [
                {price: 46000, acheived: true},
                {price: 47700, acheived: false},
                {price: 50000, acheived: false}
            ],
            paid: true
        }
    ];
        return signals.filter(signal => signal.trader_id === id);
    } catch (error) {
        console.log(error);
    }
}