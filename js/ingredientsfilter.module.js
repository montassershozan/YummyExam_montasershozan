/// <reference types="../@types/jquery" />

export class FilterIngredients {

    constructor() {
      let arrData = [];
     

    }
  
    async getFilterIngredients(arrData,NameMl) {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${NameMl}`)
      let dataMeals = await response.json();
      arrData = dataMeals.meals;
      console.log(arrData)
      this.displayFilterIngredients(arrData);
      this.getOver();
    }

   
    displayFilterIngredients(arrData) {
        let divs = "";
        let contentV = document.querySelector('#content .row');
        for (let i = 0; i < arrData.length ; i++) {
          divs += `
          <div class="col-md-3">
            <div class="position-relative on-ph">
              <img src="${arrData[i].strMealThumb}" class="img-fluid rounded-start " alt="photo">
              <div class="on-photo text-center rounded-4 mt-3">
                <h4 class="mt-5">${arrData[i].strMeal}</h4>
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