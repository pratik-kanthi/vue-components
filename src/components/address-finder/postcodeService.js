import axios from 'axios';

export const getPredictionsFromPostcodeAPI = (postcode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('https://api.cab9.co/api/LocationSearch/postcodeSearch?postcode=' + postcode);
            let data = [];
            if (result.data.Addresses) {
                data = result.data.Addresses.map((address) => {
                    let summary = '';
                    address.map((item, index) => {
                        if (item) {
                            if (index !== 0) summary += ', ';
                            summary += item;
                        }
                        return item;
                    });

                    return {
                        Line1: address[0],
                        Line2: address[1],
                        Line3: address[2],
                        TownCity: address[3],
                        County: address[4],
                        PostCode: formatPostcode(postcode),
                        Country: '',
                        Latitude: result.data.Latitude,
                        Longitude: result.data.Longitude,
                        Summary: summary
                    };
                });
            }
            resolve(data);
        } catch (err) {
            return reject(err);
        }
    });
};

function formatPostcode(p) {
    const postcodeRegEx = /(^[A-Z]{1,2}[0-9]{1,2})([0-9][A-Z]{2}$)/i;
    const postcode = p.replace(postcodeRegEx, '$1 $2').toUpperCase();
    return postcode;
}
