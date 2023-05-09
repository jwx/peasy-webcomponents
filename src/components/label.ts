//label.ts
import { UI } from "@peasy-lib/peasy-ui";

export class MyLabel {
  static template: string = `
  <style>
    label {
      position: var(--position, absolute);
      top: var(--top, 0px);
      left: var(--left, 0px);
      width: var(--width, 60px);
      height: var(--height, 100px);
      background-color: var(--background-color, black);
      color: var(--color, white);
      display: var(--display, flex);
      justify-content: var(--justify-content, center);
      align-items: var(--align-item, center);
      font-size: var(--font-size, xx-large);
      transform: var(--transform, 'none');
    }
  </style>
  <label>\${state.counter}</label>`;
  constructor(public state: { counter: string }) { }

  static create(state: any) {
    return new MyLabel(state);
  }
}
UI.register("MyLabel", MyLabel); // Can be replaced with a property on invoking model
