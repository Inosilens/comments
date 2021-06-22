import { comments } from "./comments";
comments();
import { getResponse } from "./services/getObj";
console.log(getResponse());
let content = getResponse();
let a = content.splice(0, 30);
console.log(a);
