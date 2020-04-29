<template>
    <div>
        <apexchart class="stackedbar-chart" :width="width" :height="height" type="bar" :options="chartOptions" :series="data.series">
        </apexchart>
    </div>
</template>

<script>
let defaultOptions = {
    chart: {
        type: 'bar',
        stacked: true
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    title: {
        text: '',
        offsetY: 8
    },
    xaxis: {
        categories: [],
    }
};
export default {
    name: 'Bar',
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
