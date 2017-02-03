









$(document).ready(function() {
  $(".nomenuview").click(function() {
    $(".menuview").toggle();
  });
  $(".button-collapse").sideNav();

  $("#blue").click(function() {
    $("body").css("background-color", "#4D79A8");
    $(".nav-wrapper").css("background-color", "#4D79A8");
    $("#mobile-demo").css("background-color", "#4D79A8");
  });
  $("#red").click(function() {
    $("body").css("background-color", "#E2BBC1");
    $(".nav-wrapper").css("background-color", "#E2BBC1");
    $("#mobile-demo").css("background-color", "#E2BBC1");
  });
  $("#green").click(function() {
    $("body").css("background-color", "#5BB280");
    $(".nav-wrapper").css("background-color", "#5BB280");
    $("#mobile-demo").css("background-color", "#5BB280");
  });
});
