<template>
    <ColorPicker :color.sync="defaultColour"></ColorPicker>
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
