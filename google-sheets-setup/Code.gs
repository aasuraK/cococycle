// Google Apps Script: receives CocoCycle form posts and appends them to the active Sheet.
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Time', 'Name', 'Email', 'Organization', 'Interest', 'Message']);
  }
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([d.time, d.name, d.email, d.organization, d.interest, d.message]);
  return ContentService.createTextOutput('ok');
}
