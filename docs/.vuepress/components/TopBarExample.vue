<template>
    <TopBar :topbar-options="topbarOptions" :avatar-options="avatarOptions" :avatar-info-options="avatarInfoOptions" :search-options="searchOptions" :search-text.sync="searchText" :logo="logo" :page-title="pageTitle"></TopBar>
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
            logo:{
                url:"https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png",
                mobile:true
            },
            pageTitle:{
                text:"Vu[e9] Components"
            },
            avatarOptions:{
                imageUrl:"https://66.media.tumblr.com/3f6c3a89a576a4a09a2ea18c5f2d5da9/tumblr_pk0lqkbqM31ss2e34o1_1280.jpg",
                size:"48"
            },
            avatarInfoOptions:{
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

