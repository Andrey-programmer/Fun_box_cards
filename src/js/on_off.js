

$('input').each(function(index){
    $(this).on('change', function() {
       checking($(this), index);
    })
    checking($(this), index);
});

function checking(element, index){
    if(element.prop('checked')) {
        $(`.main-wrapper:eq(${index})`).removeClass('disabled').addClass('default');

        $(`.action:eq(${index})`).children().each(function(){
            if($(this).hasClass('default')){
                $(this).addClass('visible')
            } else {
                $(this).removeClass('visible');
            } 
        });

    } else {
        $(`.main-wrapper:eq(${index})`).removeClass('default selected selected_hover').addClass('disabled').removeAttr('data-selected');

        $(`.action:eq(${index})`).children().each(function(){
            if($(this).hasClass('disabled')){
                $(this).addClass('visible')
            } else {
                $(this).removeClass('visible');
            } 
        });

    }
}