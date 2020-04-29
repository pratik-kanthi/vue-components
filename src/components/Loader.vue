<template>
    <div class="text-center" v-if="show">
        <img :src="loaderImageUrl" :style="style">
        <div class="text-muted" v-text="text"></div>
        <br class="clearfix">
    </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        text: {
            type: String
        },
        height: {
            type: Number
        },
        width: {
            type: Number
        }, 
        loaderImageUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        style() {
            let obj = {};
            if (this.height) {
                obj['height'] = this.height + 'px';
            }
            if (this.width) {
                obj['width'] = this.width + 'px';
            }
            return obj;
        }
    }
};
</script>

<style lang="scss" scoped>
    img {
        width: 200px;
        height: 200px;
    }
</style>
