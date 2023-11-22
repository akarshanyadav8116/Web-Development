$("h1").css("color","green");
$("button");
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
$("button").click(function(){
    $("h1").css("color","purple")
});

/*$(document).keypress(function(event){
    $("h1").text(event.key);
});*/
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
//$("button").append("<button>New</button>");
$("button").click(function(){
    //$("h1").hide();
    // $("h1").fadeOut();
    //$("h1").fadeToggle();
    // $("h1").slideUp();
    //$("h1").animate({opacity:0.5});
    //only add css properties having numerical values
    //$("h1").animate({margin:"20%"});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});


