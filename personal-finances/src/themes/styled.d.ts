import { lightTheme } from "./lightTheme";
import "styled-components";

export type ITheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
