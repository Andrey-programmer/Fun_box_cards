
 $('.subheader').text('Сказочное заморское яство');
 $('.header').text('Нямушка');
 $('.name_items').text('порций');
 $('.units').text('кг');

 

 $(window).resize(resizeWindow);

 function resizeWindow() {
    if($(window).width() < 1200) {
        $('.container').removeClass('container').addClass('container-fluid');
    } else
     if ($(window).width() >= 1200) {
        $('.container-fluid').removeClass('container-fluid').addClass('container');
     }   
};

resizeWindow();