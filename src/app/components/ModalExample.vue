<template>
    <div>
        <Button size="md" type="primary" text="Create" :action="showModal"></Button>
        <Button size="md" type="danger" text="Delete" :action="showModal2" class="ml-2"></Button>
        <Modal v-model="show1" size="md" @cancel="cancel" @save="modalOKed">
            <template v-slot:title>
                {{ header }}
            </template>
            <template v-slot:body>
                <p>Are you sure you want to delete this item?</p>
            </template>
            <template v-slot:footer>
                <Button size="md" type="border-primary" text="Cancel" :action="cancel"></Button>
                <Button size="md" type="primary" text="Save" :action="save"></Button>
            </template>
        </Modal>
        <Modal v-model="show2" size="md" @cancel="cancel" @save="modalOKed">
<!--            <template v-slot:title>-->
<!--                {{ header2 }}-->
<!--            </template>-->
            <template v-slot:body>
                <p>Are you sure you want to delete this item?</p>
            </template>
            <template v-slot:footer>
                <Button size="md" type="border-primary" text="Cancel" :action="cancel"></Button>
                <Button size="md" type="primary" text="Delete" :action="save"></Button>
            </template>
        </Modal>
    </div>
</template>
<script>
import Modal from '@/components/modal';
import Button from '@/components/Button';

export default {
    name: 'ModalExample',
    components: {
        Modal,
        Button,
    },
    data() {
        return {
            show1: false,
            show2: false,
            header:'ABC 1',
            header2: 'XYZ 1'
        };
    },
    methods: {
        showModal() {
            this.show1 = true;
            setTimeout(() => {
                this.header = 'ABC 2';
            }, 1000);
        },
        showModal2() {
            this.show2 = true;
            setTimeout(() => {
                this.header2 = 'XYZ 2';
            }, 1000);
        },
        cancel(){
            this.show1 = false;
            this.show2 = false;
        },
        modalOKed(){
            this.show1 = false;
            this.show2 = false;
        },
        save(){
            this.show1 = false;
            this.show2 = false;
        }
    },
};
</script>
