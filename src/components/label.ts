//button.ts
import { UI } from "@peasy-lib/peasy-ui";

const defaultStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "60px",
  height: "100px",
  "background-Color": "black",
  color: "white",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "font-size": "xx-large",
};

export class Label {
  name: string;
  value: string;
  stylestring: string;
  static template: string = `
  <label data-name="\${name}" style="\${stylestring}">\${value}</label>`;
  constructor(name: string, value: string, style?: any) {
    this.name = name;
    this.stylestring = this.setDefaultStyle(style);
    this.value = value;
  }

  setDefaultStyle(passedStyle: string): string {
    let stylestring: string = "";
    let styles: any;
    let styleArray: any;

    //setup style object
    //deep copy of default styles
    styles = JSON.parse(JSON.stringify(defaultStyle)); //read in defaults
    //then check passedStyles
    styleArray = Object.keys(passedStyle);
    styleArray.forEach((style: any) => {
      //overwrite existing style keys
      //add new ones
      styles[style] = passedStyle[style];
    });

    styleArray = Object.keys(styles);
    styleArray.forEach((style: any) => {
      let styleVal = styles[style];
      stylestring = stylestring.concat(`${style}:${styleVal};`);
    });
    return stylestring;
  }

  static create(state: any) {
    return new Label(state.props.name, state.value, state.props.style);
  }
}
UI.register("Label", Label); // Can be replaced with a property on invoking model
