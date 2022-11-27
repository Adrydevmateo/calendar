// * Import Statements
import { daysAbbreviations } from "../utils/Collections";
import { CreateListItems } from "../utils/CreateListItems";
// ? Creating HTML Elements
const calendarSectionElement = document.createElement("section");
const ulWeeksElement = document.createElement("ul");
const ulDaysElement = document.createElement("ul");
// * Calling the imported function to create li items
CreateListItems(daysAbbreviations, ulWeeksElement);
// ? Adding Classes
calendarSectionElement.classList.add("calendar");
ulWeeksElement.classList.add("weeks");
ulDaysElement.classList.add("days");
// ? Appending Nodes
calendarSectionElement.appendChild(ulWeeksElement);
calendarSectionElement.appendChild(ulDaysElement);
// * Export statements
export const CalendarSection = calendarSectionElement;
export const daysList = ulDaysElement;
