const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeerNameView = function (container){
  this.container = container;
}


BeerNameView.prototype.bindEvents = function(){

  PubSub.subscribe('Brewdog:beers-ready', evt => {
    this.renderBeerNameView(evt.detail)
  })
}

BeerNameView.prototype.renderBeerNameView = function(beers){
  beers.forEach((beer) =>{
  const beerItem = this.createBeerListItem(beer)
  this.container.appendChild(beerItem)
  console.log(beerItem);
})
}

BeerNameView.prototype.createBeerListItem = function(beer){
    console.log(beer);

  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;

 }

module.exports = BeerNameView;
