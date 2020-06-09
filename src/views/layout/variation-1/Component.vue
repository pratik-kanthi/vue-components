<template>
    <div :class="(sidebarOn == true)? 'show-sidebar':''">
        <div id="mobile-menu-toggle" @click="sidebarOn = !sidebarOn">
            <i class="material-icons">menu</i>
        </div>
        <slot name="sidebar"></slot>
        <slot name="topbar"></slot>
        <slot name="globalSearch"></slot>
        <div class="content-view">
            <Breadcrumbs></Breadcrumbs>
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
export default {
    name: 'LayoutVariation1',
    components: {
        Breadcrumbs,
    },
    data() {
        return {
            sidebarOn: false
        };
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
    border-right: $border-width solid $line-color;
    z-index: 0;
}
.topbar {
    position: fixed;
    z-index: 1;
    left: $sidebar-width;
	border-bottom: $border-width solid $line-color;
	top: 0;
	right: 0;
}
.content-view {
    position: fixed;
    z-index: 0;
    left: $sidebar-width;
	top: $topbar-height;
	right: 0;
	bottom: 0;
    overflow-y: scroll;
    .content-wrapper{
        padding: $default-content-padding;
    }
}

#mobile-menu-toggle {
	display: none;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
	.sidebar {
        left: -$sidebar-width;
        transition: transform 500ms;
	}
	.content-view {
        left: 0 !important;
        transition: transform 500ms;
        padding: 0px;
	}
	.topbar {
		left: 0 !important;
        padding-left: 48px;
        transition: transform 500ms;
	}
	#mobile-menu-toggle {
		display: block;
		position: fixed;
		top: 20px;
		left: $default-content-padding;
		z-index: 2;
		color: $brand-secondary;
		i {
			font-size: 1.5rem;
        }
        transition: transform 500ms;
    }
    .show-sidebar {
        .sidebar {
            transform: translateX($sidebar-width);
        }
        .content-view {
            transform: translateX($sidebar-width);
        }
        .topbar {
            transform: translateX($sidebar-width);
        }
        #mobile-menu-toggle {
            transform: translateX($sidebar-width);
        }
    }
}
</style>
