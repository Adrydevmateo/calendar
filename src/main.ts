import "./style.css";
import { Header } from "./components/Header";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(Header);
