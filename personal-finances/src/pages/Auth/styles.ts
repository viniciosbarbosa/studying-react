import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.COLORS.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  width: 26.25rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.COLORS.borderColor};
  width: 100%;
  padding: 1.8rem;
  box-shadow: black 0px 3px 7px -6px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.lg};
  font-weight: 800;
  color: ${(props) => props.theme.COLORS.authCardTitleColor};
`;

export const CardSubTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  font-weight: 600;
  color: ${(props) => props.theme.COLORS.authCardSubTitleColor};
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Link = styled(LinkRouter)`
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  color: ${(props) => props.theme.COLORS.primary};
`;
