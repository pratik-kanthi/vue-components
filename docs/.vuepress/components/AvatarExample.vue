<template>
<div class="components">
    <div class="item">
        <h4>Initials</h4>
        <avatar text="John Hugh" size="160"></avatar>
    </div>
    <div class="item">
        <h4>Gravatar Email</h4>
        <avatar gravatar-email="jitewaboh@lagify.com" size="120"></avatar>
    </div>
    <div class="item">
        <h4>Image Url</h4>
        <avatar image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg" size="80"></avatar>
    </div>
</div>
</template>

<script>
export default {
    name: "AvatarExample"
}
</script>

<style>
.components {
    display: flex;
    align-items:top;
    justify-content: space-between;
}
</style>
