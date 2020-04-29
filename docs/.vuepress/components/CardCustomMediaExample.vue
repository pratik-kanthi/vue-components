<template>
    <div class="all-wrapper">
        
        <div class="wrapper">
            <h4>Card with media content (without image)</h4>
            <Card card-supporting-text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.">
                <template v-slot:cardMediaContent>
                    <div>
                        <iframe width="100%" height="180px" src="https://www.youtube.com/embed/onOEns_MnC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCustomMediaExample',
        data () {
            return {
                cardOptions: {
                    avatarOptions: {
                        text:'John Doe',
                        imageUrl:'https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2211&q=80'
                    },
                    expandedContentTitle: 'Expanded Connections',
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
