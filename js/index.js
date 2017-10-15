$(function() {
    $('.pNames').matchHeight();
});
$(function() {
    $('.info').matchHeight({byRow: false,});
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});
$("#proj1").click(function() {
    $('html, body').animate({
        scrollTop: $("#myProjects").offset().top
    }, 1000);
});
$("#about1").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top
    }, 1000);
});
$("#info1").click(function() {
    $('html, body').animate({
        scrollTop: $("#myInfo").offset().top
    }, 1000);
});
$("#proj2").click(function() {
    $('html, body').animate({
        scrollTop: $("#myProjects").offset().top
    }, 1000);
});
$("#about2").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top
    }, 1000);
});
$("#info2").click(function() {
    $('html, body').animate({
        scrollTop: $("#myInfo").offset().top
    }, 1000);
});

/*  Doesn't work as intended

$("#sToggle").click(function() {
  $("#skills").toggle("display");
});
$("#pToggle").click(function() {
  $("#preferred").toggle("display");
});
$("#cToggle").click(function() {
  $("#contact").toggle("display");
});
*/
$("#aToggle").click(function() {
  $("#phoneContent").toggle("display");
});
$("#readMore").click(function() {
  $(this).hide();
  $("#readLess").show();
  $("#more").show();
});
$("#readLess").click(function() {
  $(this).hide();
  $("#more").hide();
  $("#readMore").show();
});
