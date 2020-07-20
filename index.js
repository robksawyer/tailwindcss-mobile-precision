/**
 * Release notes explain a bit more about the feature
 * @see https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0#user-content-allow-plugins-to-extend-the-user-s-config
 *
 * LEGEND
 *  [mobile-type][size][both/portrait/landscape]
 *    p =
 *        Beginning: phone e.g. psm = phone, small
 *        End: portrait e.g. psmp = phone, small, portrait (only)
 *    t = tablet e.g. tsmp = tablet, small, portrait (only)
 */
const plugin = require('tailwindcss/plugin')
const _ = require('lodash')
const selectorParser = require('postcss-selector-parser')

module.exports = plugin(
  function ({ addUtilities, variants, theme }) {
    // ...
  },
  {
    theme: {
      mobilePrecision: {
        psm: {
          // iPhone 5/SE
          raw: '(min-width: 320px),(max-width: 568px)',
        },
        psmp: {
          // iPhone 5/SE
          // Portrait
          raw:
            '(min-device-width:320px),(max-device-width:568px),(orientation: portrait)',
        },
        psml: {
          // iPhone 5/SE
          // Landscape
          raw:
            '(min-device-width:320px),(max-device-width:568px),(orientation: landscape)',
        },
        tsm: {
          // iPad 1, 2, Mini and Air
          // Portrait and Landscape
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(-webkit-min-device-pixel-ratio:1)',
        },
        tsmp: {
          // iPad 1, 2, Mini and Air
          // Portrait
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(orientation:portrait),(-webkit-min-device-pixel-ratio:1)',
        },
        tsml: {
          // iPad 1, 2, Mini and Air
          // Landscape
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(orientation:landscape),(-webkit-min-device-pixel-ratio:1)',
        },
        tmd: {
          // iPad 3, 4 and Pro 9.7"
          // Portrait and Landscape
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(-webkit-min-device-pixel-ratio:2)',
        },
        tmdp: {
          // iPad 3, 4 and Pro 9.7"
          // Portrait
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(orientation:portrait),(-webkit-min-device-pixel-ratio:2)',
        },
        tmdl: {
          // iPad 3, 4 and Pro 9.7"
          // Landscape
          raw:
            '(min-device-width:768px),(max-device-width:1024px),(orientation:landscape),(-webkit-min-device-pixel-ratio:2)',
        },
        tlg: {
          // iPad Pro 10.5"
          // Portrait and Landscape
          raw:
            '(min-device-width:834px),(max-device-width:1112px),(-webkit-min-device-pixel-ratio:2)',
        },
        tlgp: {
          // iPad Pro 10.5"
          // Portrait
          // Declare the same value for min- and max-width to avoid colliding with desktops
          // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
          raw:
            '(min-device-width:834px),(max-device-width:834px),(orientation:portrait),(-webkit-min-device-pixel-ratio:2)',
        },
        tlgl: {
          // iPad Pro 10.5"
          // Landscape
          // Declare the same value for min- and max-width to avoid colliding with desktops
          // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
          raw:
            '(min-device-width:1112px),(max-device-width:1112px),(orientation:landscape),(-webkit-min-device-pixel-ratio:2)',
        },
        txl: {
          // iPad Pro 12.9"
          // Portrait and Landscape
          // Declare the same value for min- and max-width to avoid colliding with desktops
          // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
          raw:
            '(min-device-width:1024px),(max-device-width:1366px),(-webkit-min-device-pixel-ratio:2)',
        },
        txlp: {
          // iPad Pro 12.9"
          // Portrait
          // Declare the same value for min- and max-width to avoid colliding with desktops
          // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
          raw:
            '(min-device-width:1024px),(max-device-width:1024px),(orientation:portrait),(-webkit-min-device-pixel-ratio:2)',
        },
        txll: {
          // iPad Pro 12.9"
          // Landscape
          // Declare the same value for min- and max-width to avoid colliding with desktops
          // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
          raw:
            '(min-device-width:1366px),(max-device-width:1366px),(orientation:landscape),(-webkit-min-device-pixel-ratio:2)',
        },
      },
    },
    variants: {
      mobilePrecision: ['responsive'],
    },
  }
)
