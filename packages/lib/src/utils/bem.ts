import { Bem, bem as bemBase } from "@react5/bem";

export function bem(block: string): Bem {
  return bemBase("r5te-" + block);
}