const Brewdog = require('./models/brewdog.js')
const BeerNameView = require('./views/beer_name_view.js')
const BeerDetailView = require('./views/beer_detail_view.js')

document.addEventListener('DOMContentLoaded', () =>{
  console.log('JS loaded');

  const listContainer = document.querySelector('#random-beer');
  const beerNameView = new BeerNameView(listContainer);
  beerNameView.bindEvents();

  const beer = new Brewdog;
  // console.log(beer);
  beer.getData();

})
