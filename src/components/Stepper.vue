<template>
    <div class="stepper">
        <div class="stepper-item" v-for="(step,key) in steps" :key="key" :class="{'completed': step.index < current,'current': step.index == current}">
            <div class="stepper-item-bar">
                <div class="stepper-item-bar-number">{{ step.index }}</div>
            </div>
            <span class="stepper-item-name">{{ step.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stepper',
    props: ['steps','current']
};
</script>

