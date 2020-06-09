<template>
    <button class="btn" :class="['btn-' + size, 'btn-' + type, customClass]" :disabled="isLoading || disabled" @click="callAction" :style="backgroundColor" ref="button">
        <span class="icon" v-if="$slots.default && !isLoading">
            <slot></slot>
        </span>
        <img class="loader" v-show="isLoading" :src="loaderImageUrl" />
        <span v-show="loaderText && isLoading">{{ loaderText }}</span>
        <span v-show="!isLoading">
            {{ text }}
        </span>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        action: {
            type: Function,
            required: true
        },
        async: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        },
        customClass: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loaderText: {
            type: String
        },
        loaderImage: {
            type: String
        },
        size: {
            type: String,
            validator: (value) => {
                return ['xs', 'sm', 'md', 'lg'].indexOf(value) > -1 || !value;
            },
            default: 'md'
        },
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            validator: (value) => {
                return ['danger', 'success', 'warning', 'info', 'primary', 'secondary', 'tertiary', 'dark', 'light', 'border-danger', 'border-success', 'border-warning', 'border-info', 'border-primary', 'border-secondary', 'border-tertiary','border-dark','border-light'].indexOf(value) > -1 || !value;
            }
        }
    },
    data() {
        return {
            isLoading: false,
            actions: {}
        };
    },
    methods: {
        async callAction() {
            if(this.isLoading)
                return;
            if (this.async) {
                let oldWidth = this.$refs.button.style.width;
                this.$refs.button.style.width = this.$refs.button.offsetWidth + 'px';
                this.isLoading = true;
                try {
                    await this.actions.click();
                    this.isLoading = false;
                } catch (e) {
                    this.isLoading = false;
                }
                this.$refs.button.style.width = oldWidth;
            } else {
                this.action();
            }
        }
    },
    computed: {
        backgroundColor() {
            if (this.color) {
                return {
                    'background-color': this.color
                };
            }
            return {};
        },
        loaderImageUrl() {
            if (this.loaderImage) {
                return require(this.loaderImage);
            }
            return require('../assets/loader.svg');
        }
    },
    created() {
        this.$set(this.actions, 'click', () => {
            return new Promise(async (resolve, reject) => {
                try {
                    await this.action();
                    resolve();
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }
};
</script>

