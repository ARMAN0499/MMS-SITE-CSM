var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GISCSMWIUPCSM_1 = new ol.format.GeoJSON();
var features_GISCSMWIUPCSM_1 = format_GISCSMWIUPCSM_1.readFeatures(json_GISCSMWIUPCSM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISCSMWIUPCSM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISCSMWIUPCSM_1.addFeatures(features_GISCSMWIUPCSM_1);
var lyr_GISCSMWIUPCSM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISCSMWIUPCSM_1, 
                style: style_GISCSMWIUPCSM_1,
                popuplayertitle: "GIS CSM — WIUP CSM",
                interactive: true,
                title: '<img src="styles/legend/GISCSMWIUPCSM_1.png" /> GIS CSM — WIUP CSM'
            });
var format_JettyCSM_2 = new ol.format.GeoJSON();
var features_JettyCSM_2 = format_JettyCSM_2.readFeatures(json_JettyCSM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JettyCSM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JettyCSM_2.addFeatures(features_JettyCSM_2);
var lyr_JettyCSM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JettyCSM_2, 
                style: style_JettyCSM_2,
                popuplayertitle: "Jetty CSM",
                interactive: true,
                title: '<img src="styles/legend/JettyCSM_2.png" /> Jetty CSM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GISCSMWIUPCSM_1.setVisible(true);lyr_JettyCSM_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GISCSMWIUPCSM_1,lyr_JettyCSM_2];
lyr_GISCSMWIUPCSM_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_JettyCSM_2.set('fieldAliases', {'fid': 'fid', 'Dok.': 'Dok.', });
lyr_GISCSMWIUPCSM_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_JettyCSM_2.set('fieldImages', {'fid': 'TextEdit', 'Dok.': 'ExternalResource', });
lyr_GISCSMWIUPCSM_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_JettyCSM_2.set('fieldLabels', {'fid': 'hidden field', 'Dok.': 'no label', });
lyr_JettyCSM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});