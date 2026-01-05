# ⚠️ ARCHIVED - This repository is no longer maintained

**This repository has been archived and is no longer actively maintained.**

This project was last updated on 2018-02-02 and is preserved for historical reference only.

- 🔒 **Read-only**: No new issues, pull requests, or changes will be accepted
- 📦 **No support**: This code is provided as-is with no support or updates
- 🔍 **For reference only**: You may fork this repository if you wish to continue development

For current CARTO projects and actively maintained repositories, please visit: https://github.com/CartoDB

---

# [DEPRECATED] CartogramUtils ![No Maintenance Intended](https://img.shields.io/badge/No%20Maintenance%20Intended-%E2%9C%95-red.svg)

This is no longer supported.

## Installation & usage

```bash
me$ npm i cartogramutils
// or
me$ yarn add cartogramutils
```

```javascript
import CGU from 'cartogramutils';
```
## API

### *CGU* object

#### `.tangramLayer`

```javascript
/**
 * Load and return the map instance
 * @param  {String} mapUrl     string with the url of a map in carto
 * @return {Promise}            return a leaflet map instance
 */
const mapUrl = 'https://mzapatero-carto.carto.com/builder/7720f049-a753-42d1-8010-12f727b9c5d5/embed';

// Async
CGU.tangramLayer(mapUrl).addTo(map).then(function (scene) {
  // Do things with the scene
});

// Sync
CGU.utils.spawn(function*() {
  let scene = yield CGU.tangramLayer(mapUrl).addTo(map);
});
```

#### `.addLayer`
###### ToDo
```javascript
scene; // <= previously created

let layer = {
  id: 'layer0',
  meta: {
    cartocss: `#layer {polygon-fill: #3A118B;}`
  }
};

CGU.addVectorLayer(layer).to(scene);
```

#### `.setLayer.styles`
###### ToDo
```javascript
const cartocss = `#layer {polygon-fill: black;}`;

CGU.setLayer('layer0').styles(cartocss).in(scene);
```

#### `.setLayer.visible`
###### ToDo
```javascript
CGU.setLayer('layer0').visible(false).in(scene);
```

## Contributing

```sh
me$ git clone $repo_url
cd into_folder
yarn
yarn start
```

It will print the dev url to try the demos.

```sh
[0001] info  Server running at http://192.168.0.12:8000/ (connect)
[0001] info  LiveReload running on 35729
[0003] 43ms       1115B GET    200 /
[0003] 7ms         886B GET    200 /demos/css/main.css
[0004] 220ms       12KB GET    200 /demos/main.js
```

We use ES6 and Node > 6.X, I'm using 7.0 right now.
