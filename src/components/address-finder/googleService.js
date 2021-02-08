export const getPredictionsFromGoogle = (searchTxt, options) => {
    return new Promise(async (resolve, reject) => {
        try {
            new options.google.maps.places.AutocompleteService().getPlacePredictions(
                {
                    input: searchTxt,
                    ...options
                },
                (result) => {
                    resolve(result);
                }
            );
        } catch (err) {
            return reject(err);
        }
    });
};

export const getAddressFromGoogle = (pred, mapDiv, options) => {
    return new Promise(async (resolve, reject) => {
        try {
            let addressObj = {};
            new options.google.maps.places.PlacesService(mapDiv).getDetails(
                {
                    placeId: pred.place_id,
                    fields: ['address_component', 'geometry', 'formatted_address']
                },
                (place) => {
                    let street_number = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('street_number') !== -1 || ac.types.indexOf('premise') !== -1;
                    });
                    let street_route = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('route') !== -1;
                    });
                    addressObj.Line1 = (street_number.length ? street_number[0].long_name : '') + ' ' + (street_route.length ? street_route[0].long_name : '');

                    let area = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('locality') !== -1 || ac.types.indexOf('neighborhood') !== -1;
                    });
                    addressObj.Line2 = area.length ? area[0].long_name : null;

                    addressObj.Line3 = '';

                    let townCity = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('postal_town') !== -1;
                    });
                    addressObj.TownCity = townCity.length ? townCity[0].long_name : null;

                    let county = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('administrative_area_level_2') !== -1;
                    });
                    addressObj.County = county.length ? county[0].long_name : null;

                    let postcode = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('postal_code') !== -1;
                    });
                    addressObj.PostCode = postcode.length ? postcode[0].long_name : null;

                    let country = place.address_components.filter(function(ac) {
                        return ac.types.indexOf('country') !== -1;
                    });
                    addressObj.Country = country.length ? country[0].long_name : null;

                    addressObj.Latitude = place.geometry && place.geometry.location ? place.geometry.location.lat() : null;
                    addressObj.Longitude = place.geometry && place.geometry.location ? place.geometry.location.lng() : null;
                    addressObj.Summary = place.formatted_address ? place.formatted_address : '';
                    resolve(addressObj);
                }
            );
        } catch (err) {
            return reject(err);
        }
    });
};
