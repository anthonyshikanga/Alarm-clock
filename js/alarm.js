//$(document).ready(function(){
//$('#time').text(moment().format("LT "));
//});
var currentTime = function() {
  moment().format("LTS");
}

$(document).ready(function() {
  $('#time').text(moment().format("LT "));
  $('#alarm-form').submit(function() {
    var alarm = $('#tim').val();
    $('#alarm-set').text(alarm);
    event.preventDefault()

  });
});

// backend
var alarm = function(tim){
  if (currentTime === "#time") {
    alert("Wake up")
  }

}
