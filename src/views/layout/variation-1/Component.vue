<template>
    <div :class="(sidebarOn == true)? 'show-sidebar':''" class="layout-variation-1">
        <div id="mobile-menu-toggle" @click="sidebarOn = !sidebarOn">
            <i class="material-icons">menu</i>
        </div>
        <slot name="sidebar"></slot>
        <slot name="topbar"></slot>
        <div class="content-view">
            <slot name="breadcrumbs"></slot>
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutVariation1',
    data() {
        return {
            sidebarOn: false
        };
    }
};
</script>
