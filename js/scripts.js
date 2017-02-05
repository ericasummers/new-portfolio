









$(document).ready(function() {
  $(".nomenuview").click(function() {
    $("#eyes-open").toggle();
    $("#eyes-closed").toggle();
    $(".menuview").slideToggle();

  });


  $("#peach").click(function() {
    $("body").css("background-color", "#D6BDB8");
    $("#navbar").css("background-color", "#3f599a");
    $(".navbar-toggle").css("background-color", "#D6BDB8");
    $(".colors-switch").css("background-color", "#3f599a");
    $(".panel").css("background-color", "#3f599a");
    $("#main-content").css("background-color", "#7188c2");
  });
  $("#red").click(function() {
    $("body").css("background-color", "#f07878");
    $("#navbar").css("background-color", "#b34e4e");
    $(".navbar-toggle").css("background-color", "#f07878");
    $(".colors-switch").css("background-color", "#b34e4e");
    $(".panel").css("background-color", "#ff9494");
    $("#main-content").css("background-color", "#efdbc8");
  });
  $("#light-blue").click(function() {
    $("body").css("background-color", "#85d0ee");
    $("#navbar").css("background-color", "#357c89");
    $(".navbar-toggle").css("background-color", "#85d0ee");
    $(".colors-switch").css("background-color", "#357c89");
    $(".panel").css("background-color", "#4c9c7d");
    $("#main-content").css("background-color", "#526c77");
  });
  $("#dark-blue").click(function() {
    $("body").css("background-color", "#4174c9");
    $("#navbar").css("background-color", "#61bfea");
    $(".navbar-toggle").css("background-color", "#4174c9");
    $(".colors-switch").css("background-color", "#61bfea");
    $(".panel").css("background-color", "#9679d7");
    $("#main-content").css("background-color", "#34a2db");
  });
  $("#green").click(function() {
    $("body").css("background-color", "#74c09d");
    $("#navbar").css("background-color", "#3b8c72");
    $(".navbar-toggle").css("background-color", "#74c09d");
    $(".colors-switch").css("background-color", "#3b8c72");
    $(".panel").css("background-color", "#d7907a");
    $("#main-content").css("background-color", "#cab59c");
  });
  $("#gray").click(function() {
    $("body").css("background-color", "#848f9c");
    $("#navbar").css("background-color", "#557187");
    $(".navbar-toggle").css("background-color", "#848f9c");
    $(".colors-switch").css("background-color", "#557187");
    $(".panel").css("background-color", "#4a5062");
    $("#main-content").css("background-color", "#c5dae3");
  });
});
