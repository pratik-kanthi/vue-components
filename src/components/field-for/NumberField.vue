<template>
    <div>
        <label class="control-label" :for="options.label || property.name" v-text="options.label || property.name" v-show="!options.hideLabel"></label>
        <div v-if="displayMode === 'CREATE' || displayMode === 'EDIT'" class="form-element">
            <div class="input-group">
                <div class="input-group-prepend" v-if="options.currency">
                    <span class="input-group-text">{{ options.currency }}</span>
                </div>
                <input type="number" :name="options.label" :id="options.label || property.name" :required="options.required" :placeholder="options.placeholder" :class="[options.customClass, { 'w-auto': options.currency }]" :min="options.min" :max="options.max" v-model="clonedValue.value" @keyup="handler" class="form-control" :disabled="options.disabled" :tabindex="options.tabIndex" />
            </div>
        </div>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW' && clonedValue.value  == undefined">-</p>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW' && (property.filter || options.filter)">
            {{ $options.filters[options.filter || property.filter](clonedValue.value) }}
        </p>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW'" v-text="clonedValue.value"></p>
    </div>
</template>

<script>
export default {
    name: 'NumberField',
    props: {
        options: {
            type: Object
        },
        value: {
            type: Number
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
            clonedValue: {}
        };
    },
    methods: {
        handler() {
            if (this.clonedValue.value && typeof this.clonedValue.value !== 'number') {
                this.clonedValue.value = Number(this.clonedValue.value);
            }
            this.validate();
            this.$emit('updateValue', this.clonedValue);
        },
        validate() {
            if (this.property) {
                if ((this.options.required || this.property.required) && this.clonedValue.value === undefined) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'required';
                } else if (this.options.min !== undefined && this.clonedValue.value < this.options.min) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'min';
                } else if (this.options.max !== undefined && this.clonedValue.value > this.options.max) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'max';
                } else {
                    this.clonedValue.$invalid = false;
                    this.clonedValue.$error = null;
                }
            }
        }
    },
    computed: {
        isValid() {
            return (!this.options.max || Number(this.clonedValue.value) <= Number(this.options.max)) && (!this.options.min || Number(this.clonedValue.value) >= Number(this.options.min));
        }
    },
    created() {
        this.clonedValue.value = this.value !== undefined ? this.value : this.property ? this.property.value : undefined;
        this.options.min = this.options.min === undefined ? (this.property ? this.property.min : undefined) : this.options.min;
        this.options.max = this.options.max === undefined ? (this.property ? this.property.max : undefined) : this.options.max;
        this.handler();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invalid {
    border: 1px solid red;
}
</style>
