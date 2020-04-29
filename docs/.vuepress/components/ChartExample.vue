<template>
    <div>
        <div>
            <Tabs :data="navigationLessTabs" :type="type" :limit="3" :active.sync="activeTabIndex"></Tabs>
        </div>
        <div class="content">
            <chart v-show="activeTabIndex==0" title="Bar Chart" type="Bar" :data="barChartData"></chart>
            <chart v-show="activeTabIndex==1" title="Stacked Bar Chart" type="StackedBar" :data="stackedBarChartData" :options="stackedBarChartOptions"></chart>
            <chart v-show="activeTabIndex==2" title="Line Chart" type="Line" :data="lineChartData"></chart>
            <chart v-show="activeTabIndex==3" title="Pie Chart" type="Pie" :data="pieChartData" :show-table="true"></chart>
            <chart v-show="activeTabIndex==4" title="Donut Chart" type="Donut" :data="donutChartData"></chart>
            <chart v-show="activeTabIndex==5" title="Column Chart" type="Column" :data="barChartData"></chart>
            <chart v-show="activeTabIndex==6" title="Stacked Column Chart" height="400px" type="StackedColumn" :data="stackedBarChartData"></chart>
        </div>
    </div>
</template>
<script>
export default {
    name: "ChartExample",
    methods: {
        activateTab(index) {
            this.activeTabIndex = index;
        }
    },
    data() {
        return {
            type: 'simple',
            componentKey: 0,
            activeTabIndex: 0,
            navigationLessTabs: [
                {
                    name: 'Bar Chart'
                },
                {
                    name: 'Stacked Bar Chart'
                },
                {
                    name: 'Line Chart'
                },
                {
                    name: 'Pie Chart'
                },
                {
                    name: 'Donut Chart'
                },
                {
                    name: 'Column Chart'
                },
                {
                    name: 'Stacked Column Chart'
                }
            ],
            stackedBarChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
                series: [{
                    name: "Series 1",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }, {
                    name: "Series 2",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }, {
                    name: "Series 3",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }]
            },
            barChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                series: [{
                    Name: 'Series1',
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }]
            },
            lineChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                series: [{
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12]
                }],
            },
            pieChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                series: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12]
            },
            donutChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                series: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12]
            },
            stackedBarChartOptions: {
                legend: {
                    show: false
                }
            },
            google: {},
            address: {},
            options: {
                componentRestrictions: {
                    country: 'gb'
                }
            }
        };
    },
}
</script>

<style>
.content{
    margin-top: 16px;
}
</style>