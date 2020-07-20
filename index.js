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
            raw: 'screen and (min-width: 320px) and (max-width: 568px)',
          },
          psmp: {
            // iPhone 5/SE
            // Portrait
            raw:
              'screen and (min-device-width:320px) and (max-device-width:568px) and (orientation:portrait)',
          },
          psml: {
            // iPhone 5/SE
            // Landscape
            raw:
              'screen and (min-device-width:320px) and (max-device-width:568px) and (orientation:landscape)',
          },
          pxl: {
            // iPhone X
            // Portrait and Landscape
            raw:
              'screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3)',
          },
          pxlp: {
            // iPhone X
            // Portrait
            raw:
              'screen and (device-width:375px) and (device-height:812px) and (orientation:portrait) and (-webkit-device-pixel-ratio:3)',
          },
          pxll: {
            // iPhone X
            // Landscape
            raw:
              'screen and (device-width:375px) and (device-height:812px) and (orientation:landscape) and (-webkit-device-pixel-ratio:3)',
          },
          tsm: {
            // iPad 1, 2, Mini and Air
            // Portrait and Landscape
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px),(-webkit-min-device-pixel-ratio:1)',
          },
          tsmp: {
            // iPad 1, 2, Mini and Air
            // Portrait
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:1)',
          },
          tsml: {
            // iPad 1, 2, Mini and Air
            // Landscape
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:1)',
          },
          tmd: {
            // iPad 3, 4 and Pro 9.7"
            // Portrait and Landscape
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px) and (-webkit-min-device-pixel-ratio:2)',
          },
          tmdp: {
            // iPad 3, 4 and Pro 9.7"
            // Portrait
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:2)',
          },
          tmdl: {
            // iPad 3, 4 and Pro 9.7"
            // Landscape
            raw:
              'screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2)',
          },
          tlg: {
            // iPad Pro 10.5"
            // Portrait and Landscape
            raw:
              'screen and (min-device-width:834px) and (max-device-width:1112px) and (-webkit-min-device-pixel-ratio:2)',
          },
          tlgp: {
            // iPad Pro 10.5"
            // Portrait
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'screen and (min-device-width:834px) and (max-device-width:834px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:2)',
          },
          tlgl: {
            // iPad Pro 10.5"
            // Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'screen and (min-device-width:1112px) and (max-device-width:1112px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2)',
          },
          txl: {
            // iPad Pro 12.9"
            // Portrait and Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'screen and (min-device-width:1024px) and (max-device-width:1366px) and (-webkit-min-device-pixel-ratio:2)',
          },
          txlp: {
            // iPad Pro 12.9"
            // Portrait
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'screen and (min-device-width:1024px) and (max-device-width:1024px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:2)',
          },
          txll: {
            // iPad Pro 12.9"
            // Landscape
            // Declare the same value for min- and max-width to avoid colliding with desktops
            // Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
            raw:
              'screen and (min-device-width:1366px) and (max-device-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2)',
          },
        },
      },
    },
    variants: {
      mobilePrecision: ['responsive'],
    },
  }
)
