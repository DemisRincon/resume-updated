import styled from "styled-components";

interface Breakpoints {
  phone: string;
  tablet: string;
  desktop: string;
}

interface Colors {
  light: string;
  dark: string;
  snow: string;
  lightGreen: string;
  lightBlue: string;
}

export const breakpoints: Breakpoints = {
  phone: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const colors: Colors = {
  light: "#f8f9fa",
  dark: "#093a3e",
  snow: "#f7f0f0",
  lightGreen: "#18a999",
  lightBlue: "#3aafb9",
};
