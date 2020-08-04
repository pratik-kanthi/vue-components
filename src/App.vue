<template>
    <div class="app">
        <LayoutVariation2 :show-back-btn="true">
            <template v-slot:sidebar>
                <SideBar :compact="false" :primary="false" :menu="menu">
                    <template v-slot:sidebarTop>
                        <div class="logo-wrapper">
                            <img src="https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png" alt="" />
                        </div>
                        <h6>E9ine Ltd.</h6>
                        <p>ID 12354320</p>
                    </template>
                    <template v-slot:sidebarBottom>
                        <div class="footer-wrapper"><span>Powered by</span> <img src="https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png" alt="" /></div>
                    </template>
                </SideBar>
            </template>
            <template v-slot:topbar>
                <TopBar :topbar-options="topbarOptions" :avatar-options="avatarOptions" :search-options="searchOptions" :search-text.sync="searchText" :page-title="pageTitle" :logo="logo"></TopBar>
            </template>
            <template v-slot:breadcrumbs>
                <Breadcrumbs></Breadcrumbs>
            </template>
            <template v-slot:tabbar>
                <TabBar :menu="tabBarMenu"></TabBar>
            </template>
        </LayoutVariation2>
    </div>
</template>

<script>
import LayoutVariation2 from '@/views/layout/variation-2/Component';
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import TabBar from '@/components/TabBar';
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
    components: {
        LayoutVariation2,
        SideBar,
        TopBar,
        TabBar,
        Breadcrumbs
    },
    data() {
        return {
            menu: this.$store.state.sideBarModule.menu,
            tabBarMenu: this.$store.state.navModule.menuItems,
            searchText: '',
            searchOptions: {
                placeholder: 'Type to search..',
                clickAction: function() {
                    console.log('search clicked');
                },
                mobile: true
            },
            logo: {
                url: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png',
                mobile: false
            },
            pageTitle: {
                text: 'Vu[e9] Components',
                align: 'left',
                mobile: true
            },
            avatarOptions: {
                title: 'Soumya Kanthi',
                subtitle: 'Logout',
                imageUrl: 'https://66.media.tumblr.com/3f6c3a89a576a4a09a2ea18c5f2d5da9/tumblr_pk0lqkbqM31ss2e34o1_1280.jpg',
                size: 36,
                subtitleOptions: {
                    href: 'https://www.google.com'
                },
                avatarActions: [
                    {
                        name: 'Account',
                        href: 'https://www.google.com'
                    },
                    {
                        name: 'Navigate',
                        href: 'https://www.yahoo.com'
                    }
                ]
            },
            topbarOptions: [
                {
                    icon: 'notifications_none',
                    text: 'Notifications',
                    type: 'icon',
                    pending: true,
                    clickAction: function() {
                        console.log('notifications');
                    },
                    mobile: true
                },
                {
                    icon: 'chat_bubble_outline',
                    text: 'Messages',
                    type: 'icon',
                    clickAction: function() {
                        console.log('messages');
                    },
                    mobile: true
                },
                {
                    text: 'New Todo',
                    type: 'btn',
                    btnClass: 'primary',
                    icon: 'add_circle_outline',
                    clickAction: function() {
                        console.log('new todo');
                    },
                    mobile: false
                }
            ]
        };
    },
    methods: {
        logoutUser() {
            console.log('logout');
        }
    },
    watch: {
        searchText(newVal, oldVal) {
            console.log(oldVal + ':' + newVal);
        }
    }
};
</script>

<style lang="scss">
.app {
    .sidebar {
        .sidebar-top {
            text-align: center;
            padding: 24px;

            .logo-wrapper {
                width: 80px;
                margin: 0 auto;
            }

            h6 {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
            }

            p {
                font-size: 0.75rem;
                margin-bottom: 0;
            }
        }

        .sidebar-bottom {
            .footer-wrapper {
                padding: 1rem;
                font-size: 0.75rem;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 25px;
                    margin-left: 0.5rem;
                }
            }
        }

        &-primary {
            .sidebar-top {
                h6 {
                    color: $white;
                }

                p {
                    color: $light;
                }
            }

            .sidebar-bottom {
                .footer-wrapper {
                    color: $white;
                }
            }
        }
    }
}
</style>
