$("#generateBill-page").css("display", "none");
$("#expenditure-page").css("display", "none");
// $("#dashboard-page").css("display", "none");

$("#generatebill-link").click(function (e) {
  $("#generateBill-page").css("display", "block");
  $("#expenditure-page").css("display", "none");
});

$("#expenditure-link").click(function (e) {
  $("#generateBill-page").css("display", "none");
  $("#expenditure-page").css("display", "block");
});

$("#dashboard-link").click(function (e) {
  $("#generateBill-page").css("display", "none");
  $("#expenditure-page").css("display", "none");
});
