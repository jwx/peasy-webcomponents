//button.ts
import { UI } from "@peasy-lib/peasy-ui";

const defaultStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  "background-Color": "red",
  width: "60px",
  height: "60px",
};

export class Button {
  name: string;
  stylestring: string;
  static template: string = `
  <button data-name="\${name}" \${click@=>onClick} style="\${stylestring}">\${buttonText}</button>`;
  buttonText: string;
  onClick: any;

  constructor(name: string, buttonText: string, callback: any, style?: any) {
    this.name = name;
    this.buttonText = buttonText;
    this.stylestring = this.setDefaultStyle(style);
    this.onClick = callback;
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
    return new Button(state.props.name, state.props.buttonText, state.callback, state.props.style);
  }
}
UI.register("Button", Button); // Can be replaced with a property on invoking model
