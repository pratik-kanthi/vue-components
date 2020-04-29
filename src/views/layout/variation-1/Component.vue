<template>
    <div :class="(sidebarOn == true)? 'show-sidebar':''">
        <div id="mobile-menu-toggle" @click="sidebarOn = !sidebarOn">
            <i class="material-icons">menu</i>
        </div>
        <div class="sidebar">
            <slot name="sidebar"></slot>
        </div>
        <div class="topbar">
            <slot name="topbar"></slot>
        </div>
        <slot name="globalSearch"></slot>
        <div class="content-view">
            <router-view></router-view>
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

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	display: flex;
    width: 240px;
	flex-flow: column nowrap;
	height: 100%;
    border-right: 1px solid $lighter-grey;
    z-index: 0;
}
.topbar {
    position: fixed;
    z-index: 0;
	height: 64px;
    left: 240px;
	border-bottom: 1px solid $lighter-grey;
	top: 0;
	right: 0;
	padding: 0 16px;
	h4.page-title {
		font-size: 20px;
		color: $brand-primary;
		line-height: 64px;
		margin-bottom: 0;
	}
}
.content-view {
    position: fixed;
    z-index: 0;
	background-color: #f9f9f9;
    left: 240px;
	padding: 16px;
	top: 64px;
	right: 0;
	bottom: 0;
	overflow: scroll;
}

#mobile-menu-toggle {
	display: none;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
	.sidebar {
        left: -240px;
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
		left: 16px;
		z-index: 1;
		color: $brand-secondary;
		i {
			font-size: 24px;
        }
        transition: transform 500ms;
    }
    .show-sidebar {
        .sidebar {
            transform: translateX(240px);
        }
        .content-view {
            transform: translateX(240px);
        }
        .topbar {
            transform: translateX(240px);
        }
        #mobile-menu-toggle {
            transform: translateX(240px);
        }
    }
}
</style>
