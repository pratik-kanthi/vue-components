<template>
    <div>
        <h5>Search an Address</h5>
        <address-finder :address.sync="address" :options="options" class="address-finder" type="Google" @updated="addressChanged"></address-finder>
    </div>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_KEY,
        libraries: 'places'
    },
    installComponents: false
});
export default {
    name: 'GoogleAddressFinderExample',
    data() {
        return {
            address: {},
            options: {
                componentRestrictions: {
                    country: 'gb',
                    
                }
            },
            newAddress:{}
        };
    },
    methods: {
        addressChanged(data) {
            this.newAddress = data;            
        }
    },
    async created() {
        this.options.google = await this.$gmapApiPromiseLazy();
    }
};
</script>

