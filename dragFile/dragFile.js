$(function(){
    $('#drop').on({
        'drop':function(e){
            let f = e.originalEvent.dataTransfer.files[0];
            let reader = new FileReader();
            $(reader).on('load', function(){
                $('#dropped').attr('src', reader.result);
            });
            reader.readAsDataURL(f);
            e.preventDefault();
        },
        'dragover': function(e){
            e.preventDefault();
        }
    });
});
