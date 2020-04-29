<template>
    <div class="avatar-info">
        <div class="avatar-wrapper">
            <slot name="avatar">

            </slot>
        </div>
        <div class="info-wrapper">
            <h4>{{ title }}</h4>
            <h6>
                <a class="link" :href="subtitleOptions.href" @click="handleAction(subtitleOptions.clickAction)" v-if="subtitleOptions.href || subtitleOptions.clickAction">
                    {{ subtitle }}
                </a>
                <span v-if="!subtitleOptions.href && !subtitleOptions.clickAction">
                    {{ subtitle }}
                </span>
            </h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AvatarInfo',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        subtitleOptions: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        handleAction(fn) {
            if(fn) {
                fn();
            } else {
                return false;
            }
        }
    },
    computed: {
        
    }
};
</script>

<style lang="scss" scoped>
    .avatar-info {
        display: inline-flex;
        justify-content: flex-start;
        .avatar-wrapper {
            margin-right: 12px;
        }
        .info-wrapper {
            padding-top: 2px;
            h4 {
                font-size: 18px;
                font-weight: 600;
            }
            h6 {
                font-size: 14px;
                font-weight: 400;
                a {
                    color: $brand-primary;
                }
            }
        }
    }
</style>
