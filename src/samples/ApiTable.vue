<template>
    <div>
        <div style="display: inline-block; margin-right: 16px; margin-bottom: 16px" v-for="(item,key) in Statuses" :key="key">
            <input type="checkbox" v-model="filters.Status" :value="item"> {{ item }}
        </div>
        <Table
            :items="provider"
            :headings="columns"
            :on-row-click="rowClicked"
            :pagination.sync="pagination"
            :filters="filters"
            :sort.sync="sort"
            table-class="tr-split"
            :tbody-td-class="tbodyTdClass"
            :options="tableOptions">
            <template v-slot:OS="data">
                <div class="logo" :style="{'background-image': 'url(' + getImageUrl(data) +')'}"></div>
            </template>
        </Table>
    </div>
</template>

<script>

import Table from '../components/Table';
import axios from 'axios';
import Component from '../samples/Component';
export default {
    name: 'ApiTable',
    components: {
        Table
    },
    data () {
        return {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTW9uaWsgR3JvdmVyIiwiVXNlck5hbWUiOiJtb25pa0BlOWluZS5jb20iLCJVc2VySWQiOiI1ZDlkYTg3YzllYzIwZjU4MDQwODMxOTciLCJFeHBpcmVzQXQiOjE1ODA1ODQwMzM4MDEsIkNsYWltcyI6IlN0YWZmOjVkZTRjNDExNzk5Y2M5MjQ3OGY5NjQ4MSIsIk93bmVyIjp7IkRlbGV0ZWQiOmZhbHNlLCJfaWQiOiI1ZGU0YzQxMTc5OWNjOTI0NzhmOTY0ODEiLCJUeXBlIjoiU3RhZmYiLCJUaXRsZSI6Ik1vbmlrIEdyb3ZlciIsIkVtYWlsIjoibW9uaWtAZTlpbmUuY29tIn0sImlhdCI6MTU4MDU1NTIzM30.4Tk8QjwqdWYU_EJqJNWjbW6R04Q-oAmU8LB8tn0Fok4',
            columns: [
                {
                    'key': 'Hostname'
                },
                {
                    'key': 'OS',
                },
                {
                    'key': 'IPAddress'
                },
                {
                    'key': 'LifeCycleStatus',
                    'label': 'Status',
                    'sortable': true
                },
                {
                    'key': 'Environment',
                    class: (data) => {
                        return data.Environment;
                    }
                },
                {
                    'key': 'Network'
                }
            ],
            Statuses: ['Active','HardwareSupport','Hardware','LostAndFound','Project','SwitchedOff'],
            filters: {
                'Status':[],
                'OSObsolescence':[],
                'OSObsolescenceStage':[],
                'HardwareObsolescenceStage':[],
                'HardwareObsolescence':[],
                'Manufacturers':[],
                'ManufacturerModels':[],
                'Teams':[],
                'Sites':[],
                'ServiceDeliveryManagers':[],
                'ServiceDeliveryLeads':[],
                'Services':[],
                'OperatingSystemVersions':[],
                'OperatingSystemFamilies':[],
                'PhysicalVirtual':'',
                'Type':''
            },
            sort: {
                name: 'LifeCycleStatus',
                value: 'asc'
            },
            pagination: {
                perPage: 10,
                totalItems: 0,
                currentPage: 1,
                threshold: 4,
                showJumpToLast: true,
                showJumpToFirst: true
            },
            Component,
            tableOptions: {
                export: true,
                arrange: true,
                reset: true
            }
        };
    },
    methods: {
        getImageUrl(data) {
            return data.value.OS ? data.value.OS.Logo : '';
        },
        rowClicked(data) {
            console.log(JSON.stringify(data));
        },
        tbodyTdClass(header, row) {
            return row.LifeCycleStatus + ' pointer';
        },
        provider(vm) {
            return new Promise(async (resolve, reject) => {
                try {
                    let result = await axios.post(`https://oneview-api.ilooklike.me/api/component/search?text=&page=${vm.pagination.currentPage}&size=${vm.pagination.perPage}&sortby=${vm.sort.value === 'desc' ? '-': ''}${vm.sort.name}`, this.filters,{
                        headers: {
                            Authorization: 'Bearer ' + this.token,
                            'Content-Type': 'application/json',
                            Accepts: 'application/json'
                        },
                    });
                    this.pagination.totalItems = result.data.count;
                    resolve(result.data.data);
                } catch (err) {
                    return reject(err);
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    .logo {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-size: cover;
        background-position: center center;
        background-color: white;
    }
</style>
<style>
    .Live {
        color: #4f4f4f;
    }
    .Active {
        background-color: #b2f2b1;
    }
    .SwitchedOff {
        background-color: #e7b2a9;
    }
    .Project {
        background-color: #f0e8f4;
    }
    .LostAndFound {
        background-color: #ffebc3;
    }
    .Hardware {
        background-color: #ffd8f9;
    }
    .HardwareSupport {
        background-color: #fdcbae;
    }
    .pointer {
        cursor: pointer;
    }
</style>
