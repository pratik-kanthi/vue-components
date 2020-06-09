<template>
    <div>
        <h1 class="page-title">Progress Bar</h1>
        <p>Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.</p>
        <div class="row">
            <div class="col-sm-8">
                <h4 class="section-title">Normal Progress Bar</h4>
                <ProgressBar :value="50" height="10px"></ProgressBar>
            </div>
        </div>
 
    </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar';

export default {
    name:'ProgressBarExample',
    components: {
        ProgressBar,
    },
};
</script>

<style lang="scss" scoped>

</style>