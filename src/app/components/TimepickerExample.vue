<template>
    <div>
        <Timepicker :value.sync="date" :hour-step="1" :minute-step="5" :show-seconds="false" :second-step="5">
        </Timepicker>
    </div>
</template>


<script>
import Timepicker from '@/components/Timepicker';


export default {
    name:'TimepickerExample',
    components: {
        Timepicker
    },
    data() {
        return {
            date:new Date(),
        }; 
    },
};
</script>

<style lang="scss">
.timepicker-wrapper{
    table{
        tbody{
            tr{
                border:none;
                td{
                    border: none
                }
            }
        }
    }
}
</style>