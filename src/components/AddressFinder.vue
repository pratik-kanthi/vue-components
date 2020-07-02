<template>
    <div class="google-address" v-click-outside="closeAddressList">
        <input type="text" v-debounce="300" v-model.lazy="searchTxt" class="google-address-text" @change="searchChanged" autocomplete="no" placeholder="Start typing to search..." />
        <div ref="mapDiv"></div>
        <ul class="places-result" v-if="!addressSelected && predictions.length > 0">
            <li v-for="(_pred,key) in predictions" :key="key">
                <a v-text="_pred.description" @click="setAddress(_pred)"></a>
            </li>
        </ul>
    </div>
</template>

<script>
require('../directives/v-debounce');
require('../directives/v-click-outside');
export default {
    name: 'AddressFinder',
    props: {
        address: {
            type: Object,
            default: () => {
                return {};
            }
        },
        google: {
            type: Object,
            required: true
        },
        options: {
            type: Object
        }
    },
    data() {
        return {
            searchTxt: '',
            addressSelected: false,
            addressObj: this.address,
            autocomplete: null,
            predictions: []
        };
    },
    methods: {
        closeAddressList() {
            this.predictions = [];
        },
        setAddress(pred) {
            debugger;
            console.log(pred);
            this.addressObj = {};
            new this.google.maps.places.PlacesService(this.$refs.mapDiv).getDetails({
                placeId: pred.place_id,
                fields: ['address_component','geometry','formatted_address']
            }, (place) => {
                this.addressSelected = true;
                this.searchTxt = place.formatted_address;
                let street_number = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('street_number') !== -1 || ac.types.indexOf('premise') !== -1;
                });
                let street_route = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('route') !== -1;
                });
                this.addressObj.Line1 = ((street_number.length) ? street_number[0].long_name : '') + ' ' + ((street_route.length) ? street_route[0].long_name : '');

                let area = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('locality') !== -1 || ac.types.indexOf('neighborhood') !== -1;
                });
                this.addressObj.Line2 = (area.length) ? area[0].long_name : null;

                let townCity = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('postal_town') !== -1;
                });
                this.addressObj.TownCity = (townCity.length) ? townCity[0].long_name : null;

                let county = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('administrative_area_level_2') !== -1;
                });
                this.addressObj.County = (county.length) ? county[0].long_name : null;

                let postcode = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('postal_code') !== -1;
                });
                this.addressObj.PostCode = (postcode.length) ? postcode[0].long_name : null;

                let country = place.address_components.filter(function (ac) {
                    return ac.types.indexOf('country') !== -1;
                });
                this.addressObj.Country = (country.length) ? country[0].long_name : null;

                this.addressObj.Latitude = place.geometry && place.geometry.location ? place.geometry.location.lat() : null;
                this.addressObj.Longitude = place.geometry && place.geometry.location ? place.geometry.location.lng() : null;
                this.$emit('updated', this.addressObj);
                this.$emit('update:address', this.addressObj);
            });
        },
        searchChanged() {
            if (this.searchTxt.length >= 3) {
                debugger;
                console.log(this.searchTxt);
                new this.google.maps.places.AutocompleteService().getPlacePredictions({
                    input: this.searchTxt,
                    ...this.options
                }, (preds) => {
                    this.predictions = [];
                    if (preds) {
                        this.addressSelected = false;
                        this.predictions = preds;
                    }
                });
            } else {
                this.predictions = [];
            }
        }
    }
};
</script>

