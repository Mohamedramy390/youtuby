$(document).ready(function(){
    $("#filter").click(function(){
        $(".filter-col").slideToggle("slow");
    });
    $("#toggle").click(function (){
        $(".sidebar").css({"margin-right":"17rem"});
        $("#toggle").css({"display":"none"});
        $("#close").css({"display":"inline", "padding-left":"10px"});
        $(".layer").fadeIn()
        $(".layer").fadeIn()
    });
    $("#close").click(function (){
        $(".sidebar").css({"margin-right":"-18rem"});
        $("#toggle").css({"display":"inline" , "padding-left":"5px"});
        $("#close").css({"display":"none"});
        $(".layer").fadeOut()
        
    });
    $(".layer").click(function(){
        $(".sidebar").css({"margin-right":"-18rem"});
        $(".layer").fadeOut()
    });

    $("input:checkbox").click(function(){
        var $box = $(this);
        
        if($box.is(":checked")){
            var group = "input:checkbox[name='"+ $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);

        }
    });
});