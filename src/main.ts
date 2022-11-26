import "./style.css";
import { Header } from "./components/Header";
import { CalendarSection } from "./components/CalendarSection";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(Header);
app?.appendChild(CalendarSection);
