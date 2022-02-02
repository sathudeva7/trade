import axios from 'axios';

export const profileService = {
    getProfile: getProfile
};

async function getProfile(accountNumber) {
    console.log('accountNumber',accountNumber)
    try {
        return await axios.get(`http://localhost:5000/api/trader/getProfile/${accountNumber}`)
        .then((response) => {
            console.log(response)
           return response.data;
        })
    } catch (error) {
        console.log(error);
    }
}