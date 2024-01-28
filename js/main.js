/// <reference types="../@types/jquery" />

"use strict"

import { Ingredients } from "./Ingredients.module.js";
import { Searchbtn } from "./Search.module.js"
import { Areas } from "./area.module.js";
import { Categories } from "./category.module.js";
import { FilterCateogry } from "./filterCate.module.js";
import { FilterIngredients } from "./ingredientsfilter.module.js";
import { Arealocation } from "./locationapi.module.js";
import { Navbar } from "./navbar.module.js"
import { SearchByName } from "./searchByname.module.js";
import { SearchByFirstletter } from "./searchbyfirstletter.module.js";
import { Sourcecateog } from "./sourceCateo.module.js";



let navBar = new Navbar();
let searchBtn = new Searchbtn();
let categories = new Categories();
let areas = new Areas();
let ingredients = new Ingredients();
let filterCateogry = new FilterCateogry();
let sourcecateog = new Sourcecateog();
let arealocation = new Arealocation();
let filterIngredients = new FilterIngredients();
let searchByName = new SearchByName();

let arrData = []
$('.nav-link').on('click', function (e) {
    let linkT = e.target;
    let attrLink = $(linkT).attr('href');
     if (attrLink == "#Categories") {
        this.categories = new Categories();
        this.categories.getCategories();
    } else if (attrLink == "#Area") {
        this.areas = new Areas();
        this.areas.getAreas();
    } else if (attrLink == "#Ingredients") {
        this.ingredients = new Ingredients();
        this.ingredients.getIngredients();
    }
})

$('.cateogry').on('click', function (e) {
    let linkT = e.target;
    let NameMl = $(linkT).text();
    console.log(NameMl);
    this.filterCateogry = new FilterCateogry();
    this.filterCateogry.getFilterCateogry(arrData, NameMl);
    this.sourcecateog = new Sourcecateog();
    this.sourcecateog.getSourcecateog(arrData, NameMl);
    this.arealocation = new Arealocation();
    this.arealocation.getArealocation(arrData, NameMl);
    this.filterIngredients = new FilterIngredients();
    this.filterIngredients.getFilterIngredients(arrData, NameMl);
})

$('#SearchByName').on('keyup', function () {
    let NameMl = $('#SearchByName').val();
    this.searchByName = new SearchByName();
    this.searchByName.getSearchByName(arrData, NameMl);
    $('#content').appendTo('#searchCont');
})

$('#SearchByFirstletter').on('keyup', function () {
    let NameMl = $('#SearchByFirstletter').val();
    this.searchByFirstletter = new SearchByFirstletter();
    this.searchByFirstletter.getSearchByFirstletter(arrData, NameMl);
    $('#content').appendTo('#searchCont');
    
})

$('.searx').on('click', function () {
    $('#searchCont').removeClass('d-none');
    $('#searchCont').addClass('d-block');
})

$(document).ready(function () {
    $('.loading').fadeOut(3000, function () {
        $('body').css('overflow', 'auto')
    })
})

$('#inputName').on('blur', function () {
    let NameMl = $('#inputName').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validNameInput(NameMl);
    $('#content').appendTo('#contactUS');
})

$('#inputEmail').on('blur', function () {
    let NameMl = $('#inputEmail').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validEmailInput(NameMl);
    $('#content').appendTo('#contactUS');
})

$('#inputphone').on('blur', function () {
    let NameMl = $('#inputphone').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validphoneInput(NameMl);
    $('#content').appendTo('#contactUS');
})
$('#inputAge').on('blur', function () {
    let NameMl = $('#inputAge').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validAgeInput(NameMl);
    $('#content').appendTo('#contactUS');
})
$('#inputPassword').on('blur', function () {
    let NameMl = $('#inputPassword').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validPasswordInput(NameMl);
    $('#content').appendTo('#contactUS');
})
$('#inputRepassword').on('blur', function () {
    let NameMl = $('#inputRepassword').val();
    this.searchbtn = new Searchbtn();
    this.searchbtn.validPasswordInput(NameMl);
    $('#content').appendTo('#contactUS');
})
$('.contac').on('click', function () {
    $('#contactUS').removeClass('d-none');
    $('#contactUS').addClass('d-block');
})