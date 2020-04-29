import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const sideBarModule = {
    state: {
        menuItems: [{
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'dashboard'
            },
            {
                name: 'Projects',
                path: '/projects',
                icon: 'business'
            },
            {
                name: 'Settings',
                path: '/settings',
                icon: 'settings',
                expanded: false,
                subItems: [{
                        name: 'Profile',
                        path: '/settings/profile',
                        icon: 'profile'
                    },
                    {
                        name: 'Globals',
                        path: '/settings/globals',
                        icon: 'globals'
                    }
                ]
            }
        ]
    }
};

export const store = new Vuex.Store({
    modules: {
        sideBarModule
    }
});
