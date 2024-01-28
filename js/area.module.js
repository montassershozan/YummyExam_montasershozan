/// <reference types="../@types/jquery" />

export class Areas {

    constructor() {
      let arrData = [];
    }
  
    async getAreas(arrData) {
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      let dataMeals = await response.json();
      arrData = dataMeals.meals;
      console.log(arrData)
      this.displayaREA(arrData);
    }
  
    displayaREA(arrData) {
      
      let divs = "";
      let contentV = document.querySelector('#content .row');
      for (let i = 0; i < arrData.length; i++) {
        divs += `
        <div class="col-md-3 text-light text-center pt-5">
        <i class="fa-solid fa-house-laptop fa-4x " ></i>
        <h3>${arrData[i].strArea}</h3>
       </div>
    `
      }
      contentV.innerHTML = divs;
      
    }
  
  }