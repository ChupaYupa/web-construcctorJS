debugger;
import image from "./assets/image.jpg";
import {
  TitleBlock,
  ImageBlock,
  ColumsBlock,
  TextBlock,
} from "./classes/blocks";
const text = "Приложение создано для тренеровки";

export const model = [
  new TitleBlock("JS site cotnstructor", {
    tag: "h2",
    // styles: `background: red; color: #fff; text-align: center;
    //   padding: 1.5rem;`,
    styles: {
      background:
          "linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Это картинка",
  }),
  new TextBlock(text, {
    styles: {
      padding: "2rem",
      "font-weight": "bold",
      display: "inline-block",
      position: "relative",
      "letter-spacing": ".05em",
      "text-shadow":
          "1px 1px mediumturquoise, -1px 1px mediumturquoise, -1px -1px mediumturquoise, 1px -1px mediumturquoise",
      color: "black",
      transition: "all 1s"
    },
  }),
  new ColumsBlock(["Приложение на чистом JavaScript, без использования библиотек",
    "Программирование — это разбиение чего-то большого и невозможного на что-то маленькое и вполне реальное.",
    "JavaScript - это просто, интересно.",], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
];
