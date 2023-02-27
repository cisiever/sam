function myFunction() {
  /**
   * Task 1) Open the calendar
   **/
   var spreadsheet = SpreadsheetApp.getActiveSheet();
   var calendarID = spreadsheet.getRange("F1").getValue();
   var eventCal = CalendarApp.getCalendarById(calendarID);
   var cell = spreadsheet.getRange("Sheet1!A3:F49");
   var hearings = cell.getValues(); 
   for (x=0; x<hearings.length;x++) {
      var shift = hearings[x];
      var startTime = shift[0]
      var endTime = shift[1];
      var youth = shift[3];
      var worker = shift[4];
      var reminder = shift[2];
      var inviteCreated = shift[7];
      var row = x+3
      var invitecol = 8

   if (spreadsheet.getRange(row,invitecol).isBlank()) {
       eventCal.createEvent(youth, startTime, endTime, worker);
       eventCal.createEvent(youth, reminder,reminder,worker); 

spreadsheet.getRange(row,invitecol).setValue("yes")
}
 
}

SpreadsheetApp.flush();

}
