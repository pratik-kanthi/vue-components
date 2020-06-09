<template>
    <div class="progress-bar" :style="{height:height}">
        <div class="value" :style="style" ref="value"></div>
    </div>
</template>

<script>
import utils from '@/utils';

export default {
    name: 'ProgressBar',
    props: {
        value: {
            type: Number
        },
        color:{
            type:String,
            default: '#7ED321'
        },
        height:{
            type:String,
            default: '10px'
        }
    },
    computed: {
        style() {
            let obj = {};
            obj['background-color'] = utils.CommonUtils.CheckValidHex(this.color);
            obj['height'] = this.height;
            return obj;
        }
    },
    mounted () {
        setTimeout(() => {
            this.$refs.value.style.width=this.value+'%';
        }, 0);
    }
};
</script>

<style lang="scss" scoped>
    .progress-bar {
        position:relative;
        width: 100%;
        background-color: rgba(100, 100, 100, 0.1);
        border-radius: 6px;
        .value {
            position: absolute;
            left: 0;
            width: 0;
            border-radius: 6px;
            transition: width 1s ease;
        }
    }
</style>
