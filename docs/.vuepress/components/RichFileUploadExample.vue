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
        <input type="file" style="display: none" @change="fileUploaded" ref="fileUpload" multiple />
    </div>
</template>

<script>
import RichText from '@/components/rich-text/RichText';
export default {
    name: 'RichFileUploadExample',
    components: {
        RichText
    },
    data() {
        return {
            options: {
                content: '',
                attachmentKey: '',
                placeholder: 'Message John Doe'
            },
            files: []
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
            this.files.splice(index, 1);
        },
        addAttachment() {
            this.$refs.fileUpload.click();
        },
        fileUploaded(e) {
            this.files = [...this.files, ...Array.from(e.target.files)];
        },
        previewAttachment(index) {
            console.log('Previewing the file ' + index);
        }
    },
    computed: {
        attachments() {
            return this.files.map((file) => {
                switch (file.name.substring(file.name.length - 3).toLowerCase()) {
                    case 'pdf': {
                        return 'https://pixy.org/src/420/thumbs350/4205007.jpg';
                    }
                    case 'ocx': {
                        return 'http://iconbug.com/data/6a/507/fdb08b4db33d956a50a9d25370c0d110.png';
                    }
                    case 'lsx': {
                        return 'https://www.freeiconspng.com/uploads/excel-png-office-xlsx-icon-3.png';
                    }
                    case 'csv': {
                        return 'https://www.freeiconspng.com/uploads/excel-png-office-xlsx-icon-3.png';
                    }
                    default: {
                        return 'https://img.pngio.com/file-icon-png-image-free-download-searchpngcom-file-png-715_715.png';
                    }
                }
            });
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
