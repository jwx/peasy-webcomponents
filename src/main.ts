//main.ts
import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { MyButton } from "./components/button";
import { MyContainer } from "./components/container";
import { MyLabel } from "./components/label";

const model = {
  MyButton,
  MyContainer,
  MyLabel,
  mainContainer: {
    name: "myContainer",
    counter: 0,
  },
};
const template = `
    <div class="App">
      Hello Peasy!!! 
      <my-container pui="MyContainer === mainContainer"></my-container>
    </div>
  `;

UI.create(document.body, model, template);
