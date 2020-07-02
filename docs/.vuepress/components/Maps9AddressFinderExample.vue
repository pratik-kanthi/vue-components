<template>
    <div>
        <h5>Search an Address</h5>
        <address-finder :address.sync="address" :options="options" class="address-finder" type="Maps9" @updated="addressChanged"></address-finder>
    </div>
</template>

<script>
export default {
    name: 'Maps9AddressFinderExample',
    data() {
        return {
            address: {},
            options: {
                country: 'gb',
            },
            newAddress:{}
        };
    },
    methods: {
        addressChanged(data) {
            this.newAddress = data;            
        }
    }
};
</script>

