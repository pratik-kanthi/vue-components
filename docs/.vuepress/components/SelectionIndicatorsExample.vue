<template>
    <div>
        <div class="item-wrapper">
            <h5>Check Box</h5>
            <div class="form-element">
                <input class="check" type="checkbox" id="check-1" v-model="checkValue" />
                <label class="check-label box" for="check-1">
                    <span></span>
                </label>
            </div>
        </div>
        <div class="item-wrapper">
            <h5>Toggle Button</h5>
            <div class="form-element">
                <input class="check" type="checkbox" id="switch-1" v-model="toggleValue" />
                <label class="check-label switch" for="switch-1">
                </label>
            </div>
        </div>
        <div class="item-wrapper">
            <h5>Radio Buttons</h5>
            <div class="form-element">
                <input class="check" type="radio" id="option-1" v-model="radioValue" value="male" />
                <label class="check-label radio" for="option-1">
                </label> Male
            </div>
            <div class="form-element">
                <input class="check" type="radio" id="option-2" v-model="radioValue" value="female" />
                <label class="check-label radio" for="option-2">
                </label> Female
            </div>
            <div class="form-element">
                <input class="check" type="radio" id="option-3" v-model="radioValue" value="other" />
                <label class="check-label radio" for="option-3">
                </label> Other
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SelectionIndicators',
    data() {
        return {
            checkValue: false,
            toggleValue: false,
            radioValue: ''
        };
    },
};
</script>
