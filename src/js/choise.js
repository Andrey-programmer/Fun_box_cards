
$('.main-wrapper').each(function(){       
    $(this).click(function(e){      
       if($(this).hasClass('default')) {
           $(this).removeClass('default').addClass('selected');
           $(this).siblings('.action').children().removeClass('visible');
           $(this).siblings('.action').children('.selected').addClass('visible');
       } else
       if($(this).hasClass('selected')) {
        $(this).removeClass('selected selected_hover').addClass('default');
        $(this).siblings('.action').children().removeClass('visible');
        $(this).siblings('.action').children('.default').addClass('visible');
       }else 
       if($(this).hasClass('disabled')) {
       return false;
        } 
    })
});



$('.buy').each(function(){  
    $(this).click(function(){
        console.log($(this).parents('.item').first().children('.main-wrapper'));
        $(this).parents('.item').first().children('.main-wrapper').click();
    })
})









