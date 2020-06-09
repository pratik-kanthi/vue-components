<template>
    <div class="range-wrapper">
        <div class="range-slider">
            <input :min="min" :max="max" v-model="range[0]" type="range">
            <input :min="min" :max="max" v-model="range[1]" type="range">
            <div class="range-values">
                <span class="float-left mt16">{{ range[0] }}</span>
                <span class="float-right mt16">{{ range[1] }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Range',
    props: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        steps: {
            type: Number,
            default: 1
        },
        range: {
            type: Array,
            required: true
        }
    },
    methods: {
        someHandler() {
            this.rangeValue[0]=this.rangeValue[1];
        }
    },
};
</script>

<style lang="scss" scoped>
.range-wrapper {
    .range-slider {
        position: relative;
        width: 100%;
        input[type='range'] {
            pointer-events: none;
            -webkit-appearance: none;
            // position: absolute;
            width: 100%;
            height: 4px;
            background-color: $white;
            cursor: pointer;
            &:focus {
                outline: 0;
            }
            &::-webkit-slider-runnable-track {
                width: 100%;
                height: 4px;
                cursor: pointer;
                background-color: $grey;;
                border: 0;
                border-radius: 2px;
            }
            &::-webkit-slider-thumb {
                position: relative;
                pointer-events: all;
                border: $range-thumb-border;
                width: $range-thumb-width;
                height: $range-thumb-width;
                border-radius: 50%;
                background: $range-thumb-bg;
                box-shadow: $range-thumb-box-shadow;
                cursor: pointer;
                -webkit-appearance: none;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;
                &:hover {
                    background: $grey;
                    border-color: $grey;
                }
            }
        }
    }
}
</style>
