<template>
    <div class="breadcrumbs">
        <slot name="pre"></slot>
        <ul>
            <li v-for="(route,key) in $route.matched.slice(0, $route.matched.length - 1)" :key="key">
                <router-link :to="{name: route.name}" tag="a">
                    {{ route.name }}
                </router-link>
                <span v-show="!$slots.default" class="delimeter">
                    /
                </span>
                <slot></slot>
            </li>
            <li>
                {{ $route.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    created() {
        console.log(this.$route);
    }
};
</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";
    .breadcrumbs {
        background-color: $lighter-grey;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    ul {
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 16px;
        li {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: $dark;
            font-size: 14px;
            .delimeter {
                color: $light-grey;
                font-size: 22px;
            }
            span {
                margin-right: 16px;
                margin-left: 16px;
            }
            a {
                cursor: pointer;
                color: $brand-primary;
                position: relative;
                text-decoration: none;
                font-weight: 500;
            }
            a:after {
                background: none repeat scroll 0 0 transparent;
                bottom: -4px;
                content: "";
                display: block;
                height: 2px;
                left: 50%;
                position: absolute;
                background: $brand-primary;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }
            a:hover:after {
                width: 100%;
                left: 0;
            }
        }
    }
</style>
