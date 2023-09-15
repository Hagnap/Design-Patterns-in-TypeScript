import { Adapter } from "./adapter";
import { Target } from "./target";

let target = new Target();
target.request();

let targetWithAdapter = new Adapter();
targetWithAdapter.request();
