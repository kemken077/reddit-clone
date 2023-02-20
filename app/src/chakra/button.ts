import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '8pt',
    },
    md: {
      fontSize: '10pt',
    },
  },
  variants: {
    
  },
};