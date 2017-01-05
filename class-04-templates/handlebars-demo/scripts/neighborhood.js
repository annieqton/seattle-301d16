var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Neighborhood.prototype.toHtml = function() {
 // TODO: Complete this using Handlebars!!!
 var source = $('#neighborhood-template').html();
 var templateRender = Handlebars.compile(source);
 var context = neighborhoodDataSet;
 return templateRender(this);
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject){
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
