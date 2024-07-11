// =========================================    SAVE EXPENDITURE    ==============================================
$("#ex-save").click(function (e) {
  let no = $("#exNo").val();
  let description = $("#exDescription").val();
  let date = $("#exDate").val();
  let amount = $("#exAmount").val();

  let expenditureObj = new Expenditure(no, description, date, amount);

  ExpenditureDb.push(expenditureObj);

  loadAllExpenditures();
  clearExTexts();
});

// load to table
function loadAllExpenditures() {
  let tNo;
  let tDescription;
  let tDate;
  let tAmount;

  $("#ex-table>tr").empty();
  for (let i = 0; i < ExpenditureDb.length; i++) {
    tNo = ExpenditureDb[i].exNo;
    tDescription = ExpenditureDb[i].description;
    tDate = ExpenditureDb[i].date;
    tAmount = ExpenditureDb[i].amount;

    let code =
      "<tr> <td>" +
      tNo +
      "</td> <td>" +
      tDescription +
      "</td> <td>" +
      tDate +
      "</td> <td>" +
      tAmount +
      "</td> </tr>";

    $("#ex-table").append(code);
  }
}

// Clear Text fields
function clearExTexts() {
  $("#exNo").val("");
  $("#exDescription").val("");
  $("#exDate").val("");
  $("#exAmount").val("");
}

// ====================================     DELETE EXPENDITURE      ==============================================
$("#ex-delete").click(function (e) {
  let deletedExNo = $("#exNo").val();

  let ifTo;
  for (let i = 0; i < ExpenditureDb.length; i++) {
    if (deletedExNo == ExpenditureDb[i].exNo) {
      ExpenditureDb.splice(i, 1);
    } else ifTo++;
  }

  if (ifTo == ExpenditureDb.length) {
    alert("Not find this expenditure Number");
  } else {
    alert("Successfully Delete");
  }

  loadAllExpenditures();
  clearExTexts();
});

// ====================================     Search Expenditure  ==================================================

$("#ex-search").click(function (e) {
  let searchedExNo = $("#exNo").val();

  let ifTo;
  for (let i = 0; i < ExpenditureDb.length; i++) {
    if (searchedExNo == ExpenditureDb[i].exNo) {
      $("#exDescription").val(ExpenditureDb[i].description);
      $("#exDate").val(ExpenditureDb[i].date);
      $("#exAmount").val(ExpenditureDb[i].amount);
    } else ifTo++;
  }

  if (ifTo == ExpenditureDb.length) {
    alert("Not find this expenditure Number");
  }
});

// =====================================    Update Expenditure  ==================================================
$("#ex-update").click(function (e) {
  let updatedExNo = $("#exNo").val();
  let eD = $("#exDescription").val();
  let eDate = $("#exDate").val();
  let eA = $("#exAmount").val();

  let ifTo;
  for (let i = 0; i < ExpenditureDb.length; i++) {
    if (updatedExNo == ExpenditureDb[i].exNo) {
      ExpenditureDb[i].description =
        eD == "" ? ExpenditureDb[i].description : eD;
      ExpenditureDb[i].date = eDate == "" ? ExpenditureDb[i].date : eDate;
      ExpenditureDb[i].amount = eA == "" ? ExpenditureDb[i].amount : eA;
    } else ifTo++;
  }
  if (ifTo == ExpenditureDb.length) {
    alert("Not find this expenditure Number");
  } else {
    alert("Successfully Update");
  }

  loadAllExpenditures();
  clearExTexts();
});
