<template>
    <div>
        <h5>Simple Badge</h5>
        <Badge text="999" :size="25"></Badge>
        <h5>With Overlapping Element</h5>
        <Badge text="999" position="top-right" :size="25">
            <Button size="md" type="primary" text="Top Right"></Button>
        </Badge>
        <Badge text="999" position="top-left" :size="25">
            <Button size="md" type="primary" text="Top Left"></Button>
        </Badge>
        <Badge text="999" position="bottom-right" :size="25">
            <Button size="md" type="primary" text="Bottom Right"></Button>
        </Badge>
        <Badge text="999" position="bottom-left" :size="25">
            <Button size="md" type="primary" text="Bottom Left"></Button>
        </Badge>
        <h5>Without Text</h5>
        <Badge :size="30" overlap="circle" position="bottom-right">
            <Avatar image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" :size="80"></Avatar>
        </Badge>
        <Badge :size="20" position="bottom-right">
            <Avatar variant="rounded" image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" :size="80"></Avatar>
        </Badge>
    </div>
</template>

<script>
export default {
    name:'BadgeExample'
};
</script>

<style lang="scss" scoped>
.badge-wrapper{
    margin-right: 3rem;
    margin-bottom: 2rem;
}
</style>