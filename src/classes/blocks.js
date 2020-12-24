debugger;
import { col, css, row } from "../utils";
class Block {
  constructor(value, options) {
    (this.value = value), (this.options = options);
  }
  toHTML() {
    throw new Error("Метод toHTML должен быть реализован");
  }
}
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { imageStyles: iS, alt = "", styles } = this.options;
    //   return `<div class="row">
    //                <img src="${block.value}" />
    //             </div>`;
    return row(
      `<img src="${this.value}" alt=${alt} style="${css(iS)}" />`,
      css(styles)
    );
  }
}
export class ColumsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const html = this.value
      .map(
        // (item) => `<div class="col-sm">
        //                 ${item}
        //             </div>`
        col
      )
      .join("");
    //или
    // let html = "";
    //   block.value.forEach((item) => {
    //     html += `<div class="col-sm">
    //                     ${item}
    //                 </div>`;
    //   });
    // join убирает запятые
    //   return `<div class="row">
    //                 ${html.join("")}
    //             </div>`;
    return row(html, css(this.options.styles));
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}
