/// <reference types="../@types/jquery" />




export class Searchbtn {

    constructor() {

        let arrData = []
        
     
    }

    validNameInput(NameMl) {

        let regexName = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;
        console.log(NameMl);
        if (console.log(regexName.test(NameMl))) {
            $('notvall').addClass('d-none');
            return true;
        } else {
            $('notvall').html(`<strong class="text-danger">Start with Cap Letter!!</strong>`);
            $('notvall').removeClass('d-none');
            return false;
        }

    }

    validEmailInput(NameMl) {

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(NameMl);
        if (regexEmail.test(NameMl)) {
            $('notvall').addClass('d-none');
            
        } else {
            $('notvall').html(`<strong class="text-danger">DontFORGET @EX.COM !!</strong>`);
            $('notvall').removeClass('d-none');;
        }

    }

    validphoneInput(NameMl) {

        let regexphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        console.log(NameMl);
        // console.log(NameMl.val());
        if (regexphone.test(NameMl)) {
            $('notvall').addClass('d-none');
        } else {
            $('notvall').html(`<strong class="text-danger">EX : 011....!!</strong>`);
            $('notvall').removeClass('d-none');;
        }

    }

    validAgeInput(NameMl) {

        let regexAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

        console.log(NameMl);
        if (regexAge.test(NameMl)) {
            $('notvall').addClass('d-none');
        } else {
            $('notvall').html(`<strong class="text-danger">age!!</strong>`);
            $('notvall').removeClass('d-none');;
        }

    }


     validPasswordInput(NameMl) {

        let regexPassword = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
        console.log(NameMl);
        if (regexPassword.test(NameMl)) {
            $('notvall').addClass('d-none');
        } else {
            $('notvall').html(`<strong class="text-danger">min one letter capital!!</strong>`);
            $('notvall').removeClass('d-none');;
        }
    }

}
