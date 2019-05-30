# CalderaJS Babel Preset

A shared babel preset for use in Caldera JavaScript projects that use React and are not intended to work with WordPress.


## Using This Preset
* Install
```
yarn add @calderajs/babel-preset-calderajs --dev
```
or with npm:

```$xslt
npm i @calderajs/babel-preset-calderajs --dev
```
* Add to .babelrc
```
{
  "presets": [
    "@calderajs/babel-preset-calderajs"
  ]
}

```

* package.json

```
"devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.0.0",
    "@babel/polyfill": "^7.4.4",
    "@calderajs/babel-preset-calderajs": "^0.9.4",
    "babel-loader": "^8.0.5"
}
```

## BTW If Using WordPress, Do This Instead
If you're using babel for a WordPress plugin and want to use wp.createElement() instead of React.createElement() to transform JSX, do this instead:

* Install
```
yarn add @wordpress/babel-preset-default --dev
```
or with npm:

```
npm i v --dev
```
* Add to .babelrc


```
{
	"presets": [ "@wordpress/babel-preset-default" ],
	"plugins": [
		[ "transform-react-jsx", {
			"pragma": "wp.element.createElement"
		} ]
	]
}

```
