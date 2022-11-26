import { currentDate, spanIcons } from "./Header";
import { daysList } from "./CalendarSection";
import { months } from "../utils/Collections";

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

function renderCalendar() {
  let firstDayOfMonth: number = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateOfMonth: number = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();
  let lastDayOfMonth: number = new Date(
    currentYear,
    currentMonth,
    lastDateOfMonth
  ).getDay();
  let lastDateOfLastMonth: number = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();
  let newLi: string = "";

  for (let index = firstDayOfMonth; index > 0; index--) {
    newLi += `<li class="inactive">${lastDateOfLastMonth - index + 1}</li>`;
  }

  for (let index = 1; index <= lastDateOfMonth; index++) {
    let today: string =
      index === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";

    newLi += `<li class="${today}">${index}</li>`;
  }

  for (let index = lastDayOfMonth; index < 6; index++) {
    newLi += `<li class="inactive">${index - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysList.innerHTML = newLi;
}

spanIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});

export const Calendar: Function = renderCalendar;
