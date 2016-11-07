var Carto;

export default Carto = {};

Carto.generateVizUri = function (url) {
  return url.substring( 0, url.indexOf( '.com' ) + 4 ) + '/api/v3/viz/' + /\/([\w*\-A-z0-9]*\-[A-z0-9]*)\//g.exec( url )[ 1 ] + '/viz.json';
};

Carto.getCoords = function (vizJSON) {
  return {
    center: vizJSON.center.replace( /[\[\]]/g, '' ).split( ',' ).map( v => {
          return parseFloat( v );
      } ),
    zoom: vizJSON.zoom
  };
}
