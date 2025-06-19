import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.COLORS.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.COLORS.textColor400};
  font-weight: 700;
  font-size: 0.875rem;
`;
