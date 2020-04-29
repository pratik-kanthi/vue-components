
# Components
## Avatar
The ```Avatar``` component creates a scalable, color-able element that can have text, image or gravatar within a circular shape. Its width and height can be altered by using ```size``` property. A list of customisable properties are below:

| Property | Type | Description |
|---------|--------|-------------|
| size | `Number` | Defines the size of the avatar in pixels. If ```size``` is not provided, it takes 160px as a default value. |
| text | `String` | Avatar Text. The initials will be used. |
| gravatar-email | `String` | If you would like to render the gravatar image, please supply the email here. More details can be found at [https://en.gravatar.com/](https://en.gravatar.com/). |
| image-url| `String` | Image Url for the Avatar. |

<SplitTab>
  <AvatarExample slot="example"/>
  <<< @/docs/.vuepress/components/AvatarExample.vue
</splitTab>

## Address Finders

Address Finders provide a unique solution when searching addresses be it via keywords, postcodes, areas, locality etc. They come in two different forms:

1. **Google Address Finder** 
2. **Maps9 Address Finder**

### Google Address Finder
The ```Google Address Finder``` component displays a Google Maps supported autocomplete solution that users can use in order to set the addresses.

This Component accepts props as shown in the table below and it integrates with the google maps autocomplete service. 

:::warning
It is mandatory to have a **Google Maps key** in order to utilise Address Finder Component
:::

***Properties***

| Property | Type | Description |
|---------|--------|-------------|
| address | `Object` | Pass the Object of address where the Address Finder should return the result into. |
| google | `Object` | Google Map's object injected by the google map's script and its key. |
| options | `Object` | If you would like to filter out the results based on location criteria , types of locations etc. then these details can be set via this property. More details can be found at [Here](https://developers.google.com/places/web-service/autocomplete). |

The **resulting Address object** is in the form of 8 different properties which have been listed below :

```js
{
    Line1: 'Canary Wharf',
    Line2: '',
    County: 'London',
    TownCity: 'London',
    PostCode: 'E14 5AB',
    Country: 'United Kingdom',
    Latitude: 51.5053469,
    Longitude: -0.0254968
}
```

***Simple Usage (Recommended):***
* Add a Google Maps script tag before any other js imports in body of public/index.html file which will append the google object to window object.

```html
<body>
<script src="https://maps.googleapis.com/maps/api/js?libraries=weather,visualization,places,drawing,geometry&language=en&key=<key>"></script>
... All other JS imports should go below this.
</body>
```
* You can access the ```window.google``` now in your component to get the google object.

***Advanced Usage***
* In some use cases, you might need to reduce the overhead on your first load, in that case you can load Google Maps Script asynchronously.

* Use it like below with a third party package [vue2-google-maps](https://www.npmjs.com/package/vue2-google-maps)

<SplitTab>
  <AddressFinderExample slot="example"/>
  <<< @/docs/.vuepress/components/AddressFinderExample.vue
</splitTab>

:::tip
- To restrict the locations to only UK, use below in the ```options``` prop
```js
options: {
    componentRestrictions: {
        country: 'gb'
    }
}
```
:::

***Events***

* ```updated```

This event returns the Address object as described above in the definition. This is useful when you would like to do something on address getting selected/changed. 

Use a function in the ```@updated``` event with its argument being the resulting object of the address.
```vue
<AddressFinder :address="address" :google="google" :options="options" @updated="addressChanged"></AddressFinder>

...

methods: {
    addressChanged(data) {
        this.newAddress = data;
    }
}
```

***Modifiers***
* ```address.sync```

Keeping a sync modifier on the address prop will automatically sync the result to your reactive address data when an address is chosen. 

When there is nothing significant needed except syncing the resulting value, use this option instead of ```@updated``` event.

```vue
<AddressFinder :address.sync="address" :google="google" :options="options"></AddressFinder>
```

## Color Picker
The ```ColorPicker``` component allows users to choose a colour from a full Hex colour picker and sync it to a value within the local scope. The local scope variable can be passed via the ```:color.sync``` property.


 
<SplitTab>
  <ColorPickerExample slot="example"/>
  <<< @/docs/.vuepress/components/ColorPickerExample.vue
</splitTab>

## Card
A card is a flexible and extensible content container. It includes options for headers, content areas, and a powerful set of display options. 

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Using this component, you can have a few variations based on the properties passed inside. 

Below are the list of properties which you can use to format your component.

***Properties***

| Property | Type | Description |
|---------|--------|-------------|
| title | `String` | This property will display the title inside the Card with an ```h4``` tag. Try to keep it within one line. |
| sub-title | `String` | This property will display the sub title right below the title in an ```h6``` tag. Try to keep it within one line. |
| card-media-image | `String` | This property accepts a valid url starting with ```http``` and renders the image in the designated area right below the title and sub-title section. |
| card-media-image-height | `String` | This property accepts the height in pixels and sets the height of the image. This property will only be valid if above property exists. |
| card-supporting-text | `String` | This property will display the description or info associated with the card. This part of your card can be descriptive.  |
| options | `Object` | Any other extra options related to avatar and actions. For more details please refer options table available below. |

***options***

| Property | Type | Description |
|---------|--------|-------------|
| avatar-options | `Object` | All the properties required for Avatar component. All the details related to the Avatar component can be found here [avatar](./#avatar). |
| actions | `Array` | All the required actions which will be placed at the bottom of the card should be placed in this property. For more details please refer the actions section. |
| expandedContentTitle | `String` | If your card allows for an expandable area, you can use this section to provide a title for your expandable area. Clicking on the title will expand the area. |
| cardInfoLocation | `String` | Choose between `top` and `middle`. If you choose top, the card info will be displayed on top of the media. If you choose `middle`, media will be displayed first. |

***actions***

An action supports three properties which are listed below :
 
| Property | Type | Description |
|---------|--------|-------------|
| name | `String` | This property will display the name of the link. |
| href | `String` | This is an optional property which will redirect the page to the provided value. |
| click-action | `Function` | This property accepts a function which gets called when the link is clicked. |

:::warning
**Note**: Please make sure either ```href``` or ```click-action``` has been provided inside actions array of objects.  
:::

<SplitTab>
  <CardExample slot="example"/>
  <<< @/docs/.vuepress/components/CardExample.vue
</splitTab>

### Card Slots

* **cardMediaContent**

Every card supports a media content area. If you would like to provide custom media content you can use the `cardMediaContent` slot. 

Below is an example provided on how to use this slot.

<SplitTab>
  <CardCustomMediaExample slot="example"/>
  <<< @/docs/.vuepress/components/CardCustomMediaExample.vue
</splitTab>

* **cardCustomContent**

Below the `card-supporting-text` slot, there is a custom content area that is presented to the developers to inject their own custom content. 

Below is an example provided on how to use this slot.

<SplitTab>
  <CardCustomSlotExample slot="example"/>
  <<< @/docs/.vuepress/components/CardCustomSlotExample.vue
</splitTab>

* **cardExpandedContent**

This section will by default remain collapsed and a toggle will be available to view the content resided in this slot.

Use this slot when you have large amount of data to be shown to user which is not so important. Users can use the expand and collapse buttons in order to toggle the information.


Below is an example provided on how to use this slot.

<SplitTab>
  <CardExpandedSlotExample slot="example"/>
  <<< @/docs/.vuepress/components/CardExpandedSlotExample.vue
</splitTab>

```html
<template v-slot:cardCustomContent>
    <p class="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
    <h4>Tonight's availability</h4>
    <div>
        <span>5:30 PM</span>
        <span>7:30 PM</span>
        <span>8:30 PM</span>
    </div>
</template>
```

## Tabs
Tabs organize navigation across different views, meanwhile displaying different content of the application to the user. It allows user interaction by letting user to navigate to different routes.

Our Tabular view currently comes with three variations: ```simple```, ``` angled```, and ```stacked```.

**Simple tabs** display the menu items in a horizontal line. Developers must specify an array of objects containing details like **name**, **path** etc. options which will be displayed as tabs.

As the name suggests, **Angled tabs** display the menu items in a hortizonal line with an angled design. Pre-requisite for building this type of tab is the same as simple tabs.

**Stacked tabs** display the information vertically in a set of stacks one after the other. Developers can use any of the above variations by mentioning the ```type``` property. 

:::warning
**Note**: If the type of tabs is ```stacked```, then provided ```limit``` property will be ignored.
:::

To view more options associated with this layout, please refer the options table below.

***Properties***

| Property | Type | Description |
|---------|--------|-------------|
| active | `Number` | This property binds the tab which is active currently. Use this in the absence of `path` attribute. | 
| data | `Array` | This property requires an array of objects of the same type. For more information, please refer to the table below.|
| type | `String` | This property renders the provided design of the tab. Possible values can be `simple`, `angled` and `stacked`. If ```type``` is not provided then by default ```simple``` design will be rendered by the DOM. |
| limit | `Number` | This property will limit the number of tabs to be displayed. The tabs which exceed the limit threshold, will be shown under a new tab called ```More``` when hovered. |

***data***
| Property | Type | Description |
|---------|--------|-------------|
| name | `String` | A required property, specifies name of the tab.| 
| path | `String` | A property, which specifies the path where it will be navigated to; also builds ```navigable tabs```.| 
| selected | `Boolean` | If true, then the particular tab will be active by default in the absence of path property.| 
| disabled | `Boolean` | If true, then the particular tab will be disabled.| 

:::warning
**Note**: Either all the objects of data would have a path or none of them will have a path.
:::

Below is an example on how tabs will be rendered afterall. Please click on buttons available in order to switch between the tab designs.

<SplitTab>
  <TabsExample slot="example"/>
  <<< @/docs/.vuepress/components/TabsExample.vue
</splitTab>

***Events***

* **changed** event will be triggered when a tab is changed. It will return the index of the changed tab. As for instance:  

``` <Tabs :data="tabs" :type="type" :limit="3" @changed="tabChanged"></Tabs>```

***Modifiers***

* **active.sync**

Binding a sync modifier with the active tab automatically syncs the current tab to be the active tab. As for instance: 

``` <Tabs :data="tabs" :type="type" :limit="3" :active.sync="currentTab"></Tabs>```

## Buttons
 The Button component is a wrapper around HTML button element. It accepts basic properties like **size**, **type**, **function** etc.

 ```js 
 <Button size="lg" type="secondary" text="lg" :action="buttonClicked"></Button>
 ```
Below are the list of properties which you can use to format your component.

***Properties***
| Property | Type | Description |
|---------|--------|-------------|
|action | `Function` | This is a required property which accepts the reference of a function.|
|async | `Boolean` | When ```async``` is true, the button will be disabled while still showing the loading icon until promise wrapped around the action is resolved. |
size|`String`| This property determines the size of a button; possible values taken are ```lg```,```md```, ```sm``` and ```x-sm```. If not provided, default size i.e medium is rendered.|
|text|`String`| This is a required property which defines a value.|  
|type|`String`| This property determines the usage of button; possible values used are ```primary```,```secondary``` ```ternary```,```success```, ```warning```, ```info```, and ```danger``` based on type mentioned.|
|color | `String` | This property determines the ```background-color``` of button.|
|custom-class | `String` | This property assigns additional custom class to the button component.|
|disabled | `Boolean` | If this property is true, then the particular button will be disabled.| 
|loader-text|`String`| This property accepts text which will be loaded during an asynchronous call.|
|loader-image|`String`| This property accepts path of an image which will be loaded during an asynchronous call.|

<SplitTab>
  <ButtonExample slot="example"/>
  <<< @/docs/.vuepress/components/ButtonExample.vue
</SplitTab>

**Size Variations**

Developers can specify the size of button by adding ```size```property to their code. Various other types are ```lg```, ```md```,```sm```, and ```xs``` As for instance:
```js
<div class="buttons-info">
    <label>Large</label>
    <Button size="lg" type="secondary" text="lg" :action="buttonClicked"></Button>
</div>
```

**Type Variations**

Developers can specify the type of button class by adding ```type``` property to their code. Various other types are ```primary```,```secondary``` ```ternary```,```success```, ```warning```, ```info```, and ```danger```. As for instance:

``` js
<div class="buttons-info">
    <label>Secondary</label>
    <Button size="md" type="secondary" text="Secondary" :action="buttonClicked"></Button>
</div>
```

**Other Variations**

 Other variations include buttons performing action on being clicked. Some of the variations include:

 * Loader : When ```async``` function is true, the button will be disabled while still showing the loading icon until promise wrapped around the action is resolved. As for instance:

 ``` js
<div class="buttons-info">
    <label>Loader</label>
    <Button size="md" type="primary" text="Click to load" :async="true" :action="callAsyncApi"></Button>
</div>
 ```


 * Disabled : This button is disabled by default, even after clicking it no action will be initiated. As for instance: 

 ``` js
<div class="buttons-info">
    <label>Disabled</label>
    <Button size="md" type="warning" text="Click if you can" :action="buttonClicked" disabled></Button>
 </div>
 ```

 **slots**

 * Default : This slot helps in adding an icon or any other prefix within the button text.
 ``` js
<Button size="md" type="secondary" text="Cancel" :action="buttonClicked">
    <i class="material-icons">undo</i>
</Button>
  ```

:::tip
- **loader-text** and **loader-image** will only function when ```async``` prop is **true**.
:::

## Breadcrumbs

The Breadcrumbs component is a navigational helper for pages. Icons or text characters can be used as a divider while presenting breadcrumbs component. 

Additionally, ```slots``` exists for more control of the breadcrumbs, helping insert pre and post components in the breadcrumbs. 

```delimeter``` serves as a sequence of one or more text characters for specifying the boundary between components.For instance, **>>** and **slash (/)** can be used as a delimeter.

Items of the **breadcrumbs** is an array of objects, while delimeter or dividers are string values to divide the breadcrumbs. 


**slots**

* **pre** : This slot helps in a adding first or prior component to the breadcrumbs.

* **slot** : This slot helps in adding the second or later component to the breadcrumbs. As for instance :

``` js
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
 ```

Please refer to the image present below:

![Example](/assets/components/breadcrumb.png)

## Overlays

The Overlay component is used to provide emphasis on a specific component. It indicates a state change within the application and can be used for creating **loaders**, **dialog boxes**, **input boxes**, etc.

Our overlays currently comes in three variations: ```full```, ``` relative```, and ```loader overlay```.

Below are the list of properties which you can use to format your component.

***Properties***
| Property | Type | Description |
|---------|--------|-------------|
|custom-content-class | `String` | This property takes pre-defined classes like **mt16** for UI purposes. |
|show | `Boolean` | This property shows the overlay. If not set, it takes false value by default.|
|show-close|`Boolean`| This property takes a condition; present and closes the overlay accordingly. If not set, it takes true value by default.|
|relative|`Boolean`|   This property shows up a small window overlay when an action is initiated and visa-versa. If not set, it takes false value by default.|
|opacity|`Number`| This property sets the overlay opacity.|

<SplitTab>
  <OverlaysExample slot="example"/>
  <<< @/docs/.vuepress/components/OverlaysExample.vue
</SplitTab>

**Full Overlays**

Full Overlays are entire browser window overlays with a popup at the center of the screen. It takes ```action``` function to determine the overlay course. ```overlay-wrapper``` is dedicated to show the window which appears ```show overlay``` button is hit, works on a function ```action```. 
For instance:

``` js
 <div>
    <Button type="success" text="Show Overlay" :action="() => show1 = true"></Button>
    <Overlay :show.sync="show1" :show-close="true" custom-content-class="mt16">
        <div class="overlay-wrapper">
            <input type="number" placeholder="Please enter the amount...">
            <Button type="primary" size="sm" text="Save" :action="hideOverlay" custom-class="mt16"></Button>
        </div>
    </Overlay>
 </div>
```
**Relative Overlays**
Full Overlays are cater only a section of the browser and focus on a single component. The design of the overlay can be determined using ```relative-example```. For instance:
``` js
<div class="relative-example">
    <Overlay :show.sync="show2" :show-close="false" :relative="true">
        <div class="overlay-flex-wrapper">
            <Button type="danger" text="Hide Overlay" :action="hideOverlay"></Button>
        </div>
    </Overlay>
</div>
```

**Loader Overlays**
While using loader overlays the page will be grayed out until the loader loads the content i.e async function in backend is completed. Code snippet is as follows:
``` js
<div>
    <Button type="warning" text="Launch Application" :action="showLoader">
        <i class="material-icons">open_in_new</i>
    </Button>
    <Overlay :show.sync="show3" :show-close="false" custom-content-class="full-loader">
        <img class="spinner" src="../../../src/assets/loader.svg" />
    </Overlay>
</div>
```

**slots**
```customContentClass``` helps include pre-defined classes.


* **show.sync**

Binding a sync modifier with the show function syncs overlay with show function. For instance:
``` js
<Overlay :show.sync="show-overlay" :show-close="true" custom-content-class="mt16">
```

## Charts
<SplitTab>
  <ChartExample slot="example"/>
  <<< @/docs/.vuepress/components/ChartExample.vue
</splitTab>

## Table

The table component is used to display the data in the tabular format with the advanced options like pagination, api, sorts, filter, various style and css options, events etc.

***Properties***
| Property | Type | Description |
|---------|--------|-------------|
|headings | `Array` | This is a required property which accepts the array of objects containing headers options. To see more about header options please refer **options**. |
|items | `Array`, `Function` | Array of the data which will be rendered in the table's rows. For API based table this must be a function returning the promise. |
|on-row-click | `Function` | Method which gets called upon clicking a particular row. Function's first argument returns the data of the particular row. |
|options| `Object` | This property accepts the object for displaying options for export, arrange and reset. |
|pagination | `Object` | Pagination object which controls the pagination for the table's data. To see more about this please refer [here](./) 
|sort | `Object` | Sorting is controlled via this object. Default sort options can be provided through this property too. To see more about this please refer [here](./) |
|thead-th-class | `String` | This property will set the css class for `<thead>` tag's `<th>`. |
|table-class| `String` | This property will set the css class for `<table>`. |
|tbody-tr-class| `String` | This property will set the css class for `<tbody>` tag's `<tr>`. |
|tbody-td-class| `String`,`Function` | This property will set the css class for `<tbody>` tag's `<td>`. This can be either a function returning a string value or normal string value. |
|responsive| `Attribute` | This attribute makes table responsive. |
|border-spacing| `Number` | Value to this adds margin between the rows. |

***headings***

| Property | Type | Description |
|---------|--------|-------------|
|key | `String` | This is a required property which will be the original key of the object. |
|label | `String` | This property displays as the name of the header. |
|css | `Function` | Method must return a value which will be applied to all the `<td>` tags of the tbody. This is especially useful when a row needs to be coloured based on status.|
|sortable | `Boolean` | This property will set the column as sortable if true. Ascending and Descending icons will be visible when this property is set to true. Default value will be false. |
|formatter | `Function` | Passed method will execute and display the value in the cell after formatting. |

```js
{
    'key': 'Environment',
    'label': 'Env',
    class: (data) => {
        return data.Environment;
    },
    formatter: (data) => {
        return data.toUpperCase();
    }
}
```

***pagination***

| Property | Type | Description |
|---------|--------|-------------|
|perPage | `Number` | This property determines how many items should be present at a time in a page. |
|totalItems | `Number` | This property determines how many total items are available for the selected criteria through-out all the pages. |
|currentPage | `Number` | This property links the table with the current page. This value gets changed when a page is changed. |
|threshold | `Number` | Threshold limits the number of pages to be shown at a time in the page numbers. By default it is set to 2 and pagination list shows neighbouring pages of current page. |
|showJumpToFirst | `Boolean` | Setting it as true will show the list to jump to very first page. |
|showJumpToLast | `Boolean` | Setting it as true will show the list to jump to very last page. |

***options***

| Property | Type | Description |
|---------|--------|-------------|
|export | `Boolean` | This option enables the user to export all the rows as CSV. |
|arrange | `Boolean` | This option enables the user to rearrange the columns. Columns can be shown/hidden based on need. |
|reset | `Boolean` | This option lets user reset the table to the original. |

***Scoped Slots***

Custom rendering for each data field in a row is possible using *scoped slots*.

Scoped field slots give you greater control over how the record data appears. You can use scoped slots to provided custom rendering for a particular field. If you want to add an extra field which does not exist in the records, just add it to the fields array, and then reference the field(s) in the scoped slot(s). Scoped field slots use the following naming syntax: `v-slot:column_name="data"`.

You can use the default fall-back scoped slot to format any cells that do not have an explicit scoped slot provided. In scoped slot, the whole row data will be returned.

```vue
<template v-slot:OS="data">
    <div class="logo" :style="{'background-image': 'url(' + getImageUrl(data) +')'}"></div>
</template>
```

### Normal Table (without API)

Normal Table accepts an array of headings and items and iterates over each of them and displays as rows.

<SplitTab>
  <NormalTableExample slot="example"/>
  <<< @/docs/.vuepress/components/NormalTableExample.vue
</splitTab>

### API Table

As mentioned under the Items prop section, it is possible to use a function to provide the row data (items), by specifying a function reference via the items prop.

The provider function is called with the following signature returning the promise:

```js
provider(vm) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.post(`https://localhost:8081/api/search?page=${vm.pagination.currentPage}&size=${vm.pagination.perPage}&sortby=${vm.sort.value === 'desc' ? '-': ''}${vm.sort.name}`, this.filters);
            this.pagination.totalItems = result.data.count;
            resolve(result.data.data);
        } catch (err) {
            return reject(err);
        }
    });
}
```

provider function will receive the context as its argument which contains following structure

```json
{
    pagination: {},
    sort: {},
    filters: {}
}
```

:::tip
filters object is just passed in order to make table component aware of any changes within filter object.
:::

***Usage***

Below is the full example for an API based table component.
```vue
<Table
    :items="provider"
    :headings="columns"
    :on-row-click="rowClicked"
    :pagination.sync="pagination"
    :sort.sync="sort"
    :filters="filters"
    table-class="tr-split"
    :tbody-td-class="tbodyTdClass"
    :options="tableOptions">
    <template v-slot:OS="data">
        <div class="logo" :style="{'background-image': 'url(' + getImageUrl(data) +')'}"></div>
    </template>
</Table>


<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        'key': 'Hostname'
                    },
                    {
                        'key': 'OS',
                    },
                    {
                        'key': 'IPAddress'
                    },
                    {
                        'key': 'LifeCycleStatus',
                        'label': 'Status',
                        'sortable': true
                    },
                    {
                        'key': 'Environment',
                        class: (data) => {
                            return data.Environment;
                        },
                        formatter: (data) => {
                            return data.toUpperCase();
                        }
                    },
                    {
                        'key': 'Network'
                    }
                ],
                sort: {
                    name: 'LifeCycleStatus',
                    value: 'asc'
                },
                pagination: {
                    perPage: 10,
                    totalItems: 0,
                    currentPage: 1,
                    threshold: 4,
                    showJumpToLast: true,
                    showJumpToFirst: true
                },
                tableOptions: {
                    export: true,
                    arrange: true,
                    reset: true
                }
            }   
        },
        methods: {
            getImageUrl(data) {
                return data.value.OS ? data.value.OS.Logo : '';
            },
            rowClicked(data) {
                console.log(JSON.stringify(data));
            },
            tbodyTdClass(header, row) {
                return row.LifeCycleStatus + ' pointer';
            },
            provider(vm) {
                return new Promise(async (resolve, reject) => {
                    try {
                        let result = await axios.post(`https://localhost:8081/api/search?page=${vm.pagination.currentPage}&size=${vm.pagination.perPage}&sortby=${vm.sort.value === 'desc' ? '-': ''}${vm.sort.name}`, this.filters);
                        this.pagination.totalItems = result.data.count;
                        resolve(result.data.data);
                    } catch (err) {
                        return reject(err);
                    }
                });
            }
        }          
    }
</script>
```
