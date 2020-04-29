<template>
    <div class="all-wrapper">
        <div class="actions">
            <button :class="{'active': type === 'simple'}" @click="type = 'simple'">Simple Tabs</button>
            <button :class="{'active': type === 'angled'}" @click="type = 'angled'">Angled Tabs</button>
            <button :class="{'active': type === 'stacked'}" @click="type = 'stacked'">Stacked Tabs</button>
            <br />
            <br />
            <button class="navigable" :class="{'active': navigable}" @click="navigable = !navigable">Navigable Tabs</button>
        </div>
        <div v-if="navigable">
            <Tabs :data="navigableTabs" :type="type" :limit="3"></Tabs>
        </div>
        <div v-else>
            <Tabs :data="navigationLessTabs" :type="type" :limit="3" :active.sync="currentTab"></Tabs>
            <div class="content">
                Showing content for <b>{{ navigationLessTabs[currentTab].name }}</b>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabsExample',
        data () {
            return {
                navigableTabs: [
                    {
                        name: 'Views',
                        path: '/main/views/'
                    },
                    {
                        name: 'Components',
                        path: '/main/components/'
                    },
                    {
                        name: 'Directives',
                        path: '/main/directives/'
                    },
                    {
                        name: 'Item 4',
                        path: '/item-4'
                    },
                    {
                        name: 'Item 5',
                        path: '/item-5'
                    },
                    {
                        name: 'Item 6',
                        path: '/item-6'
                    }
                ],
                navigationLessTabs: [
                    {
                        name: 'Item 1',
                        selected: true
                    },
                    {
                        name: 'Item 2'
                    },
                    {
                        name: 'Item 3',
                        disabled: true
                    },
                    {
                        name: 'Item 4'
                    },
                    {
                        name: 'Item 5'
                    },
                    {
                        name: 'Item 6'
                    }
                ],
                navigable: true,
                currentTab: 0,
                type: 'simple'
            };
        }
    };
</script>

<style lang="scss" scoped>
    .all-wrapper {
        padding: 32px;
        background-color: #f6f6f6;
        .actions {
            margin-bottom: 32px;
            button {
                border-radius: 4px;
                background-color: transparent;
                border: 1px solid #d21d1d;
                color: #d21d1d;
                padding: 10px 12px;
                outline: 0 !important;
                cursor: pointer;
                margin-right: 8px;
                margin-bottom: 4px;
                font-size: 14px;
                &.active {
                    background-color: #d21d1d;
                    color: #fff;
                }
                &.navigable {
                    color: #777;
                    border: 1px solid #777;
                    &.active {
                        background-color: #777;
                        color: #fff;
                    }
                }
            }
        }
        .content {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 10px;
        }
    }
</style>
