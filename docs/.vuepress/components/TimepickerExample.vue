<template>
    <div>
        <Timepicker :value.sync="date" :hour-step="1" :minute-step="5" :show-seconds="true" :second-step="5">
        </Timepicker>
    </div>
</template>

<script>
export default {
    name:'TimepickerExample',
    data() {
        return {
            date:new Date(2020,5,1),
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
                    border: none;
                    padding: 0;
                }
            }
        }
    }
}
</style>