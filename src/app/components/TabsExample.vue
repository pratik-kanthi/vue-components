<template>
    <div>
        <p>Tabs organize content across different screens, data sets, and other interactions.Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.</p>
        <div class="spacer-v"></div>
        <Tabs :data="tabTypes" type="pills" :active.sync="currentType" @changed="changeType"></Tabs>
        <div class="spacer-v"></div>
        <div>
           
        </div>
        <div>
            <input type="checkbox" id="tabs-navigable" v-model="navigable">
            <label for="tabs-navigable"><strong>Navigable</strong></label> 
            <span class="spacer-h"></span>
            <input type="checkbox" id="tabs-fill" v-model="fillTabs">
            <label for="tabs-fill"><strong>Fill</strong></label> 
            <span class="spacer-h"></span>
            <input type="checkbox" id="tabs-stacked" v-model="stackedTabs">
            <label for="tabs-stacked"><strong>Stacked</strong></label> 
            <span class="spacer-h"></span>
            <strong>Align:</strong>
            <span class="spacer-h"></span>
            <input type="radio" id="tabs-right" name="tabs-left" value="" v-model="alignTabs">
            <label for="tabs-left">Left</label>
            <span class="spacer-h"></span>
            <input type="radio" id="tabs-right" name="tabs-right" value="right" v-model="alignTabs">
            <label for="tabs-right">Right</label>
            <span class="spacer-h"></span>
            <input type="radio" id="tabs-center" name="tabs-center" value="center" v-model="alignTabs">
            <label for="tabs-center">Center</label>
        </div>
        <div class="spacer-v"></div>
        <div v-if="navigable">
            <Tabs :data="navigableTabs" :type="type" :limit="5" :active.sync="currentTab" :fill="fillTabs" :stacked="stackedTabs" :align="alignTabs"></Tabs>
        </div>
        <div v-else>
            <Tabs :data="navigationLessTabs" :type="type" :limit="5" :active.sync="currentTab" :fill="fillTabs" :stacked="stackedTabs" :align="alignTabs"></Tabs>
            <div class="spacer"></div>
            <div class="content">
                Showing content for <b>{{ navigationLessTabs[currentTab].name }}</b>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
export default {
    name: 'TabsExample',
    components: {
        Tabs,
    },
    data () {
        return {
            tabTypes:[{name:'Simple', selected: true},{name:'Angled'},{name:'Pills'}],
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
            navigable: false,
            currentTab: 0,
            type: 'simple',
            currentType:0,
            fillTabs:false,
            stackedTabs:false,
            alignTabs:null
        };
    },
    methods: {
        changeType(index) {
            this.type=this.tabTypes[index].name.toLowerCase();
        }
    },};
</script>

<style lang="scss" scoped>
  .content{
      padding: 2rem 0;
  }
</style>
