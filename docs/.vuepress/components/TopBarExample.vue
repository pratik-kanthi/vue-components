<template>
    <TopBar :topbar-options="topbarOptions" :avatar-options="avatarOptions" :search-options="searchOptions" :search-text.sync="searchText" logo-url="https://components9.firebaseapp.com/assets/img/logo.png" page-title="Vu[e9] Components"></TopBar>
</template>

<script>
export default {
    name: 'TopBarExample',
    data() {
        return {
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
};
</script>

