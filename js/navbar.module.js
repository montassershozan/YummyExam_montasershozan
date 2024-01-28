/// <reference types="../@types/jquery" />

 export class Navbar{
    constructor(){
        $('.open-close-icon').on('click', function () {
            let widthNav = $('.navbar-expand-sm').outerWidth();
            let logoic = $('.logo-ic').css('left');
            if (logoic == '0px') {
                $('.navbar-expand-sm').fadeIn(200);
                $('.logo-ic').animate({ left: `${widthNav + 224}` }, 450)
                $('.open-close-icon').removeClass('fa-align-justify');
                $('.open-close-icon').addClass('fa-x');
                $('.navl').slideDown(800);
            }
            else {
                $('.navbar-expand-sm').hide(1200);
                $('.logo-ic').animate({ left: `0px` }, 450)
                $('.open-close-icon').removeClass('fa-x');
                $('.open-close-icon').addClass('fa-align-justify');
                $('.navl').slideUp(800);
            }
        })
    }
}