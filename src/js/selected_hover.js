$('.main-wrapper').each(function () {

    $(this).click(() => {
        if (!$(this).hasClass('disabled')) {
            $(this).attr('data-selected', 1);
        }
    })
})

$('.main-wrapper').each(function(){
    $(this).mouseout(()=>{
        if($(this).hasClass('default') && $(this).data('selected') === 1){
            $(this).addClass('selected_hover').find('.subheader').text('Котэ не одобряет?');          
        }
    
    })
})

$('.main-wrapper').each(function(){
    $(this).mouseover(()=>{
        if($(this).hasClass('selected_hover')){
            $(this).removeClass('selected_hover').find('.subheader').text('Сказочное заморское яство');           
        }       
    })
})