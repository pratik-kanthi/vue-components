<template>
    <transition name="fade">
        <div v-if="show" :class="{'relative': relative}">
            <div class="overlay" :style="getOpacity">
                <img src="../assets/close.svg" class="close" v-show="showClose && !relative" @click="close" />
            </div>
            <div class="content" :class="customContentClass">
                <slot></slot>
                <img src="../assets/close.svg" class="close" v-show="showClose && relative" @click="close" />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Overlay',
    props: {
        customContentClass: {
            type: String,
        },
        show: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: true
        },
        relative: {
            type: Boolean,
            default: false
        },
        opacity: {
            type: Number,
            validator: (value) => {
                return !value || (value <= 1 && value > 0);
            }
        }
    },
    methods: {
        close() {
            this.$emit('update:show', false);
        }
    },
    computed: {
        getOpacity() {
            return {
                'opacity': this.opacity
            };
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .relative {
        position: relative;
        width: inherit;
        height: inherit;
        .overlay {
            position: absolute;
        }
    }
    .overlay {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        position: fixed;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.46;
        height: 100%;
        background-color: rgb(33, 33, 33);
        z-index: 990;
        .close {
            position: fixed;
            border-radius: 50%;
            padding: 8px;
            height: 20px;
            width: 20px;
            &:hover {
                background-color: $dark-grey;
            }
        }
    }
    .content {
        position: absolute;
        z-index: 991;
        height: 100%;
        width: 100%;
        .close {
            position: absolute;
            height: 16px;
            width: 16px;
            opacity: 0.5;
            &:hover {
                opacity: 1;
            }
        }
    }
    .close {
        right: 16px;
        top: 16px;
        font-size: 24px;
        cursor: pointer;
        z-index: 992;
        &:after {
            content: 'x';
        }
    }
</style>
