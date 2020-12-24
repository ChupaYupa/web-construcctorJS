//2

import { Site } from "./classes/site";
import { Sitebar } from "./classes/sitebar";
debugger;
export class App {
  constructor(model) {
    this.model = model;
  }
  init() {
    const site = new Site("#site");
    site.render(this.model);

    const updateColback = (newBlock) => {
      //добавить изменения на сайт
      this.model.push(newBlock);
      site.render(this.model);
    };
    new Sitebar("#panel", updateColback);
  }
}
