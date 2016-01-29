function pingPong(limit) {
  var result = [];

  for (var i = 1; i <= limit; i++) {
    if (i%15 === 0) {
         result.push("PINGPONG");
       } else if (i%5 ===0) {
         result.push("PONG");
       } else if (i%3 ===0) {
         result.push("PING");
       } else
         result.push(i);
  }
  return result;
}

$(document).ready(function(){
  $("form#inputForm").submit(function(event) {
    var limit = parseInt($("input#limit").val());
    var result = pingPong(limit);

    $(".result").text(result);
    event.preventDefault();
  });
});
