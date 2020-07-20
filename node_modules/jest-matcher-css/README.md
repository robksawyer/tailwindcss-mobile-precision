# CSS Matcher for Jest

## Installation

```bash
npm install jest-matcher-css
```

## Usage

In your Jest config:
```json
"jest": {
  "setupTestFrameworkScriptFile": "./setup.js"
}
```

In `setup.js`:
```js
const cssMatcher = require('jest-matcher-css');

expect.extend({
  toMatchCss: cssMatcher,
});
```

## Credit

Written by [Adam Wathan](https://github.com/adamwathan) for [Tailwind CSS](https://github.com/tailwindcss/tailwindcss/blob/master/jest/customMatchers.js). I moved it into its own module to use it in a couple of Tailwind plugins.
