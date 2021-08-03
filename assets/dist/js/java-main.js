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
