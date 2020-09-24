<template>
    <div class="app">
        <RichText :options="options" />
    </div>
</template>

<script>
import RichText from '@/components/rich-text/RichText';
export default {
    components: {
        RichText
    },
    data() {
        return {
            options: {
                content: '',
                placeholder: ''
            }
        };
    },
    methods: {},
    watch: {}
};
</script>
<style lang="scss">
.app {
    padding: 1rem;
}
</style>
