<template>
    <div>
        <Button size="md" type="primary" text="Launch Modal" :action="showModal"></Button>
        <Modal ref="modalExample" size="md" @opened="modalOpended" @closed="modalClosed">
            <template v-slot:title>
                Delete
            </template>
            <template v-slot:body>
                <p>Are you sure you want to delete this item?</p>
            </template>
            <template v-slot:footer>
                <Button size="md" type="border-primary" text="Cancel" :action="cancel"></Button>
                <Button size="md" type="primary" text="Delete"></Button>
            </template>
        </Modal>
    </div>
</template>
<script>
export default {
    name: 'ModalExample',
    data() {
        return {
            show: false
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
        },
        modalClosed(){
            console.log('closed');
        }
    }, 
};
</script>
