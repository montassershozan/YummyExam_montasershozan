/// <reference types="../@types/jquery" />

export class Ingredients {

    constructor() {
      let arrData = [];
    }
  
    async getIngredients(arrData) {
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      let dataMeals = await response.json();
      arrData = dataMeals.meals;
      console.log(arrData)
      this.displayIngredients(arrData);
    }
  
    displayIngredients(arrData) {
     
      let divs = "";
      let contentV = document.querySelector('#content .row');
      for (let i = 0; i < 20 ; i++) {
        divs += `
        <div class="col-md-3 text-light text-center pt-5">
        <i class="fa-solid fa-drumstick-bite fa-4x pt-3" ></i>
        <h3 class="pt-3">${arrData[i].strIngredient}</h3>
        <p class="pt-3">${arrData[i].strDescription.slice(0,120)}</p>
       </div>
    `
      }
      contentV.innerHTML = divs;
      $('#content').appendTo('#searchCont');
    }
  
  }