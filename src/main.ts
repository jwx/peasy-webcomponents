//main.ts
import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Button } from "./components/button";
import { Container } from "./components/container";
import { Label } from "./components/label";

const model = {
  Button,
  Container,
  Label,
  mainContainer: {
    name: "myContainer",
    counter: 0,
  },
};
const template = `
    <div class="App">
      Hello Peasy!!! 
      <\${Container===mainContainer}>
    </div>
  `;

UI.create(document.body, model, template);
