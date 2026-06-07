import { clickLabelEvent, observeElements } from "./utils";

const labelElements = document.querySelectorAll(".faq__question");
const sectionElemenets = document.querySelectorAll("section");

labelElements.forEach(clickLabelEvent);
observeElements(sectionElemenets);
