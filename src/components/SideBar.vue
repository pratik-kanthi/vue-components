<template>
    <div class="sidebar" :class="[compact?'sidebar-compact':'',primary?'sidebar-primary':'']">
        <div class="sidebar-top">
            <slot name="sidebarTop"></slot>
        </div>
        <div class="sidebar-navigation">
            <div v-for="(item,index) in menu" :key="index" class="menu-section">
                <h6 class="menu-title" v-if="item.menuTitle">{{ item.menuTitle }}</h6>
                <ul class="menu">
                    <li v-for="(route, key) in item.menuItems" :key="key" :class="{'has-dropdown':route.subItems && route.subItems.length>0}"> 
                        <router-link v-if="!route.subItems" :to="route.path" active-class="active">
                            <i class="material-icons" v-if="route.icon">{{ route.icon }}</i>
                            <span v-text="route.name"></span>
                        </router-link>
                        <a v-else @click="expandNav(route)">
                            <i class="material-icons" v-if="route.icon">{{ route.icon }}</i>
                            <span v-text="route.name"></span>
                            <i class="material-icons toggle-sub-nav" v-if="route.subItems && route.subItems.length>0">keyboard_arrow_down</i>
                        </a>
                        <ul class="sub-nav" v-if="route.subItems && route.expanded" :class="{open: route.expanded}">
                            <li>
                                <router-link :to="subRoute.path" active-class="active" v-for="(subRoute, subKey) in route.subItems" :key="subKey">
                                    <span v-text="subRoute.name"></span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sidebar-bottom">
            <slot name="sidebarBottom"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SideBar',
    props: {
        compact: {
            type: Boolean,
            default: false
        },
        primary: {
            type: Boolean,
            default: false
        },
        menu:{
            type:Array,
            required:true
        }
    },
    data() {
        return {
            routes: []
        };
    },
    methods: {
        expandNav(route) {
            route.expanded = !route.expanded;
        },
    },
    created() {
        let err = '';
        if (!this.$store || !this.$store.state.sideBarModule) {
            err = 'No sideBarModule found as part of the Vuex store. Kindly register a store with a sideBarModule';
        }
        if (err) {
            throw new Error(err);
        }
    }
};
</script>
