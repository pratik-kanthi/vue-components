# Theming
## File structure
Whenever possible, avoid modifying Vu[e9]'s core files. Instead, create your own stylesheet that imports Vue[e9]'s stylesheet so you can modify and extend it. Assuming you’re using a package manager like npm, you’ll have a file structure that looks like this:

```
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── @e9ine/vue_components
        └── src
            └── scss
 ```

## Importing
In your `custom.scss`, you’ll import Vu[e9]'s source Sass files. You have two options: include all of Vu[e9, or pick the parts you need.

```css
// Custom.scss
// Option A: Include all of Vu[e9]

@import "node_modules/@e9ine/vue_components/src/scss/style";
```
```css
// Custom.scss
// Option B: Include parts of Vu[e9]

// Required
@import "node_modules/@e9ine/vue_components/src/scss/functions";
@import "node_modules/@e9ine/vue_components/src/scss/variables";
@import "node_modules/@e9ine/vue_components/src/scss/mixins";
@import "node_modules/@e9ine/vue_components/src/scss/utilities";

// Optional
@import "node_modules/@e9ine/vue_components/src/scss/buttons";
@import "node_modules/@e9ine/vue_components/src/scss/card";
@import "node_modules/@e9ine/vue_components/src/scss/avatar";
@import "node_modules/@e9ine/vue_components/src/scss/table";
@import "node_modules/@e9ine/vue_components/src/scss/type";
...

```

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`.

## Variable defaults

Every Sass variable in Vu[e9] includes the `!default` flag allowing you to override the variable’s default value in your own Sass without modifying the source code. Copy and paste variables as needed, modify their values, and remove the `!default flag`. If a variable has already been assigned, then it won’t be re-assigned by the default values in Vu[e9].

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import Vu[e9]'s Sass files.

Here’s an example that changes the `background-color` and `color` for the ```<body>```:

```css
// Your variable overrides
$body-bg: #000;
$body-text: #111;

// Vu[e9] and its default variables
@import "node_modules/@e9ine/vue_components/src/scss/style";
```

**Default Styles**

```css
$border-radius: 4px !default;
$default-content-padding: 16px;
$border-width: 1px !default;
$box-shadow:0 0 6px 0 rgba(0, 0, 0, .2) !default;
```

:::tip
Every component has some default styling & this is controlled by the Sass variables. These variables include the `!default` flag allowing you to override the variable’s default value. A complete list of all the variable defaults is available [here](https://github.com/e9-devops/vue-components/blob/master/src/scss/_variables.scss).
:::

## Colors

### Theme Colours 

<div class="swatches-wrapper">
<div class="swatch primary">Brand Primary</div>
<div class="swatch secondary">Brand Secondary</div>
<div class="swatch tertiary">Brand Tertiary</div>
<div class="swatch success">Success</div>
<div class="swatch warning">Warning</div>
<div class="swatch link">Link</div>
<div class="swatch danger">Danger</div>
<div class="swatch info">Info</div>
</div>

### Grays

<div class="swatches-wrapper">
<div class="swatch light">Light</div>
<div class="swatch light-grey">Light Grey</div>
<div class="swatch grey">Grey</div>
<div class="swatch dark-grey">Dark Grey</div>
<div class="swatch dark">Dark</div>
</div>

## Typography

Use our predefined type scales or pass a custom type scale to set the type scale for your project. The `$type-scales` variable has the predefined type scales.

```css
$type-scales: (minor-second: 1.067,
  major-second: 1.125,
  minor-third: 1.200,
  major-third: 1.250,
  perfect-fourth: 1.333,
  augmented-fourth: 1.414,
  perfect-fifth: 1.500,
  golden-ratio: 1.618);
```

**Default Type Variables**

```css
$font-family-heading: 'Inter',
sans-serif !default;
$font-family-body: 'Inter',
sans-serif !default;
$font-weight-light: 300 !default;
$font-weight-regular: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-bold: 700 !default;
$font-size-base: 1rem !default;
$font-weight-base: $font-weight-regular !default;
$line-height-base: 1.5 !default;
$headings-type-scale: major-second !default;
$headings-font-weight: 700 !default;
$headings-line-height: 1.2 !default;
$paragraph-margin-bottom: 1rem !default;
$lead-font-size: $font-size-base * 1.25 !default;
$lead-font-weight: 500 !default;
$small-font-size: 80% !default;
$headings-text:$dark !default;
$headings-margin-bottom:1rem !default;
```

### Responsive Typography

You can adjust the type scale for different screen sizes using the responsive breakpoints and `create-heading-type-scale` mixin. The font sizes are in rem. So adjusting the root element's font size will change th font sizes across the project.

```css
@media (max-width:767px){
    html {
      font-size: 14px;
    }
    @include create-heading-type-scale("major-second");
}
```
