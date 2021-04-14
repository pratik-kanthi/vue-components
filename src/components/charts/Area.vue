<template>
    <div>
        <apexchart class="area-chart" :width="width" :height="height" :options="chartOptions" :series="data.series"> </apexchart>
    </div>
</template>

<script>
let defaultOptions = {
    chart: {
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: '',
        offsetY: 8
    },
    xaxis: {
        categories: []
    }
};
export default {
    name: 'LineChart',
    props: {
        title: {
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
    created() {}
};
</script>

<style lang="scss" scoped></style>
