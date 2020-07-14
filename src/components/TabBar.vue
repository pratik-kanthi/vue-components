<template>
    <div class="tabbar">
        <div id="navigation">
            <ul class="menu">
                <li v-for="(route, key) in menu" :key="key">
                    <router-link v-if="!route.subItems" :to="route.path" active-class="active">
                        <div class="menu-item">
                            <Badge v-bind="route.badgeOptions" v-if="route.badgeOptions">
                                <i class="material-icons">{{ route.icon }}</i>
                            </Badge>
                            <i v-else class="material-icons">{{ route.icon }}</i>
                            <span v-text="route.name"></span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Badge from './Badge';
export default {
    name: 'TabBar',
    props: {
        menu:{
            type:Array,
            required:true
        }
    },
    components: {
        Badge,
    },
    computed:{
        currentStep: function() {
            if(this.current)
                return this.current;
            else
                return this.steps[0].index; 
        }
    },
};
</script>

