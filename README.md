# Mobile Variant Plugin for Tailwind CSS
This plugin allows you to quickly add media queries for phones and tablets (mostly Apple ones ATM).

## Requirements

This plugin requires Tailwind CSS 1.2 or later.

## Installation

```bash
yarn add tailwindcss-media-precision
```

## Usage

The following plugin options are available. See below how these are passed (via an array) to the plugin in your `tailwind.config.js`.

## Options Available
### Phone Options
#### Small Phones
- iPhone 5/SE: [psm, psmp, psml]

#### Medium Phones
- iPhone iPhone 6, 6S, 7 and 8: [pmd, pmdp, pmdl]

#### Large Phones
- iPhone 6+, 7+ and 8+: [plg, plgp, plgl]

#### X-Large Phones
- iPhone X: [pxl, pxlp, pxll]

#### All Phones
[psm, psmp, psml, pmd, pmdp, pmdl, plg, plgp, plgl, pxl, pxlp, pxll]

### Tablet Options
#### Small Tablets
- iPad 1, 2, Mini and Air: [tsm, tsmp, tsml]

#### Medium Tablets
- iPad 3, 4 and Pro 9.7": [tmd, tmdp, tmdl]

#### Large Tablets
- iPad Pro 10.5": [tlg, tlgp, tlgl]

#### X-Large Tablets
- iPad Pro 12.9": [txl, txlp, txll]

#### All Tablets
[tsm, tsmp, tsml, tmd, tmdp, tmdl, tlg, tlgp, tlgl, txl, txlp, txll]

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-media-precision')(['psm']),
  ],
};
```

The above configuration would generate the following CSS:

```css
@media (min-width: only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)) {
  .psm\:block {
    display: block
  }

  .psm\:inline-block {
    display: inline-block
  }

  .psm\:inline {
    display: inline
  }

  .psm\:flex {
    display: flex
  }

  .psm\:inline-flex {
    display: inline-flex
  }

  .psm\:table {
    display: table
  }

  .psm\:table-caption {
    display: table-caption
  }

  .psm\:table-cell {
    display: table-cell
  }

  .psm\:table-column {
    display: table-column
  }

  .psm\:table-column-group {
    display: table-column-group
  }

  .psm\:table-footer-group {
    display: table-footer-group
  }

  .psm\:table-header-group {
    display: table-header-group
  }

  .psm\:table-row-group {
    display: table-row-group
  }

  .psm\:table-row {
    display: table-row
  }

  .psm\:flow-root {
    display: flow-root
  }

  .psm\:grid {
    display: grid
  }

  .psm\:inline-grid {
    display: inline-grid
  }

  .psm\:hidden {
    display: none
  }
}
/* etc. */
```

Which you can then use in your HTML like this:

```html
<div class="psm:hidden lg:block">
  <p>I'm hidden on small phones.</p>
</div>
```

The above depends on the order of the generated CSS.
