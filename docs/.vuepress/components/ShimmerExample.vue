<template>
   <div class="wrapper">
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
</template>

<script>
export default {
    name: 'ShimmerExample',
    data() {
        return {
            value: true,
            repeatCount: 3
        };
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
	width: 50%;
	.shimmer-wrapper {
		padding: 16px;
	}
}
</style>