









$(document).ready(function() {
  $(".nomenuview").click(function() {
    $(".menuview").slideToggle();
  });



  $("#blue").click(function() {
    $("body").css("background-color", "#4D79A8");
    $("#navbar").css("background-color", "#394E9E");
    $(".navbar-toggle").css("background-color", "#4D79A8");
    $("figure").css("background-color", "#394E9E");
  });
  $("#red").click(function() {
    $("body").css("background-color", "#E2BBC1");
    $("#navbar").css("background-color", "#DC6C6F");
    $(".navbar-toggle").css("background-color", "#E2BBC1");
    $("figure").css("background-color", "#DC6C6F");
  });
  $("#green").click(function() {
    $("body").css("background-color", "#5BB280");
    $("#navbar").css("background-color", "#3F9B75");
    $(".navbar-toggle").css("background-color", "#5BB280");
    $("figure").css("background-color", "#3F9B75");
  });
});
