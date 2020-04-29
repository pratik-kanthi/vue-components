<template>
    <div>
        <apexchart class="column-chart" :width="width" :height="height" type="bar" :options="chartOptions" :series="data.series">
        </apexchart>
    </div>
</template>

<script>
let defaultOptions = {
    chart: {
        type: 'bar'
    },
    xaxis: {
        categories: [],
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: '',
        offsetY: 8
    }
};
export default {
    name: 'Column',
    props: {
        tite: {
            type: String
        },
        colors: {
            type: Array
        },
        width: {
            type: [Number, String]
        },
        height: {
            type: [Number, String],
            default: '300px'
        },
        data: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            default: null
        }
    },
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    computed: {
        chartOptions() {
            let chartOptions = this.$parent.populateChartOptions(defaultOptions);
            chartOptions.xaxis.categories = this.data.categories;
            return chartOptions;
        }
    },
    created() {
    },
};
</script>

<style lang="scss" scoped>
</style>
