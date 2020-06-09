<template>
    <div>
        <h1>Google Address Finder</h1>
        <address-finder :address.sync="address" :google="google" :options="options" class="address-finder"></address-finder>
    </div>
</template>

<script>
import AddressFinder from '@/components/AddressFinder';

export default {
    name:'AddressFinderExample',
    components: {
        AddressFinder,
    },
    data() {
        return {
            google: {},
            address: {},
            options: {
                componentRestrictions: {
                    country: 'gb'
                }
            }
        };
    },
    async created() {
        this.google = await this.$gmapApiPromiseLazy();
    }
};
</script>

<style lang="scss" scoped>


</style>