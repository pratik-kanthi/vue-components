import Button from '../Button';

export default {
    name: 'Modal',
    props: {
        size: {
            type: String,
            default: 'md'
        },
        show: {
            type: Boolean
        }
    },
    model: {
        prop: 'show'
    },
    render(h){
        if (this.show) {
            return h('div', {
                class: ['modal-mask', this.$attrs.hasOwnProperty('centered') ? 'centered' : null]
            }, [
                h('div', {
                    class: ['modal-wrapper', 'modal-'+this.size]
                }, [this.setupModal(h)])
            ]);
        }
    },
    methods: {
        cancel(){
            this.$emit('cancel');
        },
        save() {
            this.$emit('save');
        },
        setupModal(h) {
            return h('div', {
                class: 'modal-container'
            }, [this.setupHeader(h), this.setupBody(h), this.setupFooter(h)]); // this.setupBody(h), this.setupFooter(h)
        },
        setupHeader(h) {
            if (this.$slots.header) {
                return h('div', {
                    class: 'modal-header'
                }, this.$slots.header);
            } else if (this.$slots.title) {
                return h('div', {
                    class: 'modal-header'
                }, [
                    this.setupHeaderTitle(h, this.$slots.title),
                    this.setupHeaderCloseButton(h)
                ]);
            } else {
                return h('div', {
                    class: 'modal-header'
                }, [
                    this.setupHeaderTitle(h),
                    this.setupHeaderCloseButton(h)
                ]);
            }
        },
        setupHeaderTitle(h, slot) {
            return h('h4', {}, slot);
        },
        setupHeaderCloseButton(h) {
            const src = require('../../assets/close-dark.svg');
            return h('a', {
                class: 'modal-close',
                on: {
                    click: this.cancel
                }
            }, [
                this.setupHeaderTitle(h),
                h('img', {
                    attrs: {
                        src: src,
                        alt: 'close',
                    },
                    class: 'float-right'
                })
            ]);
        },
        setupBody(h) {
            return h('div', {
                class: 'modal-body'
            }, this.$slots.body);
        },
        /*
         * Footer should be visible with default buttons if slot not provided
         */
        setupFooter(h) {
            if (this.$slots.footer) {
                return h('div', {
                    class: 'modal-footer'
                }, this.$slots.footer);
            } else {
                return h('div', {
                    class: 'modal-footer'
                }, [
                    this.setupFooterButtons(h)
                ]);
            }
        },
        setupFooterButtons(h) {
            return [
                h(Button, {
                    props: {
                        type: 'primary',
                        action: this.save,
                        text: 'OK'
                    }
                }),
                h(Button, {
                    props: {
                        type: 'secondary',
                        action: this.cancel,
                        text: 'Cancel'
                    }
                })
            ];
        }
    },
    mounted() {
        this.$root.$el.append(this.$el);
    },
    destroyed() {
        this.$el.parentNode.removeChild(this.$el);
    }
};
