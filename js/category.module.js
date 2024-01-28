/// <reference types="../@types/jquery" />


export class Categories {

  constructor() {
    let arrData = [];

  }

  async getCategories(arrData) {

    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let dataMeals = await response.json();
    arrData = dataMeals.categories;
    this.displayCate(arrData);
    this.getOver();

  }

  displayCate(arrData) {
    let divs = "";
    let contentV = document.querySelector('#content .row');
    for (let i = 0; i < arrData.length; i++) {
      divs += `
          <div class="col-md-3">
            <div class="position-relative on-ph">
              <img src="${arrData[i].strCategoryThumb}" class="img-fluid rounded-start mt-5" alt="photo">
              <div class="on-photo text-center rounded-4 mt-3">
                <h2 class="mt-3">${arrData[i].strCategory}</h2>
                <p class="mt-1 p-2 ">${arrData[i].strCategoryDescription.slice(0, 135)}</p>
            </div>
          </div>
  </div>
  `
    }
    contentV.innerHTML = divs;
  }

  getOver() {
    $('.on-ph').on('mouseover', function (e) {
        $('.on-photo').slideDown(200);
      $('.on-photo').animate({ top: 0 }, 200)
  })
}
}