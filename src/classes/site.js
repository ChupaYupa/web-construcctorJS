debugger;
export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  render(model) {
    this.$el.innerHTML = "";
    //пробегаем по массиву model с помощью forEach
    model.forEach((block) => {
      // let html = "";
      // if (block.type === "title") {
      //   html = title(block);
      // } else if (block.type === "text") {
      //   html = text(block);
      // } else if (block.type === "colums") {
      //   html = colums(block);
      // } else if (block.type === "image") {
      //   html = image(block);
      // }
      // const toHTML = templates[block.type];
      //вставить в html
      this.$el.insertAdjacentHTML("beforeend", block.toHTML());
    });
  }
}
