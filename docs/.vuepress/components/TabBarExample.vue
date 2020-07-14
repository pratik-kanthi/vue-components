<template>
    <TabBar :menu="menu"></TabBar>
</template>

<script>
export default {
    name: 'TabBarExample',
    data() {
        return {
            menu:[{
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
           
    },
};
</script>

