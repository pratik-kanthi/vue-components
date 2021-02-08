import axios from 'axios';

export const getPredictionsFromMaps9 = (searchTxt, options) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('https://geocode.cab9.app/api/autocomplete', {
                params: {
                    text: encodeURI(searchTxt),
                    ...options
                }
            });
            const data = result.data.map((address) => {
                return {
                    Line1: '',
                    Line2: '',
                    Line3: '',
                    TownCity: '',
                    County: '',
                    PostCode: '',
                    Country: address.country,
                    Latitude: address.lat,
                    Longitude: address.lon,
                    Summary: address.label
                };
            });
            resolve(data);
        } catch (err) {
            return reject(err);
        }
    });
};
