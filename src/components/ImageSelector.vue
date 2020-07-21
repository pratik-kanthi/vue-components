<template>
    <Modal size="lg" @close="cancel" ref="imageSelectorModal">
        <template v-slot:title>
            Select &amp; Crop Image
        </template>
        <template v-slot:body>
            <p>Please choose an image and crop the section you would like to upload.</p>     
            <div class="mt16">
                <h4 class="section-subtitle mt0 mb8">1. Choose File</h4>
                <input type="file" @change="fileUploaded" accept="image/*" ref="fileUpload" />
            </div>
            <div v-if="upload.src" class="mt16">
                <h4 class="section-subtitle mb16">2. Crop Image</h4>
                <cropper classname="cropper" :src="upload.src" :stencil-props="stencilProps" @change="onChange"></cropper>
            </div>
            <div v-if="upload.src" class="upload-actions mt16">
                <h4 class="section-subtitle mb16">3. Confirm</h4>
                <Button text="Upload Uncropped" type="primary" :disabled="!isValid" :action="selectFullImage" custom-class="mr8">
                    <i class="material-icons">crop_free</i>
                </Button>
                <Button text="Upload Cropped" type="secondary" :disabled="!isValid" :action="selectCroppedImage" custom-class="mr8">
                    <i class="material-icons">crop</i>
                </Button>
            </div>
        </template>
    </Modal>
</template>

<script>
import {Cropper} from 'vue-advanced-cropper';
import Modal from '@/components/modal';
import Button from '@/components/Button';

export default {
    name: 'ImageSelector',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        config: {
            type: Object,
            default: () => {
                return {
                    maxSize: 5,
                    aspectRatio: 0,
                    minWidth: null
                };
            }
        }
    },
    components: {
        Cropper,
        Modal,
        Button
    },
    data() {
        return {
            upload: {
                chosen: null,
                src: null
            },
            position: {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            },
            stencilProps: {
                aspectRatio: this.config.aspectRatio
            },
            options: {
                minWidth: this.config.minWidth
            },
            isValid: false,
            showCropper: true
        };
    },
    methods: {
        close(image, cropInfo) {
            this.$emit('close', {image, cropInfo});
        },
        cancel() {
            this.$emit('cancel');
        },
        extractImage() {
            let img = new Image();
            let reader = new FileReader();
            img.onload = () => {

                // Image Validation
                if (this.config.minWidth) {
                    if (img.width < this.config.minWidth) {
                        this.$swal('Warning', `Image width should be at least ${this.config.minWidth}px wide.`, 'warning');
                        return;
                    } else if (this.config.aspectRatio && img.width / this.config.aspectRatio > img.height) {
                        this.$swal('Warning', 'Image does not match the required specification.', 'warning');
                        return;
                    }
                }
                if (this.config.maxSize && this.upload.chosen.size > 1024 * 1024 * this.config.maxSize) {
                    this.$swal('Warning', `Image exceeds the minimum size of ${this.config.maxSize}MB`, 'warning');
                    return;
                }

                // Image is validated
                this.isValid = true;
                reader.onload = (e) => {
                    this.$set(this.upload, 'src',e.target.result);
                    // this.upload.src = e.target.result;
                };
                reader.readAsDataURL(this.upload.chosen);
            };
            img.src = window.URL.createObjectURL(this.upload.chosen);
        },
        fileUploaded() {
            // This is executed when user selects an image.
            this.upload.chosen = this.$refs.fileUpload.files[0];
            this.isValid = false;
            this.extractImage();
        },
        onChange({coordinates}) {
            this.position = coordinates;
        },
        async selectFullImage() {
            try {
                let formData = new window.FormData();
                formData.append('file', this.upload.chosen);
                this.close(formData);
            } catch (err) {
                console.error(err);
            }
        },
        async selectCroppedImage() {
            try {
                let formData = new window.FormData();
                formData.append('file', this.upload.chosen);
            
                let bodyObj = {
                    cropx: this.position.left,
                    cropy: this.position.top,
                    cropw: this.position.width,
                    croph: this.position.height
                };
                this.close(formData, bodyObj);
            } catch (err) {
                console.error(err);
            }
        },
        open(){
            this.$refs.imageSelectorModal.open();
        }
    }
};
</script>

<style lang="scss" scoped>
input[type='file'] {
	&:before {
		border-radius: 6px !important;
		padding: 0 12px;
	}
}
</style>
