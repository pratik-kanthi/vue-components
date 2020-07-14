import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const sideBarModule = {
    state: {
        menu:[{
            menuItems: [{
                name: 'Avatar',
                path: '/avatar',
                icon:'person'
            },
            {
                name: 'Avatar Info',
                path: '/avatar-info',
                icon:'description'
                
            },
            {
                name: 'Avatar Group',
                path: '/avatar-group',
                icon:'people'
                
            },
            {
                name: 'Badge',
                path: '/badge',
                icon:'filter_9'
                
            },
            {
                name: 'Address Finders',
                path: '/address-finders',
                icon:'business',
                expanded: false,
                subItems: [{
                    name: 'Google Address Finder',
                    path: '/address-finders/google-address-finder',
                    
                }
                ]
            },
            {
                name: 'Breadcrumbs',
                path: '/breadcrumbs',
                icon:'menu'
                
            },
            {
                name: 'Buttons',
                path: '/buttons',
                icon:'mouse'
                
            },
            {
                name: 'Card',
                path: '/card',
                icon:'payment'
                
            },
            {
                name: 'Tabs',
                path: '/tabs',
                icon:'link'
                
            },
            {
                name: 'Color Picker',
                path: '/color-picker',
                icon:'palette'
            },
            {
                name: 'Chips',
                path: '/chips',
                icon:'memory'
            },
            {
                name: 'Progress Bar',
                path: '/progress-bar',
                icon:'hourglass_full'
            },
            {
                name: 'Stepper',
                path: '/stepper',
                icon:'more_horiz'
            },
            {
                name: 'Charts',
                path: '/charts',
                icon:'bar_chart'
            },
            {
                name: 'Table',
                path: '/table',
                icon:'table_chart'
            },
            {
                name: 'Panel',
                path: '/panel',
                icon:'chrome_reader_mode'
            },
            {
                name: 'Range',
                path: '/range',
                icon:'hdr_strong'
            },
            {
                name: 'Tooltip',
                path: '/tooltip',
                icon:'info'
            },
            {
                name: 'Overlays',
                path: '/overlays',
                icon:'layers'
            },
            {
                name: 'Shimmer',
                path: '/shimmer',
                icon:'calendar_view_day'
            },
            {
                name: 'Calendar',
                path: '/calendar',
                icon:'calendar_view_day'
            },
            {
                name: 'Selection Indicators',
                path: '/selection-indicators',
                icon:'calendar_view_day'
            },
            {
                name: 'Timepicker',
                path: '/timepicker',
                icon:'calendar_view_day'
            },
            {
                name: 'Modal',
                path: '/modal',
                icon:'filter_9'
                
            }
            ]
        },{
            menuTitle:'Views',
            menuItems: [ {
                name: 'Layout',
                path: '/layout',
                icon:'view_compact',
                expanded: false,
                subItems: [{
                    name: 'Variation 1',
                    path: '/layout/variation-1',   
                },
                {
                    name: 'Variation 2',
                    path: '/layout/variation-2',
                    
                }
                ]
            },
            ]
        }
        ],
    }
};

const navModule={
    state:{
        menuItems:[{
            name: 'Dashboard',
            path: '/dashboard',
            icon:'dashboard'
        },
        {
            name: 'Jobs',
            path: '/jobs',
            icon:'assignment_turned_in',
            badgeOptions:{
                size:20,
                color:'#FC5A5A',
                position:'top-right',
                text:'999'
            }
            
        },
        {
            name: 'Payments',
            path: '/payments',
            icon:'post_add'
            
        },
        {
            name: 'Profile',
            path: '/profile',
            icon:'person_outline'
            
        }]
    }
};

export const store = new Vuex.Store({
    modules: {
        sideBarModule,
        navModule
    }
});
