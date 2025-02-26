import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

// export const CardContainer = styled.div`
//   background-color: white;
//   width: 200px;
//   height: 200px;
//   padding: 30px;
//   color: green;
// `;

export const CardContainer = styled.div(() => ({
  backgroundColor: "white",
  width: 400,
  height: 400,
  padding: 30,
}));

interface TitleProps {
  $color: string;
  $background: string;
  children: ReactNode;
}

export const Title: FunctionComponent<TitleProps> = styled.span((props) => ({
  fontSize: 19,
  fontWeight: 800,
  color: props.$color,
  background: props.$background,
}));

export const TitleN = styled.span<{ $color: string; $background: string }>`
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.$color};
  background: ${(props) => props.$background};
`;
