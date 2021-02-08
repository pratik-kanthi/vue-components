<template>
    <div class="app">
        <!-- <RichText :options="options" :attachments="attachments" :remove-attachment="remoteAttachment" :add-attachment="addAttachment" :send="send" ref="richTextEditor" /> -->
        <AddressFinderExample></AddressFinderExample>
    </div>
</template>

<script>
// import RichText from '@/components/rich-text/RichText';
import AddressFinderExample from '@/app/components/AddressFinderExample';
export default {
    components: {
        AddressFinderExample
    },
    data() {
        return {
            options: {
                content: '',
                attachmentKey: '',
                placeholder: ''
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
            this.attachments.push('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
        }
    },
    watch: {}
};
</script>
<style lang="scss">
.app {
    padding: 1rem;
}
</style>
