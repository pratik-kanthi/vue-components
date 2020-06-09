<template>
    <div>
        <h1>Avatar</h1>
        <h4 class="section-title">Initials</h4>
        <avatar text="John Hugh" size="160"></avatar>
        <h4 class="section-title">Gravatar Email</h4>
        <avatar gravatar-email="jitewaboh@lagify.com" size="120"></avatar>
        <h4 class="section-title">Image Url</h4>
        <avatar image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></avatar>
        <h4 class="section-title">Square</h4>
        <avatar variant="square" image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></avatar>
        <h4 class="section-title">Rounded</h4>
        <avatar variant="rounded" image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></avatar>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar';

export default {
    name:'AvatarExample',
    components: {
        Avatar,
    } 
};
</script>

<style lang="scss" scoped>


</style>