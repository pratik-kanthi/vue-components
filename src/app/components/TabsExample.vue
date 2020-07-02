<template>
    <div>
        <Tabs :data="tabTypes" type="pills" :active.sync="currentType" @changed="changeType"></Tabs>
        <div class="options-wrapper">
            <div class="option-wrapper">
                <div class="form-element">
                    <input type="checkbox" class="check" id="tabs-navigable" v-model="navigable">
                    <label class="check-label box" for="tabs-navigable">
                        <span></span>
                    </label> 
                    <strong>Navigable</strong>
                </div>
            </div>
            <div class="option-wrapper">
                <div class="form-element">
                    <input type="checkbox" class="check" id="tabs-fill" v-model="fillTabs">
                    <label class="check-label box" for="tabs-fill">
                        <span></span>
                    </label> 
                    <strong>Fill</strong>
                </div>
            </div>
            <div class="option-wrapper">
                <div class="form-element">
                    <input type="checkbox" class="check" id="tabs-stacked" v-model="stackedTabs">
                    <label class="check-label box" for="tabs-stacked">
                        <span></span>
                    </label> 
                    <strong>Stacked</strong>
                </div>
            </div>
            <div class="option-wrapper">
                <div class="form-element">
                    <input type="checkbox" class="check" id="tabs-wrapped" v-model="wrapTabs">
                    <label class="check-label box" for="tabs-wrapped">
                        <span></span>
                    </label> 
                    <strong>Wrapped</strong>
                </div>
            </div>
            <div class="option-wrapper">
                <strong>Align:</strong>
                <div class="form-element">
                    <input type="radio" class="check" id="tabs-right" name="tabs-left" value="left" v-model="alignTabs">
                    <label class="check-label radio" for="tabs-left"></label>
                    <span>Left</span>
                </div>
                <div class="form-element">
                    <input type="radio" class="check" id="tabs-right" name="tabs-right" value="right" v-model="alignTabs">
                    <label class="check-label radio" for="tabs-right"></label>
                    <span>Right</span>
                </div>
                <div class="form-element">
                    <input type="radio" class="check" id="tabs-center" name="tabs-center" value="center" v-model="alignTabs">
                    <label class="check-label radio" for="tabs-center"></label>
                    <span>Center</span>
                </div>
            </div>
        </div>
        <div v-if="navigable">
            <Tabs :data="navigableTabs" :type="type" :limit="5" :active.sync="currentTab" :fill="fillTabs" :stacked="stackedTabs" :align="alignTabs"></Tabs>
        </div>
        <div v-else>
            <Tabs :data="navigationLessTabs" :type="type" :limit="5" :active.sync="currentTab" :fill="fillTabs" :stacked="stackedTabs" :align="alignTabs" :wrap="wrapTabs"></Tabs>
            <div class="spacer"></div>
            <div class="tab-content">
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
                    name: 'Home',
                    path: '/home'
                },
                {
                    name: 'Components',
                    path: '/main/components/'
                },
                {
                    name: 'Views',
                    path: '/main/views/'
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
            alignTabs:'left',
            wrapTabs:null
        };
    },
    methods: {
        changeType(index) {
            this.type=this.tabTypes[index].name.toLowerCase();
        }
    },};
</script>

<style lang="scss" scoped>
.tabs-wrapper,.options-wrapper{
    margin-bottom: 32px;
}
.option-wrapper{
    display: inline-flex;
    margin-right: 32px;
    margin-bottom: 16px;
    .form-element{
        margin-right: 1rem;
        margin-left: 1rem;
    }
}
</style>
