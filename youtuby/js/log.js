$(document).ready(function(){
    $(".close-mark").click(function(){
        $(this).parents('.card').css({"display":"none"})
    });
});