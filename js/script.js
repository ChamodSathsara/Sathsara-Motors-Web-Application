$("#generateBill-page").css("display", "none");
$("#expenditure-page").css("display", "none");
$("#dashboard-page").css("display", "block");

$("#generatebill-link").click(function (e) {
  $("#generateBill-page").css("display", "block");
  $("#expenditure-page").css("display", "none");
  $("#dashboard-page").css("display", "none");
  setPC();
});

$("#expenditure-link").click(function (e) {
  $("#generateBill-page").css("display", "none");
  $("#expenditure-page").css("display", "block");
  $("#dashboard-page").css("display", "none");
  setPC();
});

$("#dashboard-link").click(function (e) {
  $("#generateBill-page").css("display", "none");
  $("#expenditure-page").css("display", "none");
  $("#dashboard-page").css("display", "block");
  setPC();
});
