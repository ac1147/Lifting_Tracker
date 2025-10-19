const ui = SpreadsheetApp.getUi();
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // Get the active spreadsheet
const push = spreadsheet.getSheetByName('Push'); // Get the source sheet by name
const pull = spreadsheet.getSheetByName('Pull'); // Get the source sheet by name
const masterDataBase = spreadsheet.getSheetByName('Matser Data Base'); // Get the target sheet by name

const currentDate = new Date(); // Set currentDate as the current date

let startRow = 1;

for (let b=0; b < 1;) {
  let cell = masterDataBase.getRange(startRow, 1)
  if (cell.getValue() !== ""){
    startRow++;
  } else {
    b = 1;
  }
}

function updatePull () {

  // Ask user to confirm the date
  const response = ui.alert(
    "Confirm Date",
    "Did you update the date for the workout?",
    ui.ButtonSet.YES_NO
  );

  if (response == ui.Button.NO) {
    return; // stop the function
  }

  moveData(pull, 0, 4, "Lat Pull Down");
  moveData(pull, 4, 4, "Seated Row");
  moveData(pull, 4+4, 4, "Baysian Cable Curls");
  moveData(pull, 4+4+4, 4, "Preacher Curl Machine");
  moveData(pull, 4+4+4+4, 4, "Rear Delt Machine");
  moveData(pull, 4+4+4+4+4, 4, "Ab Machine");

}

function updatePush() {

  // Ask user to confirm the date
  const response = ui.alert(
    "Confirm Date",
    "Did you update the date for the workout?",
    ui.ButtonSet.YES_NO
  );

  if (response == ui.Button.NO) {
    return; // stop the function
  }

  moveData(push, 0, 4, "Cable Lateral Raises");
  moveData(push, 4, 4, "Tricpe Overhead Rope");
  moveData(push, 4+4, 4, "Tricep Rope Pushdown");
  moveData(push, 4+4+4, 4, "Incline Press");
  moveData(push, 4+4+4+4, 4, "Shoulder Press");
  moveData(push, 4+4+4+4+4, 4, "Fly Machine");
  
}

function moveData(workout, shift, size, exerciseName) {

  for (let i = 0; i <= size-1; i++) { 
    let sourceWeight = workout.getRange(i+3+shift, 3); // Column C
    let destination1Weight = masterDataBase.getRange(i+startRow+shift, 4); // Column D
    let destination2Weight = workout.getRange(i+3+shift, 7); // Column G
    
    let valueWeight = sourceWeight.getValue();
    destination1Weight.setValue(valueWeight);
    destination2Weight.setValue(valueWeight);
    sourceWeight.clearContent();

    let sourceReps = workout.getRange(i+3+shift, 4); // Column D
    let destination1Reps = masterDataBase.getRange(i+startRow+shift, 5); // Column E
    let destination2Reps = workout.getRange(i+3+shift, 8); // Column H

    let valueReps = sourceReps.getValue();
    destination1Reps.setValue(valueReps);
    destination2Reps.setValue(valueReps);
    sourceReps.clearContent();

    let sourceNotes = workout.getRange(i+3+shift, 5); // Column E
    let destinationNotes = workout.getRange(i+3+shift, 9); // Column I

    let valueNotes = sourceNotes.getValue();
    destinationNotes.setValue(valueNotes);
    sourceNotes.clearContent();

    let sourceSets = workout.getRange(i+3+shift, 2); // Column B
    let destinationSets = masterDataBase.getRange(i+startRow+shift, 3); // Column C

    let valueSets = sourceSets.getValue();
    destinationSets.setValue(valueSets);
    
    let sourceDate = workout.getRange(28,2);
    let valueDate = sourceDate.getValue();
    let destinationDates = masterDataBase.getRange(i+startRow+shift, 1);
    destinationDates.setValue(valueDate);

    let exercise = masterDataBase.getRange(i+startRow+shift, 2);
    exercise.setValue(exerciseName);

  }
}
