<template>
        <div class="wrapper">
            <h5>Card with Custom Content Area</h5>
            <Card
                title="John Doe"
                :options="cardOptions"
                sub-title="Developer at e9ine"
                card-media-image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                card-supporting-text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam unde consequuntur repellat quia asperiores voluptatibus consectetur repudiandae voluptate? Qui veniam quidem error quod nisi asperiores sit illo illum alias maiores.">
                <template v-slot:cardCustomContent>
                    <div class="custom-content-example">
                        <h6>Example Custom Content</h6>
                        <p class="body-s">
                            Custom content is always visible. There is no need for it to be expanded or collapsed. All padding and spacing needs to be managed within the custom content html.
                        </p>
                        <div class="highlights">
                            <img src="https://image.flaticon.com/icons/svg/2446/2446057.svg" alt="">
                            <img src="https://image.flaticon.com/icons/svg/2446/2446120.svg" alt="">
                            <img src="https://image.flaticon.com/icons/svg/2446/2446260.svg" alt="">
                            <img src="https://image.flaticon.com/icons/svg/2446/2446137.svg" alt="">
                        </div>
                    </div>
                </template>
            </Card>
        </div>
</template>

<script>
    export default {
        name: 'CardCustomSlotExample',
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
                    }]
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
    .custom-content-example {
        padding: 12px 16px 16px;
        h4 {
            margin: 0;
            color: #000;
            line-height: 28px;
        }
        p {
            font-size: 12px;
            color: #777;
        }
        .highlights {
            display: flex;
            justify-content: flex-start;
            margin: 1.5rem 0 1rem;
            img {
                height: 40px;
                margin-right: 16px;
            }
        }
    }
</style>
