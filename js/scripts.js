









$(document).ready(function() {
  $(".nomenuview").click(function() {
    $(".menuview").toggle();
  });



  $("#blue").click(function() {
    $("body").css("background-color", "#4D79A8");
    $("#navbar").css("background-color", "#4D79A8");
    $(".navbar-toggle").css("background-color", "#4D79A8");
    $("figure").css("background-color", "#4D79A8");
  });
  $("#red").click(function() {
    $("body").css("background-color", "#E2BBC1");
    $("#navbar").css("background-color", "#E2BBC1");
    $(".navbar-toggle").css("background-color", "#E2BBC1");
    $("figure").css("background-color", "#E2BBC1");
  });
  $("#green").click(function() {
    $("body").css("background-color", "#5BB280");
    $("#navbar").css("background-color", "#5BB280");
    $(".navbar-toggle").css("background-color", "#5BB280");
    $("figure").css("background-color", "#5BB280");
  });
});
