<template>
    <div>
        <h1 class="page-title">Range</h1>
        <Range :min="0" :max="200" :steps="5" :range="range"></Range>
    </div>
</template>
<script>
import Range from '@/components/Range';
export default {
    name: 'RangeExample',
    components: {
        Range
    },
    data () {
        return {
            range:[0, 100]
        };
    }
};
</script>
