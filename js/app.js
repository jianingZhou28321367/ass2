const vis1 = "js/WorldCO2Emissions.vl.json";

vegaEmbed('#choropleth_map', vis1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

const vis2 = "js/TOP10GHG.json";

vegaEmbed('#scatter_plot', vis2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

const vis3 = "js/KgCO2_GDP.json"
vegaEmbed('#kgco2_chart', vis3).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);