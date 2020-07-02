<template>
    <div class="app">
        <LayoutVariation1>
            <template v-slot:sidebar>
                <SideBar :compact="true" :primary="false" :menu="menu">
                    <template v-slot:sidebarTop>
                        <div class="logo-wrapper">
                            <img src="https://components9.firebaseapp.com/assets/img/logo.png" alt="">
                        </div>
                        <h6>E9ine Ltd.</h6>
                        <p>ID 12354320</p>
                    </template>
                    <template v-slot:sidebarBottom>
                        <div class="footer-wrapper">
                            <span>Powered by</span> <img src="https://components9.firebaseapp.com/assets/img/logo.png" alt="">
                        </div>
                    </template>
                </SideBar>
            </template>
            <template v-slot:topbar>
                <TopBar :topbar-options="topbarOptions" :avatar-options="avatarOptions" :search-options="searchOptions" :search-text.sync="searchText" logo-url="https://components9.firebaseapp.com/assets/img/logo.png" page-title="Vu[e9] Components"></TopBar>
            </template>
            <template v-slot:breadcrumbs>
                <Breadcrumbs></Breadcrumbs>
            </template>
        </LayoutVariation1>
    </div>
</template>

<script>
import LayoutVariation1 from '@/views/layout/variation-1/Component';
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
    components: {
        LayoutVariation1,
        SideBar,
        TopBar,
        Breadcrumbs
    },
    data() {
        return {
            menu:this.$store.state.sideBarModule.menu,
            searchText:'',
            searchOptions:{
                placeholder:'Type to search..',
                clickAction:function () {
                    console.log('search clicked');
                },
                mobile:true
            },
            avatarOptions:{
                title:'Soumya Kanthi',
                subtitle:'Logout',
                subtitleOption: {
                    clickAction:function () {
                        console.log('logout');
                    },
                },
                avatarActions: [{
                    name: 'Account',
                    href: 'https://www.google.com',
                }, {
                    name: 'Navigate',
                    href: 'https://www.yahoo.com',
                }],
            },
            topbarOptions:[{
                icon:'notifications_none',
                text:'Notifications',
                type:'icon',
                pending:true,
                clickAction:function () {
                    console.log('notifications');
                },
                mobile:true
            },{
                icon:'chat_bubble_outline',
                text:'Messages',
                type:'icon',
                clickAction:function () {
                    console.log('messages');
                },
            },
            {
                icon:'add',
                text:'New Todo',
                type:'btn',
                btnClass:'primary',
                clickAction:function () {
                    console.log('new todo');
                },
            }]
        };
    },
    methods: {
        logoutUser() {
            console.log('logout');
        },
    },
    watch: {
        searchText(newVal, oldVal) {
            console.log(oldVal+':'+newVal);
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