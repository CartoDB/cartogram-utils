import Cartoyaml from './cartoyaml';
import Carto from './utils/carto_utils';
import Tangram from 'tangram';
import Utils from './utils/utils';

const ATTRIBUTION = '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'

const loadTangramLayer = function( url ) {
    return Utils.spawn(function*() {
        let vizJSON = yield Cartoyaml.getVizJSON(url),
            scene_url = Utils.generateBlobFile(yield Cartoyaml.fromCarto(vizJSON));
        let layerScene = Tangram.leafletLayer({
          scene: scene_url,
          attribution: ATTRIBUTION
        });

        layerScene.vizJSON = vizJSON;

        return layerScene;
    });
};

const tangramLayer = function (url) {
  let vizUri = Carto.generateVizUri(url);

  return {
    addTo: function (map) {
      return Utils.spawn(function*() {
        let layer = yield loadTangramLayer(vizUri);
        let coords = Carto.getCoords(layer.vizJSON);

        map.setView(coords.center, coords.zoom);

        return layer.addTo(map);
      });
    }
  };
};

var TangramHelper;

export default TangramHelper = {
  tangramLayer
};
