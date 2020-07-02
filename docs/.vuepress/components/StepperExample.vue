<template>
    <div>
        <Stepper :steps="steps" :current="current"></Stepper>
    </div>
</template>

<script>
export default {
    name:'StepperExample',
    data() {
        return {
            steps:[{
                index:1,
                name:'Fill up form'
            },{
                index:2,
                name:'Payment'
            },{
                index:3,
                name:'Setup up your profile'
            },{
                index:4,
                name:'Verification'
            }],
            current:3
        };
    }
};
</script>
