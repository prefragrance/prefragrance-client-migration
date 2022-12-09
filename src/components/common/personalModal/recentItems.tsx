import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";

interface IReviewBox {
  product_id: number;
  thumbnail_url: string;
  producer: string;
  name: string;
}

const RecentItems = ({
  thumbnail_url,
  producer,
  name,
  product_id,
}: IReviewBox) => {
  return (
    <ReviewSection>
      <Img src={thumbnail_url} />
      <InfoSection>
        <Name>
          {product_id}. {name}
        </Name>
        <Rate>별점</Rate>
      </InfoSection>
      <InfoSection>
        <Producer>{producer}</Producer>
      </InfoSection>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  width: 232px;
  height: 321px;
  background: ${palette.white};
  margin: auto;
`;

const Img = styled.img`
  border: 1px solid ${palette.black};
  width: 2rem;
  height: 2rem;
  float: left;
  margin: 1rem;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 0rem;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
`;

const Producer = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rate = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-left: 2rem;
  align-items: center;
  justify-content: center;
  color: ${palette.green.rightLogo};
`;

export default RecentItems;
