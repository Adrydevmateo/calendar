// * Creating HTML Elements
const headerElement: HTMLHeadElement = document.createElement("header");
const paragraphElement: HTMLParagraphElement = document.createElement("p");
const iconsSection: HTMLElement = document.createElement("section");
const iconsFirstSpan: HTMLSpanElement = document.createElement("span");
const iconsSecondSpan: HTMLSpanElement = document.createElement("span");

// ? Adding and Id to each span element in the icons section
iconsFirstSpan.setAttribute("id", "prev");
iconsSecondSpan.setAttribute("id", "next");

// ? Adding Classes
paragraphElement.classList.add("current-date");
iconsSection.classList.add("icons");
iconsFirstSpan.classList.add("material-symbols-rounded");
iconsSecondSpan.classList.add("material-symbols-rounded");

// ? Inserting text to each span element in the icons section
iconsFirstSpan.innerText = "chevron_left";
iconsSecondSpan.innerText = "chevron_right";

// * Appending Elements
headerElement.appendChild(paragraphElement);
headerElement.appendChild(iconsSection);
iconsSection.appendChild(iconsFirstSpan);
iconsSection.appendChild(iconsSecondSpan);

// * Export Statements
export const Header: HTMLHeadElement = headerElement;
export const currentDate: HTMLParagraphElement = paragraphElement;
export const spanIcons: Array<HTMLSpanElement> = [
  iconsFirstSpan,
  iconsSecondSpan,
];
