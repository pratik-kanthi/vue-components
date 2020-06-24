<template>
    <div>
        <flat-pickr v-model="clonedValue" :config="config" ref="timepicker"></flat-pickr>
    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';

export default {
    name: 'TimePicker',
    props: {
        value: {
            type: [String, Date]
        },
    },
    components: {
        flatPickr,
    },

    data() {
        let vm = this;
        return { 
            clonedValue: this.value,
            config: {
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                onChange: () => {
                    vm.handler();
                }

            }, 
   
        };
    },
    methods: {
        handler() {
            this.$emit('update:value', this.clonedValue);
        },
    },
};
</script>

