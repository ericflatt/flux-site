window.sr = ScrollReveal();

//how to use scroll reveal
// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

//form reset?
// var form = document.getElementById("form");
// form.reset();

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
          $('.nav').addClass('solid');
      } else {
          $('.nav').removeClass('solid');
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



//       --Email Form--

// var x = $('#emailField').val();

// function validateForm() {

//   console.log(x);
//   if (x == "") {
//     alert("Invalid email address, please try again.");
//     $('#submit-form').addClass("email-submit-error").text("Register")
//     return false;
//   }
//   $('#email-form').trigger("reset")
// }

var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycby3QeneQ5eVhhpyqf1-yb0VujP1LZqrtOlCh2u6gYU42s9Ix28/exec'

var validations ={
    email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']};

$(document).ready(function(){
  $("input[type=email]").change( function(){
    validation = new RegExp(validations['email'][0]);
    if (!validation.test(this.value)){
      this.setCustomValidity(validations['email'][1]);
      return false;

    } else {
      this.setCustomValidity('');
      $('#submit-form').on('click', function(e) {
        e.preventDefault();
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: $form.serializeObject(),
          success: (
            console.log("success!"),
            $('#submit-form').addClass("email-submit-confirm").text("You're all set!"),
            $('#email-form').trigger("reset")
          )
        });
      })
    }
  });
})



//view more

function portfolioViewMore() {
  $(".person").addClass("card-display-shown");
  console.log("view more clicked")
}

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		window.location.href = "http://bluuuuuuux.com/";
	}

};
