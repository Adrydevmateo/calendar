// * Import Statements
import "./style.css";
import { Header } from "./components/Header";
import { CalendarSection } from "./components/CalendarSection";
import { Calendar } from "./components/Calendar";

// * HTML Reference to the Main Tag
const app = document.querySelector<HTMLDivElement>("#app");

// * Appending Nodes
app?.appendChild(Header);
app?.appendChild(CalendarSection);

// * Rendering the Calendar
Calendar();
