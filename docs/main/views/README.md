
# Views
## Login
**The Login views allows users to setup a login page instantly. There are a few variations available, the usage of which is explained below.**
### Variation 1
The ```Variation 1 ```  creates a simple, responsive login page layout with a left and right div. The view features a hero image as well.
![Example](/assets/views/login-variation-1.jpg)
A list of customisable properties are below:
| Property | Type | Description |
|---------|--------|-------------|
| brand-primary | `String` | The default accent colour. Default `#000000`. |
| title-text | `String` | The title text for the page. |
| sub-title-text | `String` | The subtitle text for the page. |
| text-dark-color | `String` | The dark text colour of the page. This colour is also used for the title. |
| text-light-color | `String` | The light text colour of the page. This colour is also used for the sub title. |
| background-image | `String` | The background image for the page. |
| :on-click-fn | `Function` | The OnClick function override. |

:::tip
The login parameters are `username` and `password`.
:::

**Code**
```vue
<template>
    <loginVariation1
        brand-primary="#d21d1d"
        brand-logo-u-r-l="https://cab9.app/includes/images/logo.png"
        title-text="Innovative way to manage your Private Hire &amp; Taxi Business"
        sub-title-text="Cab9 is a contemporary, comprehensive and streamlined dispatch system built to satisfy every requirement of executive hire businesses."
        text-dark="#e90000"
        text-light="#9e9e9e"
        background-image="https://images.unsplash.com/photo-1526527736852-326fd1380c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        :on-click-fn="loginButtonClicked">
    </loginVariation1>
</template>

<script>
import loginVariation1 from './views/login/variation-1/Component';

export default {
    name: 'LoginVariation1',
    components: {
        loginVariation1
    },
    methods: {
        loginButtonClicked(username, password) {
            console.info(`Username is :${username}`);
            console.info(`Password is :${password}`);
        }
    }
};
</script>

<style>
</style>

```

## Tabular View (ModuleItemLayout)
**Tabular view allows user to display tabs in the form of navigation controls through which user will be able to navigate to different routes**

Tabular view currently comes with two variations, **1. Simple tabs 2. Angled tabs** . Developers must specify an array of ```tabs``` which will be displayed as a list of items and below that content for chosen tab's route will be displayed in the content area.

Developers are free to use any of the above variation with ```type``` property. To view more options associated with this layout, please refer the options table below.

| Property | Type | Description |
|---------|--------|-------------|
| tabs | `Array` | A required property which accepts an array of objects with ```name``` and ```path``` as their properties. |
| type | `String` | This property renders the provided design of the tab. Currently we support ```simple``` and ```angled``` tabs. If not provided then by default ```simple``` design will be rendered by the DOM. |
| r-data | `Object/Boolean` | An object/boolean (affirmative property) consisting of any data coming through the api. Primary goal of this object is to restrict rendering the layout until all the required data for its child views is present |
| limit | `Number` | This property will limit the number of tabs to be displayed. The tabs which exceed the limit threshold, will be shown under a new tab called ```More``` when hovered. |

Below is an example on how tabs will be rendered. Please click on buttons available in order to switch between the tab designs.

<SplitTab>
  <TabsExample slot="example"/>
  <<< @/docs/.vuepress/components/TabsExample.vue
</splitTab>

***Slots***

This view supports 1 slot which you can place any html or other component before the tabs.

* **pre**

This slot should be used to keep breadcrumb or back button or any details needed to be kept right above the tabs. Look at the below example :

```vue
<ModuleItemLayout :tabs="tabs" :r-data="rData" type="angled" :limit="3">
    <template v-slot:pre>
        <div class="inline">
            <Back :name="$route.name"></Back>
            <Breadcrumb></Breadcrumb>
        </div>
    </template>
</ModuleItemLayout>
```

