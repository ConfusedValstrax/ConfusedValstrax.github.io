var isSure = false;

$('#demons').on('click', function(event) {
    alert("This button does nothing.");
});

$('#kung-pow-penis').on('click', function(event) {
  $('#kung-pow-penis').html('kung pow penis');
});

$('#seezhr').on("click", function(event) {
  if (isSure) {
    releaseTheDemons();
    alert("I warned you...");
  } else {
    $('#seezhr').html("<h1>ARE YOU SURE?</h1>");
    isSure = true;
  }

});

var releaseTheDemons = function() {
  for (var i = 0; i < 10; i++) {
    var $cum = $('<li class="owo">owo</li>');
    var $jizz = $('<li class="uwu">uwu</li>');
    $("#cum").append($cum, $jizz);
  }
  setInterval(() => {
    $("#seezhr").html("<h1 class='no'>gggggggggggggg</h1>");
    $(".owo").html("uwu");
    $(".uwu").html("owo");
    $('body').css('background-image', 'url(https://media.newyorker.com/photos/59097b182179605b11ad8e4e/master/pass/Tolentino-TheCreepiestPicturesontheInternet.jpg)');
    setTimeout(() => {
      $("#seezhr").html("<h1 class='no'>blawrghhhhhhhh</h1>");
      $(".owo").html("owo");
      $('.uwu').html('uwu');
      $('body').css('background-image', 'url(https://i.imgflip.com/56s3dq.jpg)');
    }, 50);
  }, 100);
};
