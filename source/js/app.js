window.sr = ScrollReveal(); 

//how to use scroll reveal
// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });

//form reset?
var form = document.getElementById("form");
form.reset();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    } 
  });
});

//transparent to solid color nav bar
$(document).ready(function() {
     
    $(window).scroll(function() {

      if($(this).scrollTop() > 500) { 
          $('.navContent').addClass('solid');
      } else {
          $('.navContent').removeClass('solid');
      }
    });
});


var modal = document.getElementById("modal");

var btn = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function anchorClick() {
    document.getElementById("modal").style.display = "none";
  }

//randomize cards
//$(function () {
//  var parent = $("#shuffle");
//  var divs = parent.children();
//  while (divs.length) {
//      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//  }
//});