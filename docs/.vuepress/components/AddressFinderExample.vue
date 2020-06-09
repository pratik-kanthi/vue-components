<template>
    <div>
        <h4 class="initials">Search an Address</h4>
        <AddressFinder :address.sync="address" :google="google" :options="options"></AddressFinder>
    </div>
</template>

<script>
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps';
    import AddressFinder from '@/components/AddressFinder';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDLmAV6TLE15qpQH_9UdhwxR0w0LF-Elow',
            libraries: 'places'
        },
        installComponents: false
    });
    export default {
        name: "AddressFinderExample",
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
    }
</script>

<style>

</style>
