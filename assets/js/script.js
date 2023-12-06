$(function () {
  // Display the current date in the header of the page.
  var currentDayEl = $("#currentDay");
  var currentDayTime = dayjs().format("dddd, MMMM D");

  currentDayEl.text(currentDayTime);

  // Listener for saved events using the save button.
  function saveEvent(event) {
    var currentBtn = $(event.target);
    var textArea = currentBtn.siblings("textarea");
    var parentId = currentBtn.parent().attr("id");

    localStorage.setItem(parentId, textArea.val());
  }
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", saveEvent);

  // past, present, or future timeblock highlight
  var currentHour = dayjs().hour();
  for (let i = 9; i < 18; i++) {
    var timeBlock = $("#hour-" + i);

    if (i === currentHour) {
      timeBlock.addClass("present");
    } else if (currentHour > i) {
      timeBlock.addClass("past");
    } else if (currentHour < i) {
      timeBlock.addClass("future");
    }

    

  };
 
  // Load data from local storage and set it in the respective text areas
    // var eventInput = localStorage.getItem("hour-", +i);
    // var event = timeBlock.children("textarea");
});
