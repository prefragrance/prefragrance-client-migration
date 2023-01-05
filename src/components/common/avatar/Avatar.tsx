import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import { palette } from "@src/styles/styles";
import Image from "next/image";

interface AvatarProps {
  width?: number;
  height?: number;
  url: string | null;
}

const Avatar = ({ width = 70, height = 70, url = "" }: AvatarProps) => {
  return (
    <Container width={width} height={height}>
      {url && <Image src={url} alt="Picture of me" layout="fill" />}
      {!url && <BlurBox />}
    </Container>
  );
};

const Container = styled.div<Pick<AvatarProps, "height" | "width">>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  width: ${({ width }) => calculateSize(width)};
  height: ${({ height }) => calculateSize(height)};
  border-radius: 100%;
  background-color: ${palette.white};
`;

const BlurBox = styled.div`
  background-color: ${palette.gray.background};
  width: 100%;
  height: 100%;
`;

export default Avatar;
