$(document).ready(function(){
    $("#mybtn").on("click", function(){
        read();
    });

    $(".res-btn").click(function(){
        $(this).parents('div.row').next("div.card").toggle();
    });
});



function read(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var show = document.getElementById("mybtn");

if(dots.style.display === "none"){
    dots.style.display ="inline";
    show.innerHTML= "عرض المزيد";
    more.style.display = "none";
}else{
    dots.style.display="none";
    show.innerHTML = "عرض اقل";
    more.style.display = "inline";
}
}