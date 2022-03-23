// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
// hamburger button football club page
$("#hamburgerFc").click(function() {
    $(this).toggleClass("on");
    $("#menuFc").slideToggle();
  });

  const mq = window.matchMedia( "(max-width: 576px)" );

if (mq.matches) {
  $("#news").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#results").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#nextMatches").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#gallery").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#theClub").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#homeBtn").click(function() {
    if ($("#menuFc").is(":visible")){
      $("#menuFc").slideUp();
      $("#hamburgerFc").toggleClass("on");
    }
  });
} else {
  $("#menuFc").show();
}

// script table

$(document).ready(function(){
  $("select").change(function(){
      $(this).find("option:selected").each(function(){
          var optionValue = $(this).attr("value");
          if(optionValue){
              $(".tabla").not("." + optionValue).hide();
              $("." + optionValue).show();
          } else{
              $(".tabla").hide();
          }
      });
  }).change();
}); 

/* script toggle
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
}) */

// script goles

$("#partidoFecha1").click(function() {
  $(this).toggleClass("on");
  $("#goles").slideToggle();
});