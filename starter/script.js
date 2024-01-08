$(document).ready(function () {
  // Displays current day at the top of the calendar
  function displayCurrentDay() {
    var currentDay = dayjs().format("dddd, MMMM DD YYYY");
    $("#currentDay").text(currentDay);
  }

  // Finds the container where rows will be added
  const rowsContainer = $(".container");

  // Function to add rows with the hour dynamically, also adds classes to style the rows
  function addRowWithTime(hour) {
    const row = $("<div>").addClass("row");

    const timeBlock = $("<div>")
      .addClass("column")
      .text(hour + ":00");
    timeBlock.addClass("time-block");

    const eventBlock = $("<div>").addClass("event-block");
    const textarea = $("<textarea>").attr("placeholder", "Event.....");

    //Displays any events saved to local storage
    const storedEventText = localStorage.getItem("event_" + hour);
    if (storedEventText) {
      textarea.val(storedEventText);
    }
    eventBlock.append(textarea);

    // If statement to determine time of day and then change the class and colour of the event blocks.
    var currentTime = dayjs().hour();
    if (hour === currentTime) {
      eventBlock.addClass("present");
    } else if (hour < currentTime) {
      eventBlock.addClass("past");
    } else {
      eventBlock.addClass("future");
    }

    //Adds a save button and an event listener saves the text to local storage
    const saveBlock = $("<div>").addClass("column");
    const saveButton = $("<button>").text("Save");
    saveButton.addClass("saveBtn");
    saveButton.click(function () {
      // Saves to local storage
      const eventText = textarea.val();
      localStorage.setItem("event_" + hour, eventText);
      alert("Event saved!");
    });

    saveBlock.append(saveButton);

    row.append(timeBlock, eventBlock, saveBlock);
    rowsContainer.append(row);
  }

  // Adds rows for the working day
  for (let hour = 9; hour <= 19; hour++) {
    addRowWithTime(hour);
  }

  const clearButtoncontainer = $(".clearButton");
  // Function to clear local storage and delete all stored data
  function clearLocalStorage() {
    localStorage.clear();
    alert("Local storage cleared!");
  }

  // Create a clear button
  const clearButton = $("<button>").text("Clear Events");
  clearButton.addClass("clearBtn");
  clearButton.click(clearLocalStorage);

  // Append the clear button to the container
  clearButtoncontainer.append(clearButton);
  displayCurrentDay();
});
