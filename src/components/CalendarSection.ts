import { daysAbbreviations } from "../utils/Collections";
import { CreateListItems } from "../utils/CreateListItems";

const calendarSectionElement: HTMLElement = document.createElement("section");
const ulWeeksElement: HTMLUListElement = document.createElement("ul");
const ulDaysElement: HTMLUListElement = document.createElement("ul");

CreateListItems(daysAbbreviations, ulWeeksElement);

ulDaysElement.classList.add("days");

calendarSectionElement.appendChild(ulWeeksElement);
calendarSectionElement.appendChild(ulDaysElement);

export const CalendarSection: HTMLElement = calendarSectionElement;
