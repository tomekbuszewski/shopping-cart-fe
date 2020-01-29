import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

import theme from "./theme";

const rebootOptions = {
  black: theme.colors.basic,
  bodyBg: theme.colors.base,
  bodyColor: theme.colors.basic,
  fontFamilyBase: theme.fonts.faces.primary,
  linkHoverDecoration: "none",
};

export default createGlobalStyle`
  ${reboot(rebootOptions)};
  
  html {
    font-size: ${theme.fonts.sizes.base};
  }
`;
