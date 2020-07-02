<template>
    <component :is="component" :address="address" :options="options" @updateValue="sendValue"></component>
</template>

<script>
export default {
    name: 'AddressFinder',
    props: {
        address: {
            type: Object,
            default: () => {
                return {};
            }
        },
        type:{
            type:String,
            default:'Maps9'
        },
        options: {
            type: Object
        }
    },
    data() {
        return {
            component: {
                'label':'Ben Vrackie, United Kingdom',
                'lat':56.749035,
                'lon':-3.717347,
                'country':'United Kingdom',
                'continent':'Europe',
                'source':'openstreetmap'
            }
            
        };
    },
    methods: {
        sendValue(valueObj) {
            this.$emit('updated', valueObj);
            this.$emit('update:address', valueObj);
        }
    },
    created() {
        this.component = () => import('./' + this.type + 'AddressFinder.vue');

    }
};
</script>

