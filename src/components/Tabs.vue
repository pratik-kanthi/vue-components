<template>
    <ul class="tabs" :class="type" :style="getOverflowStyleForParent">
        <li v-for="(tab, key) in displayedTabs" :key="key">
            <router-link v-if="tab.path" tag="a" :to="tab.path" active-class="active">
                <span>{{ tab.name }}</span>
            </router-link>
            <a v-else @click="selectTab(tab, key)" :class="{active: active === key, disabled: tab.disabled}">
                <span>{{ tab.name }}</span>
            </a>
        </li>
        <li class="has-dropdown" v-if="limit && data.length - displayedTabs.length > 0">
            <a @click="showSubNav = !showSubNav">
                More
                <div class="arrow-down"></div>
            </a>
            <ul class="sub-nav" v-if="showSubNav">
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
        }
    },
    data() {
        return {
            showSubNav: false
        };
    },
    methods: {
        selectTab(tab, index) {
            if (tab.disabled) return false;
            this.$emit('update:active', index);
            this.$emit('changed', index);
        },
        getOverflowStyleForParent() {
            if (this.showSubNav == true) {
                return {
                    overflow: 'visible'
                };
            } else {
                return {
                    overflow: 'auto'
                };
            }
        }
    },
    computed: {
        displayedTabs() {
            if (this.limit && ['stacked'].indexOf(this.type) === -1) {
                return this.data.slice(0, this.limit);
            }
            return this.data;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../scss/common.scss';
.tabs {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    overflow: visible;
    li {
        cursor: pointer;
        outline: 0 !important;
        overflow: visible;
        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: $dark-grey;
            overflow: hidden;
            &.disabled {
                opacity: 0.5;
                cursor: not-allowed;
                color: $grey;
            }
            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &:focus {
                outline: 0 !important;
            }
            -webkit-tap-highlight-color: transparent !important;
        }
        &:not(.has-dropdown) {
            &:hover {
                a {
                    &:not(.disabled) {
                        color: $brand-primary;
                    }
                }
            }
        }
        &.has-dropdown {
            position: relative;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                .arrow-down {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid $brand-primary;
                    margin-left: 8px;
                }
                &:hover {
                    color: $brand-primary;
                }
            }
            .sub-nav {
                display: block;
                list-style: none;
                margin: 0;
                padding: 0;
                background: #fff;
                border: 1px solid $lighter-grey;
                position: absolute;
                right: 0;
                top: 48px;
                z-index: 10;
                li {
                    width: 150px;
                    margin-right: 0;
                    padding: 4px 0;
                    &:not(:last-child) {
                        border-bottom: 1px solid $lighter-grey;
                    }
                }
            }
        }
    }
    &.simple {
        li {
            padding: 8px;
            background-color: transparent;
            margin-right: 16px;
            a {
                width: 100%;
                text-align: center;
                &.active {
                    border-bottom: 2px solid $brand-primary;
                    span {
                        color: $brand-primary;
                    }
                }
            }
        }
    }
    &.angled {
        > li {
            text-align: center;
            position: relative;
            padding: 0 8px;
            > a {
                position: relative;
                width: 100%;
                padding: 8px 16px 8px 4px;
                border-bottom: 3px solid $lighter-grey;
                &.active {
                    border-bottom: 3px solid $brand-primary;
                    span {
                        color: $brand-primary;
                        z-index: 1;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: 0;
                        border: 1px solid $lighter-grey;
                        border-bottom: 0;
                        border-radius: 2px 0 0 0;
                        background: #fff;
                        -webkit-transform: perspective(5px) rotateX(1.4deg) translateZ(-1px);
                        transform: perspective(5px) rotateX(1.4deg) translateZ(-1px);
                        -webkit-transform-origin: 0 0;
                        transform-origin: 0 0;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                    }
                }
            }
        }
    }
    &.stacked {
        display: block;
        li {
            display: block;
            margin-bottom: 8px;
            width: 100%;
            background-color: $lighter-grey;
            border-radius: $border-radius;
            a {
                width: 100%;
                font-weight: 600;
                font-size: 14px;
                span {
                    color: $dark-grey;
                    padding: 12px;
                }
                &.active {
                    background-color: $brand-primary;
                    border-radius: $border-radius;
                    span {
                        color: #fff;
                    }
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .tabs {
        overflow-x: scroll;
        overflow-y: visible;
        &::-webkit-scrollbar {
            display: none;
        }
        li {
            flex-shrink: 0;
            a {
                overflow: hidden;
                span {
                    margin-left: 0;
                }
            }
        }
    }
}
</style>
