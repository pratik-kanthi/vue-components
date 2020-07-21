import Vue from 'vue';
import ModalDialog from '@/components/modal/ModalDialog';
let modalInstance;
export default {
    props: {
        size: {
            type: String
        },
        centered:{
            type:Boolean
        }
    },
    render(){
        return this.$slots.body;
    },
    methods: {
        open(){      
            let ComponentClass = Vue.extend(ModalDialog);
            modalInstance = new ComponentClass({
                propsData: this.$props
            });
            modalInstance.$slots.header = this.$slots.header;
            modalInstance.$slots.title = this.$slots.title;
            modalInstance.$slots.body = this.$slots.body;
            modalInstance.$slots.footer = this.$slots.footer;

            modalInstance.$on('closed', this.close);
            modalInstance.$on('opened', ()=>{
                this.$emit('opened');
            });
            modalInstance.$mount();
            $('body').append(modalInstance.$el);
         
        },
        close(){
            this.$emit('closed');
            $(modalInstance.$el).remove();
            modalInstance.$destroy(true);
        }
    },
    updated () {
        modalInstance.$slots.header = this.$slots.header;
        modalInstance.$slots.title = this.$slots.title;
        modalInstance.$slots.body = this.$slots.body;
        modalInstance.$slots.footer = this.$slots.footer;
        modalInstance.$forceUpdate();
        // this.observer = new MutationObserver(function(mutations) {
        //     this.number++;
        //     debugger;
        // }.bind(this));
        // this.observer.observe(
        //     $('.modal-container')[0],
        //     { attributes: true, childList: true, characterData: true, subtree: true }
        // );
    },
};