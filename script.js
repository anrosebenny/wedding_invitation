
// Set the date we're counting down to
const weddingDate = new Date("2026-04-09T16:30:00+05:30").getTime();// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with id="days", "hours", etc.
  var daysEl = document.getElementById("days");
  if(daysEl) {
    daysEl.innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if(daysEl) {
        document.querySelector(".countdown-container").innerHTML = "<p class='wedding-live'>It's Time!</p>";
    }
  }
}, 1000);

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll(".slide-up, .slide-left, .slide-right, .fade-in");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Trigger reveal on load
window.onload = function() {
    reveal();
    setTimeout(function() {
        document.querySelector('.hero-content').classList.add('active');
    }, 500);
};

// Set the date we're counting down to
var countDownDate = new Date("April 9, 2026 04:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with id="days", "hours", etc.
  var daysEl = document.getElementById("days");
  if(daysEl) {
    daysEl.innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if(daysEl) {
        document.querySelector(".countdown-container").innerHTML = "<p class='wedding-live'>It's Time!</p>";
    }
  }
}, 1000);

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll(".slide-up, .slide-left, .slide-right, .fade-in");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Trigger reveal on load
window.onload = function() {
    reveal();
    setTimeout(function() {
        document.querySelector('.hero-content').classList.add('active');
    }, 500);
};

