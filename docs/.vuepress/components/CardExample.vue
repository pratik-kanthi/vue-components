<template>
    <div>
        <div class="wrapper">
            <h5>1. Simple Card </h5>
            <Card
                title="John Doe"
                sub-title="Developer at e9ine"
            ></Card>
        </div>
        <div class="wrapper">
            <h5>2. Card with Media Image</h5>
            <Card
                title="John Doe"
                sub-title="Developer at e9ine"
                card-media-image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                card-supporting-text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.">
            </Card>
        </div>
        <div class="wrapper">
            <h5>3. Card with Button Options and card info below the media</h5>
            <Card
                :options="cardOptions"
                title="John Doe"
                sub-title="Developer at e9ine"
                card-media-image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                card-supporting-text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.">
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardExample',
        data () {
            return {
                cardOptions: {
                    avatarOptions: {
                        text:'John Doe',
                        imageUrl:'https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2211&q=80'
                    },
                    actions: [{
                        name: 'Click and Nav',
                        href: 'https://www.google.com',
                        clickAction: this.sayHi
                    }, {
                        name: 'Hello',
                        clickAction: this.sayHello
                    }, {
                        name: 'Navigate',
                        href: 'https://www.yahoo.com',
                    }],
                    cardInfoLocation: 'middle'
                }
            };
        },
        methods: {
            sayHi() {
                alert('Hi');
            },
            sayHello() {
                alert('Hello');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .wrapper {
        margin-bottom: 32px;
        .card{
            width:320px;
        }
    }
</style>
