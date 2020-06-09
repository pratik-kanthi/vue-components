<template>
    <div class="badge-wrapper">
        <slot></slot>
        <div class="badge" :style="style" :class="position">
            {{ text }}
        </div>
    </div>

</template>

<script>
import utils from '@/utils';

export default {
    name: 'Badge',
    props: {
        size: {
            type: String,
            required: true,
            default: '20'
        },
        text: {
            type: String
        },
        color: {
            type: String,
            default: '#1FD0A3'
        },
        position: {
            type: String,
            default: 'top-right'
        },
        overlap: {
            type: String
        }
    },
    computed: {
        style() {
            let obj = {};
            obj['background-color'] = utils.CommonUtils.CheckValidHex(this.color);
            obj['height'] = this.size + 'px';
            obj['min-width'] = this.size + 'px';
            obj['font-size'] = this.size/1.67 + 'px';
            obj['border-radius'] = this.size/2 + 'px';
            obj['padding'] = this.size/4 + 'px';
            if (this.overlap == 'circle') obj['transform'] = 'none';
            return obj;
        }
    }
};
</script>

