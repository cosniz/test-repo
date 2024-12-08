$(document).ready(function(){
    $('form').validate();
});

$(document).ready(function(){
    $('.more').click(function(){
        $('.show-details').fadeToggle("slow", "linear");
    });
});
