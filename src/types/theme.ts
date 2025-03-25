// src/types/theme.ts
// Shared theme and styled-component related types
import { Variants, HTMLMotionProps } from 'framer-motion';

export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textLight: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  borderRadius: string;
  boxShadow: string;
  transition: string;
}

export interface ThemedProps {
  theme: Theme;
}

export interface MotionDivProps extends HTMLMotionProps<"div"> {
  variants?: Variants;
}

export interface MotionHeadingProps extends HTMLMotionProps<"h1"> {
  variants?: Variants;
}

export interface MotionTextProps extends HTMLMotionProps<"p"> {
  variants?: Variants;
} 