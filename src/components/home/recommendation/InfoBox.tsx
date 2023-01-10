import styled from "@emotion/styled";
import { IProductHotResponse } from "@src/common/types/product";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import React from "react";
import Image from "next/image";
import { calculateSize } from "@src/common/utils/calculateSize";
import { VStack } from "@common-components";
import Link from "next/link";
import { RouterUrl } from "@src/common/constants/path";

interface HotImageProps {
  width?: number;
  height?: number;
}

const InfoBox = (data: IProductHotResponse) => {
  const { thumbnail_url, name, producer, id } = data;
  return (
    <Link href={`${RouterUrl.ProductDetail}/${id}`}>
      <a>
        <InfoSection alignItems="flex-start">
          <HotImage width={180} height={250}>
            <Image src={thumbnail_url} alt="Picture of me" layout="fill" />
          </HotImage>
          <Title>{name}</Title>
          <Brand>{producer}</Brand>
        </InfoSection>
      </a>
    </Link>
  );
};

const InfoSection = styled(VStack)`
  gap: 0.5rem;
  width: 196px;
  position: relative;
  pointer: cursor;
`;

const HotImage = styled.div<Pick<HotImageProps, "height" | "width">>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  width: ${({ width }) => calculateSize(width)};
  height: ${({ height }) => calculateSize(height)};
  background-color: ${palette.gray.lighter};
  box-sizing: content-box;
`;

const Title = styled.div`
  width: 100%;
  font-size: ${fontSize.mediumTitle};
  font-weight: ${fontWeight.bold};
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Brand = styled.div`
  font-size: ${fontSize.paragraph};
  padding-bottom: 0.4rem;
`;

export default InfoBox;
