window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.background = "black";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("logo").style.fontSize = "35px";
  }
}



//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
var newHeight = $("html").height() + "px";
$(".header").css("height", newHeight);
$(".content").css("top", newHeight);
}

//Fade header on scroll
$(window).scroll(function(){
    $(".header h1").css("opacity", 1 - $(window).scrollTop() / 500);
  });

//scroll 
$('a[href*="#"]')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
  
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });