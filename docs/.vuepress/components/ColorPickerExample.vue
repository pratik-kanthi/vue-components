<template>
<div class="components">
    <ColorPicker :color.sync="defaultColour"></ColorPicker>
</div>
</template>

<script>
export default {
    name: "ColorPickerExample",
    data() {
        return {
            defaultColour: "#d21d1d"
        }
    }
}
</script>

<style>
</style>