<template>
    <div class="page layout-variation-2" :class="[sidebarOn == true ? 'show-sidebar' : '',sidebar==true?'has-sidebar':'',showBackBtn && $route.fullPath.split('/').length> 2?'show-back-btn':'']">
        <a id="mobile-menu-toggle" v-if="sidebar" @click="sidebarOn = !sidebarOn">
            <i class="material-icons animated fadeInRight faster" v-if="!sidebarOn" :style="{ color: menuIconColor }">menu</i>
            <i class="material-icons animated rotateIn faster" v-if="sidebarOn" :style="{ color: menuIconColor }">cancel</i>
        </a>
        <transition name="backTransition">
            <a id="back-nav" v-if="showBackBtn && $route.fullPath.split('/').length> 2" @click="$router.go(-1)">
                <i class="material-icons" :style="{ color: menuIconColor }">keyboard_backspace</i>
            </a>
        </transition>
        <div class="topbar">
            <slot name="topbar"></slot>
        </div>
        <div v-if="sidebar">
            <slot name="sidebar"></slot>
        </div>
        <slot name="globalSearch"></slot>
        <div class="content-view">
            <slot name="breadcrumbs"></slot>
            <div class="content-wrapper">
                <transition name="pageTransition" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <slot name="tabbar"></slot>
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
            default: '#696974'
        },
        showBackBtn:{
            type:Boolean,
            default:false
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
    mounted(){
        this.$on('toggle-sidebar', function() {
            this.sidebarOn=false;
        });
    }
};
</script>