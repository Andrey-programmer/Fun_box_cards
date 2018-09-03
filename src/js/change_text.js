$('.change_text input').each(function(index){
    $(this).keyup(function(event){
        if(event.key === 'Enter') {
            let textInner = $(this).val();
           $(`.main-wrapper .food:eq(${index})`).each(  
                  function(){
                      addText($(this), textInner);
                    }
            )
           $(`.action .food:eq(${index})`).each(
            (function() {
                addText($(this), textInner);
           })
           )
        } else {
            return;
        }
    })
})


 function addText(element, text) {    
    element.text(text);
} 