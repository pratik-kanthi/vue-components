<template>
    <div class="app">
        <LayoutVariation3 :show-back-btn="true" :topbar-left-options="topbarLeftOptions" :topbar-right-options="topbarRightOptions" :search-options="searchOptions" :search-text.sync="searchText">
            <template v-slot:tabbar>
                <TabBar :menu="tabBarMenu"></TabBar>
            </template>
        </LayoutVariation3>
    </div>
</template>

<script>
import LayoutVariation3 from '@/views/layout/variation-3/Component';
import TabBar from '@/components/TabBar';

export default {
    components: {
        LayoutVariation3,
        TabBar
    },
    data() {
        return {
            tabBarMenu: this.$store.state.navModule.menuItems,
            searchText: '',
            searchOptions: {
                placeholder: 'Type to search..'
            },
            topbarLeftOptions: [
                {
                    text: 'Edit',
                    clickAction: function() {
                        console.log('notifications');
                    }
                }
            ],
            topbarRightOptions: [
                {
                    icon: 'notifications_none',
                    text: 'Notifications',
                    type: 'icon',
                    pending: true,
                    clickAction: function() {
                        console.log('edit');
                    }
                },
                {
                    icon: 'chat_bubble_outline',
                    text: 'Messages',
                    type: 'icon',
                    href: 'https://www.google.com'
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
