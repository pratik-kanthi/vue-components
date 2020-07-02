<template>
    <div>
        <div class="datepicker-wrapper">
            <datepicker :value.sync="date" :calendar-config="getCalendarConfig()" :select-mode="mode" :key="mode" ref="datepickerExample">
                <Button size="md" type="primary">
                    <i class="material-icons">today</i>
                </Button>
                <strong>{{date}}</strong>
            </datepicker>
        </div>
    </div>
</template>

<script>
export default {
    name:'DatepickerSlotExample',
    data() {
        return {
            date:'10/06/2020',
            mode:'day'
        }; 
    },
    methods: {
        getCalendarConfig(){
            return {
                dateFormat: 'd/m/Y',
                altFormat: 'd/m/Y',
                altInput: true,
                weekNumbers: false,
            };
        },
        calendarOpened(){
            this.$refs.datepickerExample.setDate('2021;07-10',false,'Y-m-d');
        }
    }
};
</script>

<style lang="scss">
.datepicker-wrapper {
	width: 420px;
	.btn {
		min-width: 0;
		margin-right: 1rem;
		.icon {
			margin-right: 0;
		}
	}
}
</style>


