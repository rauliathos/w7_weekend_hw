const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Brewdog = function(){
  this.brewdogData = [];
};


Brewdog.prototype.getData = function(){
  const request = new RequestHelper('https://api.punkapi.com/v2/beers/random');
  request.get().then((data) => {
    this.brewdogData = data;
    
    PubSub.publish('Brewdog:beers-ready', this.brewdogData);
  });

}

module.exports = Brewdog;
