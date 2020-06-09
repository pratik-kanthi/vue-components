<template>
    <div>
        <h1 class="page-title">Badge</h1>
        <h4 class="section-title">With Text</h4>
        <Badge text="999" position="top-right" size="25">
            <Button size="md" type="primary" text="Top Right" :action="buttonClicked"></Button>
        </Badge>
        <Badge text="999" position="top-left" size="25">
            <Button size="md" type="primary" text="Top Left" :action="buttonClicked"></Button>
        </Badge>
        <Badge text="999" position="bottom-right" size="25">
            <Button size="md" type="primary" text="Bottom Right" :action="buttonClicked"></Button>
        </Badge>
        <Badge text="999" position="bottom-left" size="25">
            <Button size="md" type="primary" text="Bottom Left" :action="buttonClicked"></Button>
        </Badge>
        <h4 class="section-title">Without Text</h4>
        <Badge size="28" overlap="circle" position="bottom-right">
            <Avatar image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></Avatar>
        </Badge>
        <Badge size="30" position="bottom-right">
            <Avatar variant="rounded" image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></Avatar>
        </Badge>
    </div>
</template>

<script>
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';

export default {
    name:'BadgeExample',
    components: {
        Badge,
        Button,
        Avatar
    },
    methods: {
        buttonClicked() {
            alert('Button Clicked Acknowledgement');
        }
    },   
};
</script>

<style lang="scss" scoped>
.badge-wrapper{
    margin-right: 3rem;
}
</style>