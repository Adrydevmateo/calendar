// * Import Statements
import { daysAbbreviations } from "../utils/Collections";
import { CreateListItems } from "../utils/CreateListItems";

// ? Creating HTML Elements
const calendarSectionElement: HTMLElement = document.createElement("section");
const ulWeeksElement: HTMLUListElement = document.createElement("ul");
const ulDaysElement: HTMLUListElement = document.createElement("ul");

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
export const CalendarSection: HTMLElement = calendarSectionElement;
export const daysList: HTMLUListElement = ulDaysElement;
