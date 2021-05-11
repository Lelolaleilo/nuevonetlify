$(document).ready(main);
var contador=1;
function main(){
    $('.bt-menu').click(function(){
/* $('nav').toggle(); */

if(contador==1){
    $('nav').animate({
        left:'0'
    });
    contador=0;
}else{
    $('nav').animate({
        left:'-500' 
        
});
contador=1;
}
    });
   
};
