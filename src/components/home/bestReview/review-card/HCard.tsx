import React from "react";
import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import { Icon, VStack } from "@src/components/common";
import Image from "next/image";
import logo from "/public/assets/images/취향로고.png";

interface IReviewBox {
  product_id: number;
  thumbnail_url: string;
  content: string;
  nickname: string;
  pub_date: string;
  producer: string;
  name: string;
}

const HCard = ({
  thumbnail_url = logo.src,
  content,
  nickname,
  pub_date,
  producer,
  name,
}: IReviewBox) => {
  return (
    <CardSection gap="none">
      <ImgSection>
        <Image src={thumbnail_url} alt="reviewThumbnail" layout="fill" />
      </ImgSection>
      <InfoSection gap="sm" alignItems="flex-start">
        <TextBox alignItems="flex-start">
          <QuoteIcon size="2rem">format_quote</QuoteIcon>
          <Content>{content}</Content>
          <ReviewInfo>
            <span>{nickname}</span>
            <span>{pub_date}</span>
          </ReviewInfo>
        </TextBox>
        <Title>
          [{producer}] {name}
        </Title>
      </InfoSection>
    </CardSection>
  );
};

const CardSection = styled(VStack)`
  background: ${palette.white};
`;

const ImgSection = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid ${palette.black};
`;

const InfoSection = styled(VStack)`
  padding: 1rem;
`;

const QuoteIcon = styled(Icon)`
  // span {
  //   display: flex;
  //   transform: rotate(180deg);
  //   position: absolute;
  // }
`;

const TextBox = styled(VStack)`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${palette.black};
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  text-overflow: ellipsis; // 박스 초과하면 ...처리
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 라인 수
  -webkit-box-orient: vertical;
  word-wrap: break-word; // 가로 넘어가면 엔터
  line-height: 1.2rem;
  height: 2.4rem;
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

export default HCard;
