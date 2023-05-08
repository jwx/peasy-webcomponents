//button.ts
import { UI } from "@peasy-lib/peasy-ui";

const defaultStyle = {
  position: "relative",
  width: "200px",
  height: "250px",
  border: "1px solid white",
  margin: "25px",
  padding: "10px",
};
const button1 = {
  name: "addButton",
  buttonText: "Add One",
  style: { top: "10px", left: "40px" },
};
const button2 = {
  name: "subButton",
  buttonText: "Minus One",
  style: { "background-Color": "blue", top: "10px", left: "120px" },
};
const label1 = {
  name: "bobslabel",
  style: { top: "100px", left: "50%", transform: "translateX(-50%)" },
};

export class Container {
  counter: number;
  name: string;
  addButton;
  subButton;
  myLabel;
  stylestring: string;

  static template: string = `
  <div data-name="\${name}" style="\${stylestring}">
    <\${Button===addButton}>
    <\${Button===subButton}>
    <\${Label===myLabel}>
  </div>`;

  constructor(name: string, counter: number, style?: any) {
    this.name = name;
    this.counter = counter;
    this.addButton = { props: button1, callback: this.incCounter };
    this.subButton = { props: button2, callback: this.decCounter };
    this.myLabel = { props: label1, value: this.counter };
    this.stylestring = this.setDefaultStyle(style);
  }

  setDefaultStyle(passedStyle: string): string {
    let stylestring: string = "";
    let styles: any;
    let styleArray: any;

    if (passedStyle != undefined) styles = passedStyle;
    else styles = defaultStyle;

    styleArray = Object.keys(styles);
    styleArray.forEach((style: any) => {
      let styleVal = styles[style];
      stylestring = stylestring.concat(`${style}:${styleVal};`);
    });
    return stylestring;
  }

  incCounter = () => {
    console.log("count up");
    this.counter += 1;
  };

  decCounter = () => {
    console.log("count down");
    this.counter -= 1;
  };

  static create(state: any) {
    return new Container(state.name, state.counter, state.style);
  }
}
UI.register("Container", Container); // Can be replaced with a property on invoking model
