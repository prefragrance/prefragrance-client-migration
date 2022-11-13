import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";

interface IReviewBox {
  product_id: number;
  thumbnail_url: string;
  content: string;
  nickname: string;
  pub_date: string;
  producer: string;
  name: string;
}

const ReviewBox = ({
  thumbnail_url,
  content,
  nickname,
  pub_date,
  producer,
  name,
}: IReviewBox) => {
  return (
    <ReviewSection>
      <Img src={thumbnail_url} />
      <InfoSection>
        <Content>{content}</Content>
        <ReviewInfo>
          <span>{nickname}</span>
          <span>{pub_date}</span>
        </ReviewInfo>
        <hr />
        <Title>
          {producer} {name}
        </Title>
      </InfoSection>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  background: ${palette.white};
  margin: auto;
`;

const Img = styled.img`
  border: 1px solid ${palette.black};
  width: 5rem;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1.5fr;
`;

const Content = styled.div`
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const ReviewInfo = styled.div`
  font-size: 0.5rem;
  color: #ebebeb;
  & > span::after {
    content: "|";
  }
  & > span:first-of-type {
    content: "";
  }
`;

const Title = styled.div``;

Img.defaultProps = {
  src: "@public/assets/images/취향로고.png",
};

export default ReviewBox;
