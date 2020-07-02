<template>
    <div class="row">
        <div class="col-sm-4">
            <h4>Address Finder</h4>
            <address-finder :address.sync="address" :options="options" class="address-finder" type="Maps9" @updated="addressChanged"></address-finder>
        </div>
    </div>
</template>

<script>
import AddressFinder from '@/components/address-finders';

export default {
    name:'AddressFinderExample',
    components: {
        AddressFinder,
    },
    data() {
        return {
            address: {},
            options: {
                country: 'gb',
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

<style lang="scss" scoped>


</style>