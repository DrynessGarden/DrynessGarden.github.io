var isMobile=false;

$(document).ready(function(){ 
  $("#name").click(function(){ 
    //adding your code here���� 
    if(window.screen.width < 500 && window.screen.height < 800){
      isMobile = true;
   }
    if(isMobile==true)
      $('.nomobile').css("display","none");
  }); 
});

function ifIsMobile(){
   if(window.screen.width < 500 && window.screen.height < 800){
      isMobile = true;
   }
  return isMobile;
}