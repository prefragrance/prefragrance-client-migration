import React from "react";
import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import Image from "next/image";
import logo from "/public/assets/images/취향로고.png";
import { HStack, VStack } from "@src/components/common";

interface IReviewBox {
  product_id: number;
  thumbnail_url: string;
  content: string;
  nickname: string;
  pub_date: string;
  producer: string;
  name: string;
}

const VCard = ({
  thumbnail_url = logo.src,
  content,
  nickname,
  pub_date,
  producer,
  name,
}: IReviewBox) => {
  return (
    <CardSection>
      <ImgSection>
        <Image src={thumbnail_url} alt="reviewThumbnail" layout="fill" />
      </ImgSection>
      <InfoSection gap="lg" align="space-between">
        <TextBox alignItems="flex-start">
          <Content>{content}</Content>
          <Title>
            [{producer}] {name}
          </Title>
        </TextBox>
        <ReviewInfo>
          <span>{nickname}</span>
          <span>{pub_date}</span>
        </ReviewInfo>
      </InfoSection>
    </CardSection>
  );
};

const CardSection = styled(HStack)`
  background: ${palette.white};
  padding: 2rem;
  width: 100%;
`;

const ImgSection = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${palette.black};
  position: relative;
`;

const InfoSection = styled(HStack)`
  padding: 0 1rem;
`;

const TextBox = styled(VStack)`
  width: 65%;
`;

const Content = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ReviewInfo = styled.div`
  font-size: ${fontSize.tiny};
  span {
    color: ${palette.gray.dark};
  }
  & > span::after {
    content: "|";
    padding: 0 0.4rem;
  }
  & > span:last-child::after {
    content: "";
  }
`;

const Title = styled.div``;

export default VCard;
