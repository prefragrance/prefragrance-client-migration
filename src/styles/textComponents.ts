import styled from "@emotion/styled";
import { fontSize } from "./styles";

interface IText {
  color?: string;
  fontWeight?: string;
}

export const Span = styled.span<IText>`
  font-size: ${fontSize.body};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const Paragraph = styled.p<IText>`
  font-size: ${fontSize.paragraph};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const BodyText = styled.p<IText>`
  font-size: ${fontSize.body};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const SmallTitle = styled.h4<IText>`
  font-size: ${fontSize.smallTitle};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const MediumTitle = styled.h3<IText>`
  font-size: ${fontSize.mediumTitle};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const BigTitle = styled.h2<IText>`
  font-size: ${fontSize.bigTitle};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const BiggestText = styled.h2<IText>`
  font-size: ${fontSize.biggestText};
  white-space: pre-wrap;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
