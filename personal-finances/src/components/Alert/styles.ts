import styled from "styled-components";

export const Container = styled.div<{ $show: boolean; $type: string }>`
  position: fixed;
  top: 0.625rem;
  right: 1.875rem;
  z-index: 1;
  display: flex;
  gap: 0.31rem;
  background-color: ${(props) =>
    props.$type === "error"
      ? props.theme.COLORS.danger
      : props.theme.COLORS.success};
  padding: 1rem;
  border-radius: 0.25rem;
  transition:
    transform 0.6s,
    opacity 3s;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transform: ${(props) => (props.$show ? "translateX(0)" : "translateX(20%)")};
  pointer-events: ${(props) => (props.$show ? "all" : "none")};

  .icon {
    color: ${(props) => props.theme.COLORS.white};
    font-size: ${(props) => props.theme.FONT_SIZES.lg};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.COLORS.white};
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  font-weight: 700;
`;
