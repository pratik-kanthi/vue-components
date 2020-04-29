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

<style lang="scss" scoped>
.topbar {
	background: #fafafc;
	box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
    height: 44px;
    z-index: 1;
}
.content-view {
	position: fixed;
	top: 44px;
	left: 0;
	right: 0;
    bottom: 0;
	z-index: 0;
	padding: 16px;
	background-color: #fff;
	overflow: scroll;
}
.tabbar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	padding: 0 8px;
	backdrop-filter: blur(10px);
	background: rgba(249,249,249,0.94);
	box-shadow: 0 0 0 0 rgba(0,0,0,0.30);
	border-top: 1px solid rgba(0,0,0,0.10);
    height: 49px;
    z-index: 1;
	#navigation {
		width: 100%;
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: row;
			li {
				list-style: none;
				flex-grow: 1;
				flex-basis: 0;
				text-align: center;
				a {
					display: flex;
					color: #969698;
					justify-content: space-around;
					padding: 8px 0;
					.menu-item {
						display: flex;
						align-items: center;
						font-size: 12px;
						i {
							margin-right: 4px;
							font-size: 24px;
							margin-top: -2px;
						}
					}
					&.active {
						color: $brand-primary !important;
					}
				}
			}
		}
	}
}

#mobile-menu-toggle {
	position: fixed;
    top: 8px;
    right: 16px;
	z-index: 2;
	i {
        font-size: 24px;
        color: #fff;
	}
}

#back-nav {
	position: absolute;
    top: 8px;
    left: 16px;
	z-index: 2;
	i {
        font-size: 24px;
        color: #fff;
	}
}

.pageTransition-enter-active, .pageTransition-leave-active {
  transition: opacity .2s;
}
.pageTransition-enter, .pageTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.backTransition-enter-active, .backTransition-leave-active {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}
.backTransition-leave-active {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

.sidebar {
	position: fixed;
    display: flex;
    padding: 32px;
    width: 320px;
	flex-flow: column nowrap;
	height: 100%;
    border-right: 1px solid $lighter-grey;
    background-color: #fff;
    background: rgba(249,249,249,0.60);
	box-shadow: 0 0 0 0 rgba(0,0,0,0.30);
	border-left: 1px solid rgba(0,0,0,0.10);
	backdrop-filter: blur(4px);
    z-index: 2;
	right: -330px;
	top: 44px;
    transition: right 500ms;
}

.show-sidebar {
    .sidebar {
        right: 0;
    }
}

@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
	.tabbar {
		#navigation {
			ul {
				li {
					a {
						.menu-item {
							display: block;
							i {
								display: block;
								margin-right: 0;
								font-size: 24px;
							}
							span {
								display: block;
								font-size: 11px;
								line-height: 12px;
							}
						}
					}
				}
			}
		}
	}
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	.tabbar {
		height: 72px;
	}
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	.tabbar {
		height: 72px;
	}
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
	.tabbar {
		height: 72px;
	}
}
</style>
