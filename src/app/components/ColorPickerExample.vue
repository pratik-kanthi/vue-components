<template>
    <div class="row">
        <div class="col-sm-4">
            <h1 class="page-title">Color Picker</h1>
            <ColorPicker :color.sync="defaultColour"></ColorPicker>
        </div>
    </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker';
export default {
    name: 'ColorPickerExample',
    components: {
        ColorPicker,
    },
    data() {
        return {
            defaultColour: '#d21d1d'
        };
    }
};
</script>

<style>
</style>