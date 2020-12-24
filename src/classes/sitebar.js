import { block } from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

debugger;
export class Sitebar {
  constructor(selector, updateColback) {
    this.$sb = document.querySelector(selector);
    this.update = updateColback;
    this.init();
  }
  init() {
    this.$sb.insertAdjacentHTML("afterbegin", this.template);
    debugger;
    this.$sb.addEventListener("submit", this.addBlock.bind(this));
  }
  get template() {
    return [block("text"), block("title")].join("");
  }
  addBlock(event) {
    event.preventDefault(); //чтобы не обновлялась страница каждый раз
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const newBlock = type === "text"
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})

    this.update(newBlock);
    event.target.value.value = "";
    event.target.styles.value = "";
  }
  // deleteBlock(evennt) {
  //   event.preventDefault();
  //
  // }
}
