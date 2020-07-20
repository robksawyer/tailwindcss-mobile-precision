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
        screens: {
          psm: {
            // iPhone 5/SE
            raw:
              'only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)',
          },
          psmp: {
            // iPhone 5/SE
            // Portrait
            raw:
              'only screen and (-webkit-device-pixel-ratio: 1) and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait)',
          },
          psml: {
            // iPhone 5/SE
            // Landscape
            raw:
              'only screen and (-webkit-device-pixel-ratio: 1) and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: landscape)',
          },
          pmd: {
            // iPhone iPhone 6, 6S, 7 and 8
            raw:
              'only screen and (-webkit-device-pixel-ratio: 2) and (min-width: 375px) and (max-width: 667px)',
          },
          pmdp: {
            // iPhone iPhone 6, 6S, 7 and 8
            // Portrait
            raw:
              'only screen and (-webkit-device-pixel-ratio: 2) and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait)',
          },
          pmdl: {
            // iPhone iPhone 6, 6S, 7 and 8
            // Landscape
            raw:
              'only screen and (-webkit-device-pixel-ratio: 2) and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape)',
          },
          plg: {
            // iPhone 6+, 7+ and 8+
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (min-width: 414px) and (max-width: 736px)',
          },
          plgp: {
            // iPhone 6+, 7+ and 8+
            // Portrait
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait)',
          },
          plgl: {
            // iPhone 6+, 7+ and 8+
            // Landscape
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: landscape)',
          },
          pxl: {
            // iPhone X
            // Portrait and Landscape
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px)',
          },
          pxlp: {
            // iPhone X
            // Portrait
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px) and (orientation: portrait)',
          },
          pxll: {
            // iPhone X
            // Landscape
            raw:
              'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px) and (orientation: landscape)',
          },
          tsm: {
            // iPad 1, 2, Mini and Air
            // Portrait and Landscape
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px)',
          },
          tsmp: {
            // iPad 1, 2, Mini and Air
            // Portrait
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)',
          },
          tsml: {
            // iPad 1, 2, Mini and Air
            // Landscape
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)',
          },
          tmd: {
            // iPad 3, 4 and Pro 9.7"
            // Portrait and Landscape
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 768px) and (max-device-width: 1024px)',
          },
          tmdp: {
            // iPad 3, 4 and Pro 9.7"
            // Portrait
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width:768px) and (max-device-width: 1024px) and (orientation: portrait)',
          },
          tmdl: {
            // iPad 3, 4 and Pro 9.7"
            // Landscape
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)',
          },
          tlg: {
            // iPad Pro 10.5"
            // Portrait and Landscape
            raw:
              'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 834px) and (max-device-width: 1112px)',
          },
          tlgp: {
            // iPad Pro 10.5"
            // Portrait
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:834px) and (max-device-width:834px) and (orientation:portrait)',
          },
          tlgl: {
            // iPad Pro 10.5"
            // Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1112px) and (max-device-width:1112px) and (orientation:landscape)',
          },
          txl: {
            // iPad Pro 12.9"
            // Portrait and Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1024px) and (max-device-width:1366px)',
          },
          txlp: {
            // iPad Pro 12.9"
            // Portrait
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1024px) and (max-device-width:1024px) and (orientation:portrait)',
          },
          txll: {
            // iPad Pro 12.9"
            // Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1366px) and (max-device-width:1366px) and (orientation:landscape)',
          },
        },
      },
    },
    variants: {
      mobilePrecision: ['responsive'],
    },
  }
)
