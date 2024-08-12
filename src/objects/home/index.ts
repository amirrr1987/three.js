import { Clock, Group } from "three";
import { box } from "./box";
import { cone } from "./cone";
export const home = new Group();
home.add(box);
home.add(cone);
home.position.set(2, 1, 2);
