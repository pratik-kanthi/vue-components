<template>
    <ul class="tabs" :class="[type,fill?'tabs-fill':'',align?'tabs-'+align:'',stacked?'tabs-stacked':'',wrap?'tabs-wrap':'']">
        <li v-for="(tab, key) in displayedTabs" :key="key">
            <router-link v-if="tab.path" tag="a" :to="tab.path" active-class="active">
                <span>{{ tab.name }}</span>
            </router-link>
            <a v-else @click="selectTab(tab, key)" :class="{active: active === key, disabled: tab.disabled}">
                <span>{{ tab.name }}</span>
            </a>
        </li>
        <li class="has-dropdown" v-if="limit && data.length - displayedTabs.length > 0">
            <a>
                More
                <div class="arrow-down"></div>
            </a>
            <ul class="sub-nav">
                <li v-for="(tab, subKey) in data.slice(limit)" :key="subKey + displayedTabs.length">
                    <router-link v-if="tab.path" tag="a" :to="tab.path">{{ tab.name }}</router-link>
                    <a v-else @click="selectTab(tab, subKey + displayedTabs.length)" :class="{disabled: tab.disabled}">{{ tab.name }}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        active: {
            type: Number,
            default: 0
        },
        data: {
            type: Array,
            required: true
        },
        type: {
            type: String,
            default: 'simple'
        },
        limit: {
            type: Number,
            default: 0
        },
        fill: {
            type: Boolean,
            default: false
        },
        align: {
            type: String
        },
        stacked: {
            type: Boolean,
            default: false
        },
        wrap: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        selectTab(tab, index) {
            if (tab.disabled) return false;
            this.$emit('update:active', index);
            this.$emit('changed', index);
        }
    },
    computed: {
        displayedTabs() {
            if (this.limit && !this.stacked) {
                return this.data.slice(0, this.limit);
            }
            return this.data;
        }
    }
};
</script>

