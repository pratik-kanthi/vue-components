<template>
    <div class="page" :class="sidebarOn == true ? 'show-sidebar' : ''">
        <div id="mobile-menu-toggle" v-if="sidebar" @click="sidebarOn = !sidebarOn">
            <i class="material-icons animated fadeInRight faster" v-if="!sidebarOn" :style="{ color: menuIconColor }">menu</i>
            <i class="material-icons animated rotateIn faster" v-if="sidebarOn" :style="{ color: menuIconColor }">cancel</i>
        </div>
        <transition name="backTransition">
            <div id="back-nav" v-if="$route.fullPath.split('/').length> 2" @click="$router.go(-1)">
                <i class="material-icons" :style="{ color: menuIconColor }">keyboard_backspace</i>
            </div>
        </transition>
        <div class="topbar">
            <slot name="topbar"></slot>
        </div>
        <div class="sidebar" v-if="sidebar">
            <slot name="sidebar"></slot>
        </div>
        <slot name="globalSearch"></slot>
        <div class="content-view">
            <transition name="pageTransition" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="tabbar" v-if="$store.state.navModule && $store.state.navModule.menuItems && $store.state.navModule.menuItems.length > 0">
            <div id="navigation">
                <ul class="menu">
                    <li v-for="(route, key) in $store.state.navModule.menuItems" :key="key">
                        <router-link v-if="!route.subItems" :to="route.path" active-class="active">
                            <div class="menu-item">
                                <i class="material-icons">{{ route.icon || 'No icon' }}</i>
                                <span v-text="route.name"></span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutVariation2',
    props: {
        sidebar: {
            type: Boolean,
            default: true
        }, 
        menuIconColor: {
            type: String,
            default: '#000000'
        }
    },
    data() {
        return {
            sidebarOn: false
        };
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
};
</script>