var _templateReference = {},
  _templateReference2 = {};
import ESXToken from "@ungap/esxtoken";
import createRender from "udomsay/ssr";
import { Signal, signal } from "@webreflection/signal";
const render = createRender({
  Signal
});
function Counter({
  clicks
}) {
  return new ESXToken(_templateReference, 3, ESXToken._, [new ESXToken(null, 3, [ESXToken.a(true, "onclick", () => {
    clicks.value--;
  })], [ESXToken.b(6, "\n        -\n      ")], "button", "button"), new ESXToken(null, 3, ESXToken._, [ESXToken.b(6, "Clicks- "), ESXToken.b(5, clicks)], "span", "span"), new ESXToken(null, 3, [ESXToken.a(true, "onclick", () => {
    clicks.value++;
  })], [ESXToken.b(6, "\n        +\n      ")], "button", "button")], "div", "div");
}
function test(value = 0) {
  console.time("render");
  render(new ESXToken(_templateReference2, 2, [ESXToken.a(true, "clicks", signal(value))], ESXToken._, "Counter", Counter), console.log.bind(console));
  console.timeEnd("render");
}
test(5);

//# sourceMappingURL=main.js.map