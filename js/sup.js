$(document).ready(function(){

  $("html").niceScroll({
cursorcolor:"aquamarine",
cursorwidth:"6px"
});
/**
 * Listen to scroll to change header opacity class
 */
  function checkScroll(){
      var startY = 470; //The point where the navbar changes in px
      //$('.navbar').height() * 2
      if($(window).width() > 750){//afhémtch 3leh lazem nhotha 750 bech tji mrégla
        if($(window).scrollTop() > startY){
            $('.navbar').removeClass("scrolled");
        }else{
            $('.navbar').addClass("scrolled");
        }
     }
     else {
       $('.navbar').removeClass("scrolled");
     }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }
  $('.carousel').carousel({
    interval: 6000
  })

  //Show Color Option When Click On The gear
  $('.gear-check').click(function(){
    $('.color-option').fadeToggle();
  });

  //Change Theme COlor On Click
var colorLi=  $('.color-option ul li');

  colorLi
  .eq(0).css('backgroundColor','#E41B17').end()
  .eq(1).css('backgroundColor','#E426D5').end()
  .eq(2).css('backgroundColor','#009AFF').end()
  .eq(3).css('backgroundColor','#FFD500');

  colorLi.click(function(){
  //  console.log($(this).attr('data-value'));
    $("link[href*='theme']").attr('href',$(this).attr('data-value'));
  });

  //Scroll Button
  var scrollBotton=$('#scroll-top');
  $(window).scroll(function(){
    $(this).scrollTop()>=700 ? scrollBotton.show() : scrollBotton.hide();

  });
  scrollBotton.click(function(){
    $('html,body').animate({scrollTop : 0},600);
  });

});

//Loading
$(window).on('load',function(){

//The simplest code
//$('.loading-overlay .spinner, .loading-overlay').fadeOut(2000)

  //To fadeOut the h1 and then fadeOut the loading-overlay after that we delete it from the DOM
  $('.loading-overlay .spinner').fadeOut(2000,function(){

    //Show The Scroll
    $('body').css('overflow','auto');

    $(this).parent().fadeOut(2000,function(){

      $(this).remove();
    });
  });
});
