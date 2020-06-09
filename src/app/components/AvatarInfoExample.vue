<template>
    <div>
        <AvatarInfo :title="avatarOptions.title" :subtitle="avatarOptions.subtitle" :subtitle-options="avatarOptions.subtitleOption" :avatar-actions="avatarOptions.avatarActions">
            <template v-slot:avatar>
                <Avatar image-url="https://66.media.tumblr.com/3f6c3a89a576a4a09a2ea18c5f2d5da9/tumblr_pk0lqkbqM31ss2e34o1_1280.jpg" size="48"></Avatar>
            </template>
        </AvatarInfo>
    </div>
</template>

<script>
import AvatarInfo from '@/components/AvatarInfo';
import Avatar from '@/components/Avatar';
export default {
    name:'AvatarInfoExample',
    components: {
        AvatarInfo,
        Avatar
    },
    data() {
        return {
            avatarOptions:{
                title:'Soumya Kanthi',
                subtitle:'Logout',
                subtitleOption: {
                    clickAction: this.logoutUser
                },
                avatarActions: [{
                    name: 'Account',
                    href: 'https://www.google.com',
                }, {
                    name: 'Navigate',
                    href: 'https://www.yahoo.com',
                }],
            },
        };
    },
};
</script>