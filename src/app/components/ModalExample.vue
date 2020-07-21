<template>
    <div>
        <!-- <Button size="md" type="primary" text="Launch Modal" :action="showModal"></Button> -->
        <Button size="md" type="primary" text="Launch Image Selector" :action="showImageSelector"></Button>
        <!-- <Modal ref="modalExample" size="md" @opened="modalOpended" @closed="modalClosed">
            <template v-slot:title>
                {{ header }}
            </template>
            <template v-slot:body>
                <p>Are you sure you want to delete this item?</p>
            </template>
            <template v-slot:footer>
                <Button size="md" type="border-primary" text="Cancel" :action="cancel"></Button>
                <Button size="md" type="primary" text="Delete"></Button>
            </template>
        </Modal> -->
        <ImageSelector ref="imageSelector"></ImageSelector>
    </div>
</template>
<script>
import Modal from '@/components/modal';
import Button from '@/components/Button';
import ImageSelector from '@/components/ImageSelector';

export default {
    name: 'ModalExample',
    components: {
        Modal,
        Button,
        ImageSelector
    },
    data() {
        return {
            show: false,
            header:'Delete'
        };
    },
    methods: {
        showModal() {
            this.$refs.modalExample.open();
        },
        cancel(){
            this.$refs.modalExample.close();
        },
        modalOpended(){
            console.log('opened');
            setTimeout(() => {
                this.header='Confirm';
            }, 3000);
        },
        modalClosed(){
            console.log('closed');
        },
        showImageSelector(){
            this.$refs.imageSelector.open();
            setTimeout(() => {
                this.header='Confirm';
            }, 1000);
        }
    }
};
</script>
