module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "browser": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["src/**/*.test.js", "src/setupTests.js"]}],
        "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
        "react/prop-types": 0,
        "react/no-danger": 0,
        "camelcase": 0,
        "import/no-named-as-default": 0,
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "max-len": ["error", 150, 2, {
            "ignoreUrls": true,
            "ignoreComments": true,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],
        "react/jsx-wrap-multilines": 0,
        "react/no-array-index-key": "off",
        "react-app/jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [0],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]
    }
  };
  