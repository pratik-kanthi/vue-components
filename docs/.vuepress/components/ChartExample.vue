<template>
    <div>
        <div>
            <Tabs :data="navigationLessTabs" :type="type" :active.sync="activeTabIndex"></Tabs>
        </div>
        <div class="tab-content">
            <Chart v-show="activeTabIndex==0" title="Bar Chart" type="Bar" height="500px" :data="barChartData" :show-table="true"></Chart>
            <Chart v-show="activeTabIndex==1" title="Stacked Bar Chart" type="StackedBar" :data="stackedBarChartData" :options="stackedBarChartOptions" :colors="['#546E7A', '#E91E63']" :show-table="true"></Chart>
            <Chart v-show="activeTabIndex==2" title="Line Chart" type="Line" :data="lineChartData"></Chart>
            <Chart v-show="activeTabIndex==3" title="Pie Chart" type="Pie" :data="pieChartData" :show-table="true"></Chart>
            <Chart v-show="activeTabIndex==4" title="Donut Chart" type="Donut" :data="donutChartData"></Chart>
            <Chart v-show="activeTabIndex==5" title="Column Chart" type="Column" :data="barChartData"></Chart>
            <Chart v-show="activeTabIndex==6" title="Stacked Column Chart" height="400px" type="StackedColumn" :data="stackedBarChartData"></Chart>
            <Chart v-show="activeTabIndex==7" title="Radial Bar" height="400px" type="RadialBar" :data="radialBarChartData" :options="radialBarChartOptions"></Chart>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ChartExample',
    data() {
        return {
            type: 'simple',
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
                },
                {
                    name: 'Radial Bar Stroked Chart'
                }
            ],
            stackedBarChartData: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
                series: [{
                    name: 'Series 1',
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }, {
                    name: 'Series 2',
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }, {
                    name: 'Series 3',
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
                    name: 'Desktops',
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
            radialBarChartData: {
                categories:[],
                series: [67] 
            },
            radialBarChartOptions: {
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: ['Median Ratio'],
            },
            stackedBarChartOptions: {
                legend: {
                    show: false
                },
                title: {
                    style: {
                        fontFamily:'Inter'
                    }
                },
                chart:{
                    stackType: '100%'
                },
                dataLabels: {
                    enabled: true
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
    methods: {
        activateTab(index) {
            this.activeTabIndex = index;
        }
    },
};
</script>

<style lang="scss" scoped>
.tab-content{
    margin-top: 16px;
}
</style>