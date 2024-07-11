// ================================================     Save Generate Bill  ==========================================================
function saveBill() {
  let billNo = $("#billNo").val();
  let vehiNum = $("#vehicleNo").val();
  let spCost = $("#spCost").val();
  let repairCost = $("#repairCost").val();
  let totalAmount = $("#totalAmount").val();
  let discount = $("#discount").val();
  let finalAmount = $("#finalAmount").val();

  let generateBillObj = new GenerateBill(
    billNo,
    vehiNum,
    spCost,
    repairCost,
    finalAmount
  );

  GenerateBillDb.push(generateBillObj);
}
// Bill Save Button
$("#bill-save").click(function () {
  saveBill();
  loadAllBills();
  clearTexts();
});

// Load All Bills
function loadAllBills() {
  let bNo;
  let vNo;
  let sCost;
  let rCost;
  let fAmount;

  $("#bill-table>tr").empty();

  for (let i = 0; i < GenerateBillDb.length; i++) {
    bNo = GenerateBillDb[i].billNo;
    vNo = GenerateBillDb[i].vehiNo;
    sCost = GenerateBillDb[i].spCost;
    rCost = GenerateBillDb[i].repairCost;
    fAmount = GenerateBillDb[i].finalAmount;

    let code =
      "<tr> <td>" +
      bNo +
      "</td> <td>" +
      vNo +
      "</td> <td>" +
      sCost +
      "</td> <td>" +
      rCost +
      "</td> <td>" +
      fAmount +
      "</td> </tr>";

    $("#bill-table").append(code);
  }
}

// clear Text fields
function clearTexts() {
  $("#billNo").val("");
  $("#vehicleNo").val("");
  $("#spCost").val("");
  $("#repairCost").val("");
  $("#totalAmount").val("");
  $("#discount").val("");
  $("#finalAmount").val("");
}

// ================================================= Delete generate Bill ============================================================

$("#bill-delete").click(function (e) {
  let deletedBillNo = $("#billNo").val();

  for (let i = 0; i < GenerateBillDb.length; i++) {
    if (deletedBillNo == GenerateBillDb[i].billNo) {
      GenerateBillDb.splice(i, 1);

      alert("Delete successfullly....!");
    } else alert("Something wrong like to this id not axit yet");
  }

  loadAllBills();
  clearTexts();
});

// ================================================     Update A bill   ===============================================================
$("#bill-update").click(function () {
  let updatedBillNo = $("#billNo").val();

  let ifdo = 0;
  for (let i = 0; i < GenerateBillDb.length; i++) {
    if (updatedBillNo == GenerateBillDb[i].billNo) {
      updateBill();
      loadAllBills();
      clearTexts();
    } else {
      ifdo++;
    }
  }

  if (ifdo == GenerateBillDb.length) {
    alert("this id not a found");
  } else {
    alert("Successfully updated");
  }
});

function updateBill() {
  let billNo = $("#billNo").val();
  let vehiNum = $("#vehicleNo").val();
  let spCost = $("#spCost").val();
  let repairCost = $("#repairCost").val();
  let totalAmount = $("#totalAmount").val();
  let discount = $("#discount").val();
  let finalAmount = $("#finalAmount").val();

  for (let i = 0; i < GenerateBillDb.length; i++) {
    if (billNo == GenerateBillDb[i].billNo) {
      GenerateBillDb[i].vehiNo =
        vehiNum == "" ? GenerateBillDb[i].vehiNo : vehiNum;
      GenerateBillDb[i].spCost =
        spCost == "" ? GenerateBillDb[i].spCost : spCost;
      GenerateBillDb[i].repairCost =
        repairCost == "" ? GenerateBillDb[i].repairCost : repairCost;
      GenerateBillDb[i].finalAmount =
        finalAmount == "" ? GenerateBillDb[i].finalAmount : finalAmount;
    }
  }
}

// ===============================================  Search A Bill   ==================================================================
$("#bill-search").click(function (e) {
  let updatedBillNo = $("#billNo").val();

  let ifdo;
  for (let i = 0; i < GenerateBillDb.length; i++) {
    if (updatedBillNo == GenerateBillDb[i].billNo) {
      $("#vehicleNo").val(GenerateBillDb[i].vehiNo);
      $("#spCost").val(GenerateBillDb[i].spCost);
      $("#repairCost").val(GenerateBillDb[i].repairCost);
      $("#totalAmount").val(GenerateBillDb[i].finalAmount);
      $("#discount").val("");
      $("#finalAmount").val(GenerateBillDb[i].finalAmount);
    } else {
      ifdo++;
    }
  }

  if (ifdo == GenerateBillDb.length) {
    alert("this id not a found");
  }
});

function setPC() {
  // =========================================== total income

  let totalIncome = 0;
  for (let i = 0; i < GenerateBillDb.length; i++) {
    let no = Number(GenerateBillDb[i].finalAmount);
    totalIncome += no;
  }

  $("#income").text(totalIncome);

  // ====================================== Total expenditure
  let totalexpenditure = 0;
  for (let i = 0; i < ExpenditureDb.length; i++) {
    let no2 = Number(ExpenditureDb[i].amount);
    totalexpenditure += no2;
  }

  $("#expenditureAmount").text(totalexpenditure);

  // ===========================================Profit

  let profit = totalIncome - totalexpenditure;

  $("#profit").text(profit);

  console.log(totalIncome, totalexpenditure, totalIncome);
}
