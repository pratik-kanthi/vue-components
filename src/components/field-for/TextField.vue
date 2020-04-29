<template>
    <div>
        <label class="control-label" :for="options.label || property.name" v-text="options.label || property.name" v-show="!options.hideLabel"></label>
        <div class="form-element" v-if="displayMode === 'EDIT' || displayMode === 'CREATE'">
            <input type="text" :class="options.customClass" :name="options.label" :id="options.label || property.name" :required="options.required" autocomplete="off" :placeholder="options.placeholder" v-model="clonedValue.value" @input="handler" class="form-control" :disabled="options.disabled" :tabindex="options.tabIndex" @focusin="toggleSuggestion(true)" @focusout="toggleSuggestion(false)" @keydown.tab="setValue" />
            <div class="intellisense" v-if="options.showSuggestion" :class="{ visible: filteredSuggestion && clonedValue.value && isOpen }" @click="setValue">
                {{ filteredSuggestion }}
            </div>
        </div>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW' && !clonedValue.value">-</p>
        <p class="form-control-static" v-else-if="(displayMode === 'VIEW' && property.filter) || options.filter">{{ $options.filters[options.filter || property.filter](clonedValue.value) }}</p>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW'" v-text="clonedValue.value"></p>
    </div>
</template>

<script>
export default {
    name: 'Textfield',
    props: {
        options: {
            type: Object
        },
        value: {
            type: String
        },
        displayMode: {
            type: String
        },
        property: {
            type: Object
        }
    },
    data() {
        return {
            clonedValue: {},
            filteredSuggestion: null,
            isOpen: false
        };
    },
    methods: {
        handler() {
            this.validate();
            this.$emit('updateValue', this.clonedValue);
            if (this.options.showSuggestion) {
                let found = this.options.suggestions.find(item => this.clonedValue.value && item.match(this.clonedValue.value) && this.clonedValue.value.length >= 2);
                this.filteredSuggestion = found ? found : '';
            }
        },
        toggleSuggestion(val) {
            this.isOpen = val;
        },
        setValue() {
            if (this.options.suggestions) {
                this.clonedValue.value = this.filteredSuggestion;
                this.handler();
                this.isOpen = false;
            }
        },
        validate() {
            if (this.property) {
                if ((this.options.required || this.property.required) && !this.clonedValue.value) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'required';
                    // eslint-disable-next-line
                } else if (this.property.email && !/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(this.clonedValue.value)) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'email';
                } else if (this.property.regex && !this.property.regex.test(this.clonedValue.value)) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'regex';
                } else if (this.property.maxlength && (!this.clonedValue.value || this.clonedValue.value > this.property.maxlength)) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'length';
                } else {
                    this.clonedValue.$invalid = false;
                    this.clonedValue.$error = null;
                }
            }
        }
    },
    created() {
        this.clonedValue.value = this.value || (this.property ? this.property.value : undefined);
        this.handler();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
