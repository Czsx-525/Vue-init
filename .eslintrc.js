module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "BMap": true,
        "BMapGL": true,
        "BMapLib": true,
        "BMAP_ANCHOR_BOTTOM_RIGHT": true,
        "BMAP_DRIVING_POLICY_DEFAULT": true,
        "BMAP_DRIVING_POLICY_FIRST_HIGHWAYS": true,
        "BMAP_DRIVING_POLICY_AVOID_HIGHWAYS": true,
        "BMAP_DRIVING_POLICY_AVOID_CONGESTION": true,
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "generator-star-spacing": "off",
        "no-tabs": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "no-irregular-whitespace": "off",
        "no-debugger": "off",
        "vue/no-v-model-argument": "off",
        "vue/script-setup-uses-vars": "off",
        // 'semi': [0]
    },
    "parser": "vue-eslint-parser"
};