/**
 * TailwindCSS Mobile Precision
 * Adds precise media queries for tablets and mobile phones.
 * @file index.js
 *
 * @see https://tailwindcss.com/docs/functions-and-directives/#screen
 * Release notes explain a bit more about the feature
 * @see https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0#user-content-allow-plugins-to-extend-the-user-s-config
 * @see https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106
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

const phoneScreens = {
  // Small Phones
  // iPhone 5/SE Both
  psm:
    'only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)',
  // iPhone 5/SE Portrait
  psmp:
    'only screen and (-webkit-device-pixel-ratio: 1) and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait)',
  // iPhone 5/SE Landscape
  psml:
    'only screen and (-webkit-device-pixel-ratio: 1) and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: landscape)',

  // Medium Phones
  // iPhone iPhone 6, 6S, 7 and 8
  pmd:
    'only screen and (-webkit-device-pixel-ratio: 2) and (min-width: 375px) and (max-width: 667px)',
  // iPhone iPhone 6, 6S, 7 and 8 Portrait
  pmdp:
    'only screen and (-webkit-device-pixel-ratio: 2) and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait)',
  // iPhone iPhone 6, 6S, 7 and 8 Landscape
  pmdl:
    'only screen and (-webkit-device-pixel-ratio: 2) and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape)',

  // Large Phones
  // iPhone 6+, 7+ and 8+
  plg:
    'only screen and (-webkit-device-pixel-ratio: 3) and (min-width: 414px) and (max-width: 736px)',
  // iPhone 6+, 7+ and 8+ Portrait
  plgp:
    'only screen and (-webkit-device-pixel-ratio: 3) and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait)',
  // iPhone 6+, 7+ and 8+ Landscape
  plgl:
    'only screen and (-webkit-device-pixel-ratio: 3) and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: landscape)',

  // X-Large Phones
  // iPhone X
  pxl:
    'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px)',
  // iPhone X Portrait
  pxlp:
    'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px) and (orientation: portrait)',
  // iPhone X Landscape
  pxll:
    'only screen and (-webkit-device-pixel-ratio: 3) and (device-width: 375px) and (device-height: 812px) and (orientation: landscape)',
}

const tabletScreens = {
  // Small Tablets
  // iPad 1, 2, Mini and Air Both
  tsm:
    'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px)',
  // iPad 1, 2, Mini and Air Portrait
  tsmp:
    'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)',
  // iPad 1, 2, Mini and Air Landscape
  tsml:
    'only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)',

  // Medium Tablets
  // iPad 3, 4 and Pro 9.7"
  tmd:
    'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 768px) and (max-device-width: 1024px)',
  // iPad 3, 4 and Pro 9.7" Portrait
  tmdp:
    'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width:768px) and (max-device-width: 1024px) and (orientation: portrait)',
  // iPad 3, 4 and Pro 9.7" Landscape
  tmdl:
    'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)',

  // Large Tablets
  // iPad Pro 10.5"
  tlg:
    'only screen and (-webkit-min-device-pixel-ratio: 2) and (min-device-width: 834px) and (max-device-width: 1112px)',
  // iPad Pro 10.5" Portrait
  tlgp:
    'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:834px) and (max-device-width:834px) and (orientation:portrait)',
  // iPad Pro 10.5" Landscape
  tlgl:
    'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1112px) and (max-device-width:1112px) and (orientation:landscape)',

  // X-Large Tablets
  // iPad Pro 12.9"
  txl:
    'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1024px) and (max-device-width:1366px)',
  // iPad Pro 12.9" Portrait
  txlp:
    'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1024px) and (max-device-width:1024px) and (orientation:portrait)',
  // iPad Pro 12.9" Landscape
  txll:
    'only screen and (-webkit-min-device-pixel-ratio:2) and (min-device-width:1366px) and (max-device-width:1366px) and (orientation:landscape)',
}

const screens = Object.assign({}, phoneScreens, tabletScreens)

/**
 * getUserSelectedScreens
 * Handles fetching the media query for the user selected screens
 * @param {array} options
 * @return {object}
 */
function getUserSelectedScreens(options = []) {
  let finalScreens = {}
  options.forEach((screen) => {
    finalScreens = Object.assign({}, finalScreens, {
      [screen]: screens[screen],
    })
  })
  return finalScreens
}

console.log('Total screens:', Object.keys(screens).length)

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, e, variants, theme }) {
      const currentScreens = theme('screens')
    }
  },
  function (options) {
    console.log('options', options)
    let finalScreens = getUserSelectedScreens(options)
    console.log('finalScreens', finalScreens)
    return {
      theme: {
        mobilePrecision: {
          screens: {
            ...finalScreens,
          },
        },
      },
      variants: {
        // mobilePrecision: [],
      },
    }
  }
)
