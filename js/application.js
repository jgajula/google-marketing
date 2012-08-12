
    $(document).ready(function(){
        $('.productLinks').click(function(){
            var hideable = $(this).attr('id')+'Description';
            $('#productDescription p').hide();
            $('#'+hideable).fadeIn();
            return false;
        });
    });