<template>
    <div class="all-wrapper">
        <div class="wrapper">
            <h4>1. Simple Card </h4>
            <Card
                title="John Doe"
                sub-title="Developer at e9ine"
            ></Card>
        </div>
        <div class="wrapper">
            <h4>2. Card with Media Image</h4>
            <Card
                title="John Doe"
                sub-title="Developer at e9ine"
                card-media-image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                card-supporting-text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.">
            </Card>
        </div>
        <div class="wrapper">
            <h4>3. Card with Button Options and card info below the media</h4>
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
        width: 320px;
        margin-right: 16px;
        margin-bottom: 40px;
        h4 {
            margin-top: 32px;
            margin-bottom: 32px;
            color: #888;
        }
        span {
            background-color: #d21d1d;
            color: white;
            border-radius: 4px;
            padding: 2px 8px;
            margin-right: 8px;
            margin-bottom: 8px;
        }
        .description {
            margin-bottom: 16px;
        }
    }
    p {
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
</style>
