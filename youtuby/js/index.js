$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active")
        $(this).addClass("active");
    });


    $("#toggle").click(function (){
        $(".sidebar").css({"margin-right":"17rem"});
        $("#toggle").css({"display":"none"});
        $("#close").css({"display":"inline", "padding-left":"10px"});
        $(".layer").css({"display":"inline"})
        $(".layer").css({ "opacity": "100%"});
    });
    $("#close").click(function (){
        $(".sidebar").css({"margin-right":"-18rem"});
        $("#toggle").css({"display":"inline" , "padding-left":"5px"});
        $("#close").css({"display":"none"});
        $(".layer").css({"display":"none"})
        $(".layer").css({ "opacity": "0"});
    });
    $(".layer").click(function(){
        $(".sidebar").css({"margin-right":"-18rem"});
        $(".layer").css({ "opacity": "0"});
        $("#close").click()
    });

    $(".fa-magnifying-glass").click(function(){
        $(".search-input").slideToggle("slow")
       
    });

});    


       
