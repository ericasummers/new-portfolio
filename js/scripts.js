









$(document).ready(function() {
  $(".nomenuview").click(function() {
    $("#eyes-open").toggle();
    $("#eyes-closed").toggle();
    $(".menuview").slideToggle();

  });



  $("#blue").click(function() {
    $("body").css("background-color", "#4D79A8");
    $("#navbar").css("background-color", "#394E9E");
    $(".navbar-toggle").css("background-color", "#4D79A8");
    $("figure").css("background-color", "#394E9E");
  });
  $("#red").click(function() {
    $("body").css("background-color", "#D6BDB8");
    $("#navbar").css("background-color", "#B89492");
    $(".navbar-toggle").css("background-color", "#D6BDB8");
    $("figure").css("background-color", "#B89492");
  });
  $("#green").click(function() {
    $("body").css("background-color", "#5BB280");
    $("#navbar").css("background-color", "#3F9B75");
    $(".navbar-toggle").css("background-color", "#5BB280");
    $("figure").css("background-color", "#3F9B75");
  });
});
