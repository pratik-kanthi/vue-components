<template>
    <div>
        <div id="sidebar-top">
            <slot name="sidebarTop"></slot>
        </div>
        <div id="navigation">
            <ul class="menu">
                <li v-for="(route, key) in $store.state.sideBarModule.menuItems" :key="key" :class="{'flex-wrap': route.subItems}">
                    <router-link v-if="!route.subItems" :to="route.path" active-class="active">
                        <a>
                            <i class="material-icons">{{ route.icon || 'No icon' }}</i>
                            <span v-text="route.name"></span>
                        </a>
                    </router-link>
                    <a v-else @click="expandNav(route)">
                        <i class="material-icons">{{ route.icon || 'No icon' }}</i>
                        <span v-text="route.name"></span>
                    </a>
                    <ul class="sub-nav" v-if="route.subItems && route.expanded" :class="{open: route.expanded}">
                        <router-link tag="li" :to="subRoute.path" active-class="active" v-for="(subRoute, subKey) in route.subItems" :key="subKey">
                            <a>
                                <span v-text="subRoute.name"></span>
                            </a>
                        </router-link>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="sidebar-bottom">
            <slot name="sidebarBottom"></slot>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'SideBar',
    data() {
        return {
            routes: []
        };
    },
    methods: {
        expandNav(route) {
            route.expanded = !route.expanded;
        },
        ...mapGetters(['getUser'])
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

<style lang="scss" scoped>
.sidebar {
	position: relative;
}
#sidebar-top {
	padding: 32px 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: #fff;
}
#sidebar-bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}
#navigation {
	.menu {
		list-style: none;
		margin: 0 0 0;
		width: 100%;
		padding-left: 0;
		li {
			width: 100%;
			height: 48px;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			&.flex-wrap {
				flex-wrap: wrap;
			}
			&:hover {
				background-color: $lighter-grey;
			}
			a {
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-items: center;
				width: inherit;
				height: 100%;
				flex-basis: 100%;
				font-size: 16px;
				text-decoration: none;
				i,
				span {
					color: $grey;
					margin-left: 24px;
					width: 24px;
				}
				&.active {
					background-color: mix(#000, $brand-primary, 10%);
					a {
						i,
						span {
							color: #fff;
							text-decoration: none;
						}
					}
				}
			}
			ul.sub-nav {
				overflow: hidden;
				position: relative;
				height: 0;
				width: 100%;
				padding-left: 0;
				background-color: $body-background;
				&.open {
					height: auto;
				}
				> li {
					margin-left: 36px;
					border-left: 3px solid $brand-primary;
					display: block;
					height: 40px;
					&:hover {
						background-color: $body-background;
					}
					> a {
						display: flex;
						flex-flow: row nowrap;
						justify-content: flex-start;
						align-items: center;
						width: inherit;
						position: relative;
						i {
							margin-right: 5px;
							color: #ddd;
						}
						span {
							margin-left: 36px;
						}
						&::before {
							content: '';
							position: absolute;
							width: 7px;
							height: 7px;
							left: -5px;
							top: 50%;
							background-color: $brand-primary;
							margin-top: -3px;
							border-radius: 50px;
						}
						&::after {
							content: '';
							width: 30px;
							height: 30px;
							border: 1px solid $brand-secondary;
							position: absolute;
							left: -15px;
							top: 50%;
							margin-top: -15px;
							border-radius: 50px;
							opacity: 0;
						}
						&:hover {
							&::after {
								opacity: 1;
								border-color: $brand-primary;
								width: 11px;
								height: 11px;
								left: -8px;
								margin-top: -6px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
