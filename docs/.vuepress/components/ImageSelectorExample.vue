<template>
    <div>
        <Button size="md" type="primary" text="Choose Image" :action="showModal"></Button>
        <ImageSelector v-model="show" @close="close" v-if="show"></ImageSelector>
        <div class="img-wrapper">
            <img :src="img.src" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImageSelectorExample',
    data() {
        return {
            show: false,
            img: {
                src: ''
            }
        };
    },
    methods: {
        showModal() {
            this.show = true;
        },
        close(img) {
            this.img = img;
        }
    }
};
</script>

<style lang="scss" scoped>
.img-wrapper {
    width: 320px;
    margin-top: 16px;
}
</style>
