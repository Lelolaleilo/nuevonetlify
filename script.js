document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 6));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 100){
        buttonUp.style.transform = "scale(0)";
    
    }

}

 

$('ul a').click(function(e){
    var time=500
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
            scrollTop: $(strAncla).offset().top },time);
    
});



