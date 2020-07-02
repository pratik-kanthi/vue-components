<template>
    <div class="components">
        <div class="item">
            <h5>Initials</h5>
            <avatar text="John Hugh" size="160"></avatar>
        </div>
        <div class="item">
            <h5>Gravatar Email</h5>
            <avatar gravatar-email="jitewaboh@lagify.com" size="120"></avatar>
        </div>
        <div class="item">
            <h5>Image Url</h5>
            <avatar
                image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg"
                size="80"
            ></avatar>
        </div>
         <div class="item">
            <h5>Rounded</h5>
            <avatar
                variant="rounded"
                image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg"
                size="80"
            ></avatar>
        </div>
        <div class="item">
            <h5>Square</h5>
            <avatar
                variant="square"
                image-url="https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg"
                size="80"
            ></avatar>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'AvatarExample'
};
</script>

