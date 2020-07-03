<template lang="html">
  <div class="e9">
    <div class="split-container">
      <button class="split-tab-button" :class="isActive('example')" type="button" @click="setDisplay('example')">
        Example
      </button>
      <button class="split-tab-button" :class="isActive('code')" type="button" @click="setDisplay('code')">
        Code
      </button>
      <button class="split-tab-button" :class="isActive('both')" type="button" @click="setDisplay('both')">
        Example+Code
      </button>
      <div class="split">
        <div v-if="exampleVisible" class="split-example">
          <!-- <keep-alive> -->
            <slot name="example"/>
          <!-- </keep-alive> -->
        </div>
        <div v-if="codeVisible" class="split-code">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SplitTab',
    data() {
        return {
            display: 'example'
        };
    },
    computed: {
        exampleVisible() {
            return this.display === 'example' || this.display === 'both';
        },
        codeVisible() {
            return this.display === 'code' || this.display === 'both';
        }
    },
    methods: {
        setDisplay(type) {
            this.display = type;
        },
        isActive(type) {
            return this.display === type ? 'split-tab-button-active' : '';
        }
    }
};
</script>

<style lang="scss">
.split-container {
    margin: 1rem 0;
    padding: 1rem;
    background: #fafafa;
    border-radius: 4px;
}

.split-tab-button {
    border: none;
    background: #f0f0f5;
    padding: 12px 24px;
    font-size: 1rem;
    display: inline-flex;
    margin-bottom: 1rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    &:focus {
        outline: 0 !important;
    }
}

.split-tab-button-active {
    color: #fff;
    background: #d21d1d;
}

.split {
    width: auto;
    display: flex;
    margin: 0 -1rem;
}

.split > div {
    padding: 0 1rem;
    flex-grow: 1;
    width: 50%;
}

.split-example {
    margin: 1rem 0;
    p{
      margin-top: 0;
    }
    .components {
        display: flex;
        align-items: top;
        flex-wrap: wrap;

        .item {
            margin-bottom: 2rem;
            &:not(:last-child) {
                margin-right: 6rem;
            }
        }
    }
    .item-wrapper{
      margin-bottom: 32px;
    }
    .topbar{
      position: static;
    }
}
</style>
