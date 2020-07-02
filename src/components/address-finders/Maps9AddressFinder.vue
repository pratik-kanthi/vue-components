<template>
    <div class="maps9-address-finder address-finder" v-click-outside="closeAddressList">
        <input type="text" v-debounce="300" v-model="searchTxt" class="address-text" @input="searchChanged" autocomplete="no" placeholder="Start typing to search..." />
        <ul class="places-result" v-if="!addressSelected && predictions.length > 0">
            <li v-for="(_pred,key) in predictions" :key="key">
                <a v-text="_pred.label" @click="setAddress(_pred)"></a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

require('../../directives/v-debounce');
require('../../directives/v-click-outside');
export default {
    name: 'Maps9AddressFinder',
    props: {
        address: {
            type: Object,
            default: () => {
                return {};
            }
        },
        options: {
            type: Object
        },
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
            this.addressObj = pred;
            this.addressSelected = true;
            this.searchTxt = pred.label;
            this.$emit('updateValue', this.addressObj);
        },
        searchChanged() {
            if (this.searchTxt.length >= 3) {
                axios
                    .get('https://geocode.cab9.app/api/autocomplete',{params: this.axiosParams})
                    .then(response => {
                        this.predictions = [];
                        if (response.data) {
                            this.addressSelected = false;
                            this.predictions = response.data;
                        }
                    });
            } else {
                this.predictions = [];
            }
        }
    },
    computed: {
        axiosParams() {
            const params = {};
            params.text= encodeURI(this.searchTxt);
            if(this.options.lat)
                params.lat= this.options.lat;
            if(this.options.lon)
                params.lon= this.options.lon;
            if(this.options.country)
                params.country= this.options.country;
            return params;
        }
    },
};
</script>

