<template>
    <div class="row">
        <div class="col-sm-4">
            <Panel>
                <template v-slot:panelBody>
                    <div class="shimmer-wrapper">
                        <Shimmer>
                            <ShimmerHeading :img="true" />
                            <ShimmerText :lines="4" />
                        </Shimmer>
                    </div>
                </template>
            </Panel>
        </div>
    </div>      
</template>

<script>
import Shimmer from '@/components/shimmer/Component';
import ShimmerHeading from '@/components/shimmer/ShimmerHeading';
import ShimmerText from '@/components/shimmer/ShimmerText';
import Panel from '@/components/Panel';

export default {
    name: 'ShimmerExample',
    components: {
        Shimmer,
        ShimmerHeading,
        ShimmerText,
        Panel
    },
    data() {
        return {
            value: true,
            repeatCount: 3
        };
    }
};
</script>

<style lang="scss" scoped>
.shimmer-wrapper{
    padding: $default-content-padding;
}
</style>