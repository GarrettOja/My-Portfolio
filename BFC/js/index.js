// Function to make navigation same height as background container
$(function() {
    $('.same').matchHeight();
});

// Function to make contact sections same height
$(function() {
    $('.equal').matchHeight();
});

//Function To Display Popup
function div_show(x) {
document.getElementById(x).style.display = "block";
};

//Function To Hide Popup
function div_hide(x) {
document.getElementById(x).style.display = "none";
};

function aboutUs() {
  document.getElementById('aboutUs').style.display = "block";
  document.getElementById('aboutDrSteph').style.display = "none";
  document.getElementById('aboutDrPerry').style.display = "none";
};

function aboutDrSteph() {
  document.getElementById('aboutDrSteph').style.display = "block";
  document.getElementById('aboutUs').style.display = "none";
  document.getElementById('aboutDrPerry').style.display = "none";
};

function aboutDrPerry() {
  document.getElementById('aboutDrPerry').style.display = "block";
  document.getElementById('aboutUs').style.display = "none";
  document.getElementById('aboutDrSteph').style.display = "none";
};

// Animated Navigations

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutUs").offset().top
    }, 750);
});

$("#philo").click(function() {
    $('html, body').animate({
        scrollTop: $("#ourPhilosophy").offset().top
    }, 750);
});

$("#cont").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactSection").offset().top
    }, 750);
});

$("#aboutUsTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutUs").offset().top
    }, 500);
});

$("#aboutDrStephTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutDrSteph").offset().top
    }, 500);
});

$("#aboutDrPerryTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutDrPerry").offset().top
    }, 500);
});
