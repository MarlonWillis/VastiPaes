function nextMsg() {
    if (messages.length == 0) {
    } else {
        $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
    }
};

var messages = [
    "Ser Minha Namorada",
    "Eu ser seu Namorado",
    "Namorar comigo",
    "Um futuro ao meu lado",
    "Namora comigo",
    "Ser Minha Namorada",
    "Eu ser seu Namorado",
    "Namorar comigo",
    "Um futuro ao meu lado",
    "Namora comigo",  "Ser Minha Namorada",
      "Eu ser seu Namorado",
      "Namorar comigo",
      "Um futuro ao meu lado",
      "Juntar sua vida com a minha",
      "Namora comigo",  "Ser Minha Namorada",
        "Eu ser seu Namorado",
        "Namorar comigo",
        "Um futuro ao meu lado",
        "Namora comigo",  "Ser Minha Namorada",
          "Eu ser seu Namorado",
          "Namorar comigo",
          "Juntar sua vida com a minha",
          "Um futuro ao meu lado",
          "Namora comigo",  "Ser Minha Namorada",
            "Eu ser seu Namorado",
            "Namorar comigo",
            "Um futuro ao meu lado",
            "Namora comigo",  "Ser Minha Namorada",
              "Eu ser seu Namorado",
              "Namorar comigo",
              "Um futuro ao meu lado",
              "Juntar sua vida com a minha",
              "Namora comigo?"

].reverse();

$('#message').hide();
nextMsg();

$(document).ready(function () {
  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
  });
});

$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);
