// * Import Statements
import { currentDate, spanIcons } from "./Header";
import { daysList } from "./CalendarSection";
import { months } from "../utils/Collections";
let date = new Date();
let currentYear = date.getFullYear(); // ? Getting the current year
let currentMonth = date.getMonth(); // ? Getting the current month
// * Function to Render the calendar
function renderCalendar() {
    // ? Getting the first day of the current month
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    // ? Getting the last date of the current month
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // ? Getting the last day of the current month
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    // ? Getting the last date of previous month
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    // ? Variable to store li elements via strings
    let newLi = "";
    // ? Creating li elements of last days of the previous month
    for (let index = firstDayOfMonth; index > 0; index--) {
        newLi += `<li class="inactive">${lastDateOfLastMonth - index + 1}</li>`;
    }
    // ? Creating li elements of all days of the current month
    for (let index = 1; index <= lastDateOfMonth; index++) {
        // ? Storing active in "today" to added later as a class for the li element with the current day
        let today = index === date.getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
            ? "active"
            : "";
        // ? Adding the class "active" to the li element with the current day
        newLi += `<li class="${today}">${index}</li>`;
    }
    // ? Creating a li element for each day of the current month
    for (let index = lastDayOfMonth; index < 6; index++) {
        newLi += `<li class="inactive">${index - lastDayOfMonth + 1}</li>`;
    }
    // ? Adding text to the paragraph in the header to show the current month and year
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    // ? Adding and li elements to the "days" unordered list
    daysList.innerHTML = newLi;
}
spanIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        // ? Creating a new date if the current month is less than 0 OR the current month is greater than 1
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear(); // ? Updating the current year
            currentMonth = date.getMonth(); // ? Updating the current month
        }
        else {
            date = new Date(); // ? Updating date with the current value
        }
        // * Re rendering the calendar
        renderCalendar();
    });
});
// * Export Statement
export const Calendar = renderCalendar;
