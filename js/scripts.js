









$(document).ready(function() {
  $(".nomenuview").click(function() {
    if ($(".eyes-peach").is(":visible")) {
      $("#peach-open").toggle();
      $("#peach-closed").toggle();
      $("#red-closed, #red-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    } else if ($(".eyes-red").is(":visible")) {
      $("#red-open").toggle();
      $("#red-closed").toggle();
      $("#peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    } else if ($(".eyes-lightblue").is(":visible")) {
      $("#lightblue-open").toggle();
      $("#lightblue-closed").toggle();
      $("#peach-closed, #peach-open, #red-open, #red-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    } else if ($(".eyes-darkblue").is(":visible")) {
      $("#darkblue-open").toggle();
      $("#darkblue-closed").toggle();
      $("#peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #red-closed, #red-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    } else if ($(".eyes-green").is(":visible")) {
      $("#green-open").toggle();
      $("#green-closed").toggle();
      $("#peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #red-closed, #red-open, #gray-open, #gray-closed").hide();
    } else if ($(".eyes-gray").is(":visible")) {
      $("#gray-open").toggle();
      $("#gray-closed").toggle();
      $("#peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #red-open, #red-closed").hide();
    }

    $(".menuview").slideToggle();
  });


  $("#peach").click(function() {
    $("#peach-open").show();
    $("#peach-closed, #red-closed, #red-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    $("body").css("background-color", "#D6BDB8");
    $("#navbar").css("background-color", "#3f599a");
    $(".navbar-toggle").css("background-color", "#D6BDB8");
    $(".colors-switch").css("background-color", "#3f599a");
    $(".panel").css("background-color", "#3f599a");
    $("#main-content").css("background-color", "#7188c2");
  });
  $("#red").click(function() {
    $("#red-open").show();
    $("#red-closed, #peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    $("body").css("background-color", "#f07878");
    $("#navbar").css("background-color", "#b34e4e");
    $(".navbar-toggle").css("background-color", "#f07878");
    $(".colors-switch").css("background-color", "#b34e4e");
    $(".panel").css("background-color", "#ff9494");
    $("#main-content").css("background-color", "#efdbc8");
  });
  $("#light-blue").click(function() {
    $("#lightblue-open").show();
    $("#lightblue-closed, #peach-closed, #peach-open, #red-open, #red-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    $("body").css("background-color", "#85d0ee");
    $("#navbar").css("background-color", "#357c89");
    $(".navbar-toggle").css("background-color", "#85d0ee");
    $(".colors-switch").css("background-color", "#357c89");
    $(".panel").css("background-color", "#4c9c7d");
    $("#main-content").css("background-color", "#526c77");
  });
  $("#dark-blue").click(function() {
    $("#darkblue-open").show();
    $("#darkblue-closed, #peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #red-closed, #red-open, #green-closed, #green-open, #gray-open, #gray-closed").hide();
    $("body").css("background-color", "#4174c9");
    $("#navbar").css("background-color", "#61bfea");
    $(".navbar-toggle").css("background-color", "#4174c9");
    $(".colors-switch").css("background-color", "#61bfea");
    $(".panel").css("background-color", "#9679d7");
    $("#main-content").css("background-color", "#34a2db");
  });
  $("#green").click(function() {
    $("#green-open").show();
    $("#green-closed, #peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #red-closed, #red-open, #gray-open, #gray-closed").hide();
    $("body").css("background-color", "#74c09d");
    $("#navbar").css("background-color", "#3b8c72");
    $(".navbar-toggle").css("background-color", "#74c09d");
    $(".colors-switch").css("background-color", "#3b8c72");
    $(".panel").css("background-color", "#d7907a");
    $("#main-content").css("background-color", "#cab59c");
  });
  $("#gray").click(function() {
    $("#gray-open").show();
    $("#gray-closed, #peach-closed, #peach-open, #lightblue-open, #lightblue-closed, #darkblue-closed, #darkblue-open, #green-closed, #green-open, #red-open, #red-closed").hide();
    $("body").css("background-color", "#848f9c");
    $("#navbar").css("background-color", "#557187");
    $(".navbar-toggle").css("background-color", "#848f9c");
    $(".colors-switch").css("background-color", "#557187");
    $(".panel").css("background-color", "#4a5062");
    $("#main-content").css("background-color", "#c5dae3");
  });
});
