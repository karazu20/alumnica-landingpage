

$(function() {
  // Start of use strict
  "use strict";

  $("#navbar").load("nav_bar.htm");
  $("#footer").load("footer.html");

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 54
  });

  //Hamburger toggle
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  //Input's Label Interaction
  var input = $('input');
  var textarea = $('textarea')

  input.focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  input.blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.form-group').removeClass('focused');
    }
  })

  textarea.focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  textarea.blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.form-group').removeClass('focused');
    }
  })


  function sendMail() {
    emailjs.sendForm("gmail", "template_sJc33IhK", "#contact-form").then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
  }
  // End of use strict
});
