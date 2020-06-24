<template>
    <div>
        <a href="" class="btn btn-sm btn-primary" @click.prevent="mode='day'">Day Mode</a><span class="spacer-h"></span>
        <a href="" class="btn btn-sm btn-primary" @click.prevent="mode='week'">Week Mode</a><span class="spacer-h"></span>
        <a href="" class="btn btn-sm btn-primary" @click.prevent="mode='month'">Month Mode</a>
        <div class="spacer-v"></div>
        <div class="row">
            <div class="col-sm-4">
                <Datepicker :value.sync="date" :calendar-config="getCalendarConfig()" :select-mode="mode" :key="mode" ref="datepickerExample">
                    <!-- <a class="btn btn-sm btn-primary" style="margin-bottom:8px">Select Date</a> -->
                </datepicker>
            </div>
        </div>

    </div>
</template>

<script>
import Datepicker from '@/components/Datepicker';


export default {
    name:'CalendarExample',
    components: {
        Datepicker
    },
    data() {
        return {
            // dates:['2020-07-02', '2020-06-20'],
            date:new Date(),
            mode:'day'
        }; 
    },
    methods: {
        getCalendarConfig(){
            return {
                dateFormat: 'd/m/Y',
                altFormat: 'd/m/Y',
                altInput: true,
                // mode:'range',
                weekNumbers: true,
                // inline:true
            };
        },
        calendarOpened(){
            this.$refs.datepickerExample.setDate('2021;07-10',false,'Y-m-d');
        }
    }
};
</script>


