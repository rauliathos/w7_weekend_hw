const BeerDetailView = function(){}

BeerDetailView.prototype.createBeerDetail = function(beer){

  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h1');
  name.textContent = beer.name;
  // console.log(beer.name);
  beerDetail.appendChild(name);

  const image = document.createElement('img')
  image.src = beer.image_url
  beerDetail.appendChild(image)

  const detailList = document.createElement('ul')



    const description = this.createDetailListItem('Description', beer.description);
    detailList.appendChild(description);

    const food_pairing = this.createDetailListItem('Food Pairing', beer.food_pairing)
    detailList.appendChild(food_pairing)



    beerDetail.appendChild(detailList)
    return beerDetail
}

BeerDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};


module.exports = BeerDetailView
