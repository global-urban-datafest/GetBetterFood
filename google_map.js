<!DOCTYPE html>
<html>
<head>
<meta name="viewport"></meta>
<title>seattle_zipcode_food_inspection - Google Fusion Tables</title>
<style type="text/css">
html, body, #googft-mapCanvas {
height: 300px;
margin: 0;
padding: 0;
width: 500px;
}
#googft-legend{background-color:#fff;border:1px solid #000;font-family:Arial,sans-serif;font-size:12px;margin:5px;padding:10px 10px 8px}#googft-legend p{font-weight:bold;margin-top:0}#googft-legend div{margin-bottom:5px}.googft-legend-swatch{border:1px solid;float:left;height:12px;margin-right:8px;width:20px}.googft-legend-range{margin-left:0}.googft-dot-icon{margin-right:8px}.googft-paddle-icon{height:24px;left:-8px;margin-right:-8px;position:relative;vertical-align:middle;width:24px}.googft-legend-source{margin-bottom:0;margin-top:8px}.googft-legend-source a{color:#666;font-size:11px}
</style>

<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false&amp;v=3"></script>

<script type="text/javascript">
function initialize() {
    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
    (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '100%' : '500px';
    mapDiv.style.height = isMobile ? '100%' : '300px';
    var map = new google.maps.Map(mapDiv, {
                                  center: new google.maps.LatLng(47.68295717386319, -122.23270406542969),
                                  zoom: 12,
                                  mapTypeId: google.maps.MapTypeId.ROADMAP
                                  });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));
    
    layer = new google.maps.FusionTablesLayer({
                                              map: map,
                                              heatmap: { enabled: false },
                                              query: {
                                              select: "col0\x3e\x3e0",
                                              from: "1xmlCaH2aUrrfkqEeszaQTonwP5MOzaJGxI7byQkB",
                                              where: ""
                                              },
                                              options: {
                                              styleId: 2,
                                              templateId: 2
                                              }
                                              });
    
    if (isMobile) {
        var legend = document.getElementById('googft-legend');
        var legendOpenButton = document.getElementById('googft-legend-open');
        var legendCloseButton = document.getElementById('googft-legend-close');
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
        legendCloseButton.style.display = 'block';
        legendOpenButton.onclick = function() {
            legend.style.display = 'block';
            legendOpenButton.style.display = 'none';
        }
        legendCloseButton.onclick = function() {
            legend.style.display = 'none';
            legendOpenButton.style.display = 'block';
        }
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="googft-mapCanvas"></div>
<input id="googft-legend-open" style="display:none" type="button" value="Legend"></input>
<div id="googft-legend">
<p id="googft-legend-title">score</p>
<div>
<span class="googft-legend-swatch" style="background-color: #f4cccc"></span>
<span class="googft-legend-range">4.118</span>
</div>
<div>
<span class="googft-legend-swatch" style="background-color: #ea9999"></span>
<br />
</div>
<div>
<span class="googft-legend-swatch" style="background-color: #e06666"></span>
<br />
</div>
<div>
<span class="googft-legend-swatch" style="background-color: #cc0000"></span>
<br />
</div>
<div>
<span class="googft-legend-swatch" style="background-color: #990000"></span>
<br />
</div>
<div>
<span class="googft-legend-swatch" style="background-color: #660000"></span>
<span class="googft-legend-range">25.809</span>
</div>
<input id="googft-legend-close" style="display:none" type="button" value="Hide"></input>
</div>

</body>
</html>