<template>
    <div class="card">
        <div class="card-container">
            <div class="card-info" v-if="!options.cardInfoLocation || options.cardInfoLocation == 'top'">
                <Avatar :text="options.avatarOptions.text" :image-url="options.avatarOptions.imageUrl" size="48" v-if="options.avatarOptions"></Avatar>
                <div class="details">
                    <h6 v-text="title"></h6>
                    <p class="subtitle-s" v-text="subTitle"></p>
                </div>
            </div>
            <div class="card-media">
                <div class="card-media-image" v-if="cardMediaImage" :style="{'background-image': 'url(' + cardMediaImage + ')', height: cardMediaImageHeight + 'px'}"></div>
                <div class="card-media-content" v-else>
                    <slot name="cardMediaContent"></slot>
                </div>
            </div>
            <div class="card-info" v-if="options.cardInfoLocation == 'middle'">
                <Avatar :text="options.avatarOptions.text" :image-url="options.avatarOptions.imageUrl" size="48" v-if="options.avatarOptions"></Avatar>
                <div>
                    <h6 v-text="title"></h6>
                    <p class="subtitle-s" v-text="subTitle"></p>
                </div>
            </div>
            <div class="card-supporting" v-if="cardSupportingText">
                <p class="body-s" v-text="cardSupportingText"></p>
            </div>
            <div class="card-custom" v-if="$slots.cardCustomContent">
                <hr />
                <div class="card-custom-content">
                    <div class="card-custom-content-details">
                        <slot name="cardCustomContent"></slot>
                    </div>
                </div>
            </div>
            <div class="card-expanded" v-if="$slots.cardExpandedContent">
                <hr />
                <div class="card-expanded-content">
                    <div class="card-expanded-content-details" v-show="toggle">
                        <slot name="cardExpandedContent"></slot>
                    </div>
                    <a @click="toggle = !toggle" class="link expand" v-if="!options.expandedContentTitle">{{ toggle ? 'Collapse' : 'Expand' }}</a>
                    <a @click="toggle = !toggle" class="link expand" v-if="options.expandedContentTitle">{{ toggle ? 'Collapse' : options.expandedContentTitle }}</a>
                </div>
            </div>
            <div class="card-actions" v-if="options.actions">
                <a class="link" v-for="(action, key) in options.actions" :key="key" :href="action.href" @click="handleAction(action.clickAction)">
                    {{ action.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from './Avatar';

export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: 'Card Title'
        },
        subTitle: {
            type: String,
            default: 'This is the card description.'
        },
        cardMediaImage: {
            type: String,
            validator: (value) => {
                return value.substring(0, 4) == 'http';
            }
        },
        cardMediaImageHeight: {
            type: String,
            default: '160'
        },
        cardSupportingText: {
            type: String
        },
        options: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    components: {
        Avatar
    },
    data() {
        return {
            toggle: false
        };
    },
    methods: {
        handleAction(fn) {
            if (fn) {
                fn();
            } else {
                return false;
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import '../scss/common.scss';
.card {
    width: 100%;
    overflow: hidden;
    background-color: $white;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    &-container {
        .card-info {
            padding: 1rem;
            justify-content: flex-start;
            align-items: center;
            display: flex;
            .details {
                width: 100%;
            }
            .avatar {
                margin-right: 1rem;
            }
            h6 {
                margin: 0;
                line-height: 24px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 92%;
            }
        }
        .card-media {
            &-image {
                position: relative; // Child element `__media-content` has `position: absolute`
                box-sizing: border-box;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }
        .card-supporting {
            padding: 1rem;
        }
        .card-expanded,
        .card-custom {
            position: relative;
            hr {
                border: 0;
                height: 1px;
                background-color: $line-color !important;
                box-shadow: none;
                border-style: solid;
                margin: 0;
            }
            &-content {
                a.expand {
                    display: block;
                    padding: 16px;
                    border-bottom: 1px solid $line-color;
                }
            }
        }
        .card-actions {
            justify-content: space-between;
            width: 100%;
            height: auto;
            max-height: none;
            padding: 1rem;
            text-align: left;
            a {
                margin-right: 8px;
            }
        }
    }
}

@media (max-width: 767px) {
    .card {
        &-container {
            .card-info {
                padding: 0.6rem;
                h6 {
                    font-size: 1rem;
                    line-height: 24px;
                }
            }
        }
    }
}
</style>
