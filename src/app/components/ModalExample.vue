<template>
    <div>
        <button id="show-modal" @click="showModal=true">Show Modal</button>
        <component-modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">custom header</h3>
        </component-modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal';
// import Vue from 'vue';

export default {
    name:'ModalExample',
    components: {
        		'component-modal': Modal,
    },
    data() {
        return {
            showModal: false
        };
    },
    // methods: {
    //     showModal() {
    //         var ComponentClass = Vue.extend(Modal);
    //         var instance = new ComponentClass();
    //         instance.$slots.body = [ 'Click me!' ];
    //         instance.$on('close',function () {
    //             // debugger;
    //             $(instance.$el).remove();
    //         });
    //         instance.$mount(); // pass nothing
    //         $('body').append(instance.$el); }
    // },
};
</script>

<style lang="scss" scoped>


</style>