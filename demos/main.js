var scene_url = '';

var map = L.map( 'map' );

L.tileLayer( 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '<a href="http://carto.com">CARTO</a> © 2016',
    maxZoom: 18
} ).addTo( map );

map.setView( [ 40, 0 ], 5 );

document.getElementById( 'send' ).addEventListener( 'click', function( e ) {
    let val = document.getElementsByTagName( 'input' )[0].value;

    CGU.tangramLayer(val).addTo(map).then(function (scene) {
      sceneLayer = scene;
    });
} );
