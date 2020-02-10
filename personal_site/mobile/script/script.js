if (window.innerWidth >= 1025) {
    window.location = "../index.html";
}

function resize() {
    if(window.innerWidth >= 1025) {
        window.location = "../index.html";
    }
};

window.onresize = resize;

$(document).ready(function(){
   if($( window ).width() < 415){
       $(".navbar-text").text("Developer");
   }
});
$( window ).resize(function() {
	if($( window ).width() < 415){
       $(".navbar-text").text("Developer");
   }else{
       $(".navbar-text").text("Front-End Developer");
   }
});