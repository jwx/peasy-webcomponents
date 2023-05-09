//button.ts
import { UI } from "@peasy-lib/peasy-ui";

export class MyButton {
  static template: string = `
  <style>
    button {
      position: var(--position, absolute);
      top: var(--top, 0px);
      left: var(--left, 0px);
      background-color: var(--background-color, red);
      width: var(--width, 60px);
      height: var(--height, 60px)
    }
  </style>
  <button pui="click @=> callback">\${buttonText}</button>`;
 
  constructor(public buttonText: string, public callback: any) { }

   static create(state: any) {
    return new MyButton(state.buttonText, state.callback);
  }
}
UI.register("MyButton", MyButton); // Can be replaced with a property on invoking model
