// * Creating HTML Elements
const headerElement: HTMLHeadElement = document.createElement("header");
const paragraphElement: HTMLParagraphElement = document.createElement("p");
const iconsSection: HTMLElement = document.createElement("section");
const iconsFirstSpan: HTMLSpanElement = document.createElement("span");
const iconsSecondSpan: HTMLSpanElement = document.createElement("span");

paragraphElement.classList.add("current-date");
iconsSection.classList.add("icons");

// * Appending Elements
headerElement.appendChild(paragraphElement);
headerElement.appendChild(iconsSection);
iconsSection.appendChild(iconsFirstSpan);
iconsSection.appendChild(iconsSecondSpan);

export const Header: HTMLHeadElement = headerElement;
export const currentDate: HTMLParagraphElement = paragraphElement;
export const spanIcons: Array<HTMLSpanElement> = [
  iconsFirstSpan,
  iconsSecondSpan,
];
