# Utilities
## Selection Indicators

<SplitTab>
  <SelectionIndicatorsExample slot="example"/>
  <<< @/docs/.vuepress/components/SelectionIndicatorsExample.vue
</splitTab>


## Responsive Breakpoints

Write media queries easily by using our Sass mixins.  

The breakpoints used are:
```
  xs: 0
  sm: 576px
  md: 768px
  lg: 992px
  xl: 1200px
```

```css
// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

You can also use mixins that go in the other direction.

```css
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
```

Targeting a single segment of screen sizes using the minimum and maximum breakpoint is also possible.

```css
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
```

Similarly, media queries may span multiple breakpoint widths:

```css
@include media-breakpoint-between(md, xl) { ... }
```

## Text Utilities

Change the text sizes easily by using the following text utility classes.

```css
 .t-xxl {
    font-size: 1.875rem;
  }

  .t-xl {
    font-size: 1.5rem;
  }

  .t-l {
    font-size: 1.25rem;
  }

  .t-s {
    font-size: 0.75rem;
  }

  .t-xs {
    font-size: 0.625rem;
  }

  .t-xxs {
    font-size: 0.5rem;
  }
  ```
