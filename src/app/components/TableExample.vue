<template>
    <div>
        <Table
            :items="items"
            :headings="columns"
            :on-row-click="rowClicked"
            :pagination.sync="pagination"
            :sort.sync="sort"
            table-class="table-bordered"
            thead-class="thead-light"
            :options="tableOptions"
        >
            <template v-slot:OS="data">
                <div class="logo" :style="{'background-image': 'url(' + getImageUrl(data) + ')'}"></div>
            </template>
        </Table>
    </div>
</template>

<script>
import Table from '@/components/Table';

export default {
    name: 'NormalTable',
    components: {
        Table
    },
    data() {
        return {
            columns: [
                {
                    key: 'Hostname',
                    sortable: true
                },
                {
                    key: 'OS'
                },
                {
                    key: 'IPAddress'
                },
                {
                    key: 'LifeCycleStatus',
                    label: 'Status',
                    sortable: true
                },
                {
                    key: 'Environment',
                    class: (data) => {
                        return data.Environment;
                    },
                    formatter: (data) => {
                        return data.toUpperCase();
                    }
                },
                {
                    key: 'Network'
                }
            ],
            items: [
                {
                    Hostname: 'e9ine-host01',
                    IPAddress: '192.168.0.1',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'Live',
                    Critical: 'ProductionCritical',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/hpux.png'}
                },
                {
                    Hostname: 'e9ine-host02',
                    IPAddress: '192.168.0.2',
                    Network: 'MBN',
                    LifeCycleStatus: 'SwitchedOff',
                    Environment: 'Live',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/solaris.png'}
                },
                {Hostname: 'e9ine-host03', IPAddress: '192.168.1.199', Network: 'CDN', LifeCycleStatus: 'Active', Environment: 'prod', OS: {}},
                {
                    Hostname: 'e9ine-host04',
                    IPAddress: '192.168.28.151',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'dr',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/hpux.png'}
                },
                {Hostname: 'e9ine-host05', IPAddress: '192.168.2.0', Network: 'CDN', LifeCycleStatus: 'Active', Environment: 'prod', OS: {}},
                {
                    Hostname: 'e9ine-host06',
                    IPAddress: '192.168.2.22',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'dr',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/hpux.png'}
                },
                {
                    Hostname: 'e9ine-host07',
                    IPAddress: '192.168.11.11',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'dr',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/ibm.png'}
                },
                {
                    Hostname: 'e9ine-host08',
                    IPAddress: '192.168.11.21',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'Live',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/np_window-data-base_705788_2E4066.png'}
                },
                {
                    Hostname: 'e9ine-host09',
                    IPAddress: '192.168.11.30',
                    Network: 'SDN',
                    LifeCycleStatus: 'SwitchedOff',
                    Environment: 'Live',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/redhat.png'}
                },
                {
                    Hostname: 'e9ine-host10',
                    IPAddress: '192.168.110.22',
                    Network: 'CDN',
                    LifeCycleStatus: 'Active',
                    Environment: 'Live',
                    OS: {Logo: 'https://storage.googleapis.com/oneview-production-bucket/resources/hpux.png'}
                }
            ],
            isPagination: false,
            pagination: {
                perPage: 4,
                totalItems: 0,
                currentPage: 1,
                threshold: 2,
                showJumpToLast: true,
                showJumpToFirst: true
            },
            sort: {
                name: 'Hostname',
                value: 'asc'
            },
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
<style lang="scss">
table {
    display: table;
    margin: 0;
}
.table-wrapper table tbody tr td {
    &.Live {
        color: #4f4f4f;
    }
    &.Active {
        background-color: rgba(178, 242, 177, 0.65);
    }
    &.SwitchedOff {
        background-color: rgba(231, 178, 169, 0.65);
    }
    &.Project {
        background-color: #f0e8f4;
    }
    &.LostAndFound {
        background-color: #ffebc3;
    }
    &.Hardware {
        background-color: #ffd8f9;
    }
    &.HardwareSupport {
        background-color: #fdcbae;
    }
}
</style>
