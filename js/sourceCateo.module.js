/// <reference types="../@types/jquery" />

export class Sourcecateog {

    constructor() {
      let arrData = [];
    }
  
    async getSourcecateog(arrData,NameMl) {
      $('.loading').fadeOut(300);
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${NameMl}`)
      let dataMeals = await response.json();
      arrData = dataMeals.meals;
      console.log(arrData);
      this.displaySourcecateog(arrData);
      this.getOver();
      $('.loading').fadeOut(300);
    }
    


    displaySourcecateog(arrData) {
      let divs = "";
      let contentV = document.querySelector('#content .row');
      for (let i = 0; i < arrData.length; i++) {
        divs += `           <div class="col-md-5 text-light mt-5">
        <img src="${arrData[i].strMealThumb}" class="img-fluid rounded-start " alt="photo">
        <h2>${arrData[i].strMeal}</h2>
        </div>
        <div class="col-md-7 text-light mt-5">
            <h2>Instructions</h2>
            <p>${arrData[i].strInstructions}</p>
            <h2>Area : ${arrData[i].strArea}</h2>
            <h2>Category : ${arrData[i].strCategory}</h2>
            <h2>Recipes :</h2>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient1}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient2}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient3}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient4}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient5}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient6}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient7}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strIngredient8}</p>
            <h2>Tags :</h2>
            <p class="bg-info p-2 rounded-3 d-inline-block">${arrData[i].strTags}</p>
            <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-success" ><a href="${arrData[i].strSource}" target="_blank" class="text-light text-decoration-none">Source</a></button>
                <button class="btn btn-danger" ><a href="${arrData[i].strYoutube}" target="_blank" class="text-light text-decoration-none">Youtube</a></button>
        </div>`
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