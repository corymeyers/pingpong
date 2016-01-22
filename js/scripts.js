var pingPong = function(limit) {
  var result = [];

for (var i = 0; i <= limit; i +=1)
  return result;
}


$(document).ready(function(){
  $("form#inputForm").submit(function(event) {
    var limit = parseInt($("input#limit").val());
    var finalResult = $;

    $(".result").text(finalResult);
    event.preventDefault();
  });
});





// var triangleClass = function(a, b, c) {
//   if ( a >= (b + c) || b >= (a + c) || c >= (a + b)) {
//     return ("notaTriangle")
//   } else if (a === b && b === c && c===a) {
//     return "equilateral";
//   } else if ((a === b) || (a === c) || (b === c)) {
//     return "isoceles";
//   } else {
//     return "scalene";
//   }
// }
//
// $(document).ready(function() {
//   $("form#measurements").submit(function(event) {
//     var a = parseInt($("input#a").val());
//     var b = parseInt($("input#b").val());
//     var c = parseInt($("input#c").val());
//     var result = triangleClass(a, b, c);
//
//       if (result ==="notaTriangle") {
//         $(".result").text(" not a triangle");
//       } else if (result === "scalene") {
//         $(".result").text(" scalene");
//       } else if (result === "equilateral") {
//         $(".result").text(" equilateral");
//       } else if (result === "isoceles") {
//         $(".result").text(" isoceles");
//       };
//     event.preventDefault();
//   });
// });
