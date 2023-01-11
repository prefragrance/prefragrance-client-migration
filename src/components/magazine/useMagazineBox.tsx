import React from "react";
import styled from "@emotion/styled";
import { IMagazineProduct } from "@src/common/types/magazine";
import Link from "next/link";
import { palette } from "@src/styles/styles";
import { useProductReview } from "@src/components/product/useProductReview";
import { RouterUrl } from "@src/common/constants/path";

const MagazineBox = ({
  id,
  name,
  producer,
  thumbnail_url,
  rate,
}: IMagazineProduct) => {
  const { productReview, isProductReviewLoading } = useProductReview(
    String(id)
  );
  console.log(isProductReviewLoading);
  return (
    <ReviewSection>
      <Img src={thumbnail_url} />
      <TitleRateSection>
        <Name>{name}</Name>
        <Rate>{rate}</Rate>
      </TitleRateSection>
      <InfoSection>
        <Producer>{producer}</Producer>
      </InfoSection>
      <ProfileImg src="/assets/images/blank-profile.png" />
      {productReview[0]?.content.length === 0 && (
        <Content>너무 좋은 향이에요 !!</Content>
      )}
      {productReview[0]?.content.length > 0 && (
        <Content>{productReview[0]?.content}</Content>
      )}
      <InfoSection>
        <ToDetail>
          <Link href={`${RouterUrl.ProductDetail}/${id}`}>
            <a>제품 자세히 보기</a>
          </Link>
        </ToDetail>
      </InfoSection>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  height: 30rem;
  width: 80rem;
  background: ${palette.white};
  margin: auto;
  border-bottom: 0.5px solid;
`;

const Img = styled.img`
  border: 1px solid ${palette.black};
  width: 20rem;
  height: 20rem;
  float: left;
  margin: 4rem;
`;

const ProfileImg = styled.img`
  border: 1px solid ${palette.black};
  width: 3rem;
  height: 3rem;
  float: left;
  border-radius: 100rem;
  margin-right: 1rem;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 0rem;
`;
const TitleRateSection = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`;

const Content = styled.div`
  word-wrap: break-word;
  text-overflow: ellipsis;
  margin-top: 1rem;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
`;

const Producer = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-left: 2.5rem;
`;

const Rate = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 5.3rem;
  margin-left: 2rem;
  align-items: center;
  justify-content: center;
  color: ${palette.green.rightLogo};
`;

const ToDetail = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-left: 35rem;
`;

export default MagazineBox;
