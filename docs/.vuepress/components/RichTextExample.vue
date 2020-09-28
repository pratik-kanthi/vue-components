<template>
    <div class="app">
        <RichText
            :options="options"
            :attachments="attachments"
            :remove-attachment="remoteAttachment"
            :add-attachment="addAttachment"
            :preview-attachment="previewAttachment"
            :send="send"
            ref="richTextEditor"
        />
        <ImageSelector :show="isShowImageSelector" @close="close" />
    </div>
</template>

<script>
import RichText from '@/components/rich-text/RichText';
export default {
    name: 'RichTextExample',
    components: {
        RichText
    },
    data() {
        return {
            isShowImageSelector: false,
            options: {
                content: '',
                attachmentKey: '',
                placeholder: 'Message John Doe'
            },
            attachments: [
                'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
                'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80'
            ]
        };
    },
    methods: {
        send() {
            console.log('Message sent');
            console.log(this.options.content);
            this.$nextTick(() => {
                this.$refs.richTextEditor.clearContent();
            });
        },
        remoteAttachment(index) {
            this.attachments.splice(index, 1);
        },
        addAttachment() {
            this.isShowImageSelector = true;
        },
        close(img) {
            this.attachments.push(img.src);
            this.isShowImageSelector = false;
        },
        previewAttachment(index, item) {
            window.open(item, '_blank');
        }
    }
};
</script>
<style lang="scss">
.app {
    padding: 1rem;
    width: 100%;
}
</style>
