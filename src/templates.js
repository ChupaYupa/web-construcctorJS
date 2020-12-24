import { row, col, css } from "./utils";

//вызывает до того момента как была определена ф-ция
function title(block) {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}
function colums(block) {
  const html = block.value
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
  return row(html, css(block.options.styles));
}
function image(block) {
  const { imageStyles: iS, alt = "", styles } = block.options;
  //   return `<div class="row">
  //                <img src="${block.value}" />
  //             </div>`;
  return row(
    `<img src="${block.value}" alt=${alt} style="${css(iS)}" />`,
    css(styles)
  );
}
export const templates = {
  title,
  text,
  colums,
  image,
};
