export const profileService = {
    getProfile: getProfile
};

async function getProfile() {
    try {
        let profile = {Name:'SATHU', Age:25, id:0, type: 'Trader', walletId: '0x98'};
        
        return profile;
    } catch (error) {
        console.log(error);
    }
}