<template>
    <div class="e9-chart">
        <component :is="component" :options="options" :width="width" :height="height" :data="data" v-if="!showTable"></component>
        <div class="table-graph" v-if="showTable">
            <div class="graph-wrapper" :class="type.toLowerCase()">
                <component :is="component" :options="options" :width="width" :height="height" :data="data"></component>
            </div>
            <div class="table-wrapper" :class="type.toLowerCase()" v-if="tableData && tableData.data && tableData.data.length> 0">
                <div class="table-header">
                    <div v-for="(item,key) in tableData.header" :key="key" class="header" :style="getStyle(tableData.header.length,key)">
                        {{ item }}
                    </div>
                </div>
                <div class="table-body">
                    <div class="table-row" v-for="(item,key1) in tableData.data" :key="key1">
                        <div class="table-column" v-for="(col,key2) in item" :key="key2" :style="getStyle(tableData.header.length,key2)">{{ col }}</div>
                        <br style=" clear:both ">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
Vue.filter('truncateChars', (val, num) => {
    let result = '';
    val = val + '';
    if (val) {
        result = val.substring(0, num);
        if (val.length > num) {
            result += '...';
        }
    }
    return result;
});

export default {
    name: 'Chart',
    props: {
        title: {
            type: String
        },
        type: {
            type: String,
            required: true
        },
        width: {
            type: [Number, String]
        },
        height: {
            type: [Number, String]
        },
        showTable: {
            type: Boolean,
            default: false
        },
        data: {
            type: [Array, Object],
            required: true
        },
        colors: {
            type: Array
        },
        options: {
            type: Object,
        }
    },
    data() {
        return {
            singleChartColor: ['#1D3461'],
            colorPallete: ['#1D3461', '#0069AA', '#376996', '#6290C8', '#829CBC'],
            component: null
        };
    },
    methods: {
        getStyle(size, key) {
            if (size <= 2) {
                if (key == 0 || key == 'Title')
                    return [{ 'width': '70%', 'text-align': 'left' }];
                else
                    return [{ 'width': '30%', 'text-align': 'right' }];
            } else {
                if (key == 0 || key == 'Title')
                    return [{ 'width': '40%', 'text-align': 'left' }];
                else
                    return [{ 'width': (60 / (size - 1)) + '%', 'text-align': 'right' }];
            }
        },
        populateChartOptions(defaultOptions) {
            let chartOptions = defaultOptions;
            chartOptions.chart.id = this.title ? this.title : this.type;
            if (!chartOptions.chart.fontFamily) {
                chartOptions.chart.fontFamily = 'Arial';
            }
            if (this.options) {
                for (const p in this.options) {
                    if (!chartOptions[p])
                        chartOptions[p] = {};
                    if (typeof this.options[p] == 'object') {
                        for (const innerP in this.options[p]) {
                            if (!chartOptions[p][innerP])
                                chartOptions[p][innerP] = {};
                            chartOptions[p][innerP] = this.options[p][innerP];
                        }
                    } else {
                        chartOptions[p] = this.options[p];
                    }
                }
            }
            chartOptions.colors = this.chartColors;
            chartOptions.title.text = this.title ? this.title : '';
            if (!chartOptions.chart.toolbar) {
                chartOptions.chart.toolbar = {
                    show: true,
                    tools: {
                        download: '<img src="' + location.origin + '/assets/menu.svg" width="30">'
                    }
                };
            }
            return chartOptions;
        }
    },
    computed: {
        chartColors() {
            if (this.type == 'Pie' || this.type == 'Donut' || this.type.indexOf('Stacked') != -1) {
                return this.colorPallete;
            } else {
                return this.singleChartColor;
            }
        },
        tableData() {
            let tableData = {
                header: ['Title'],
                data: []
            };
            for (var i = 0, len = this.data.categories.length; i < len; i++) {
                let _data = {
                    Title: this.data.categories[i]
                };
                if (this.type != 'Pie' && this.type != 'Donut') {
                    for (let j = 0, leng = this.data.series.length; j < leng; j++) {
                        if (i == 0) {
                            tableData.header.push(this.data.series[j].name || 'Value ' + (j + 1));
                        }
                        let _name = this.data.series[j].name || 'Value ' + (j + 1);
                        _data[_name] = this.data.series[j].data[i];
                    }
                } else {
                    for (let j = 0, leng = this.data.series.length; j < leng; j++) {
                        if (i == 0 && j == 0) {
                            tableData.header.push('Value');
                        }
                        _data['Value'] = this.data.series[i];
                    }
                }
                tableData.data.push(_data);
            }
            return tableData;
        }
    },
    created() {
        this.component = () => import('./' + this.type + '.vue');
    }
};
</script>
<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.apexcharts-canvas {
  .apexcharts-menu {
    min-width: 108px;
    font-family: Arial;
    padding: 0;
    top: 25px;
    right: 0;
    color: #777;
    .apexcharts-menu-item {
      text-align: center;
      font-size: 12px;
      padding: 8px;
    }
  }
  .apexcharts-title-text {
    font-size: 16px;
  }
}
.e9-chart {
  width: 100%;
  height: 100%;
  .table-graph {
    height: 100%;
    width: 100%;
    .graph-wrapper {
      float: left;
      width: 65%;
      &.pie,
      &.donut {
        width: 50%;
      }
    }
    .table-wrapper {
      height: 100%;
      padding: 8px 32px;
      float: right;
      width: 35%;
      &.pie,
      &.donut {
        width: 50%;
      }
      margin-bottom: 0;
      .table-header {
        overflow: auto;
        font-weight: 600;
        border-bottom: 0;
        background: #eee;
        color: #4f4f4f;
        .header {
          text-align: left;
          float: left;
          padding: 8px;
          margin: 0;
        }
      }
      .table-body {
        max-height: 65%;
        overflow: auto;
        color: #4f4f4f;
        border: 1px solid rgba(100, 100, 100, 0.1);
        .table-row {
          font-size: 16px;
          padding: 8px;
          border-bottom: 1px dashed rgba(100, 100, 100, 0.1);
          .table-column {
            font-size: 16px;
            text-align: left;
            float: left;
            margin: 0;
          }
        }
        .header {
          padding: 8px 0px;
          border-bottom: 1px dashed #eee;
          margin: 0;
          cursor: pointer;
          &:hover {
            background-color: #ddd;
          }
          :first-child {
            padding-left: 15px;
          }
          :last-child {
            text-align: right;
            padding-right: 15px;
          }
        }
      }
    }
  }
}
</style>
