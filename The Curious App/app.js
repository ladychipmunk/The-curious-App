
(function() {
  var app = angular.module('curiousApp', []);

  app.controller('PlacesController', function(){
    this.spots = places;
  });

  var places = [{
    name: 'Trinity Gate',
    info:"",
    photo:"img/trinity-college-dublin.jpg",
    coordinateX:"53.34446",
    coordinateY:"-6.25911"

    
  },{
    name: 'Molly Malone',
    info:"",
    photo:"",
    coordinateX:"53.34446",
    coordinateY:"-6.25911"

  },{
    name: 'Boat Restaurant',
    info:"",
    photo:"",
    coordinateX:"53.3471",
    coordinateY:"-6.23795"

  },{
    name: 'Umbrellas',
    info:"",
    photo:"img/umbrellas.jpg",
    coordinateX:"53.34109",
    coordinateY:"-6.25937"

  },{
    name: 'Dublin Trublin',
    info:"",
    photo:"img/dublin-trublin.jpg",
    coordinateX:"53.33992",
    coordinateY:"-6.26439"

  },{

    name: 'Lucky Path',
    info:"",
    photo:"img/lucky-path.jpg",
    coordinateX:"",
    coordinateY:""

  },{

    name: 'Famine Memorial',
    info:"",
    photo:"img/",
    coordinateX:"53.34804",
    coordinateY:"-6.25005"


  }];
})();

