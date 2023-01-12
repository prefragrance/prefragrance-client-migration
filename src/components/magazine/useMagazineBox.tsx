import React from "react";
import styled from "@emotion/styled";
import { IMagazineProduct } from "@src/common/types/magazine";
import Link from "next/link";
import { fontSize, palette, fontWeight } from "@src/styles/styles";
import { useProductReview } from "@src/components/product/useProductReview";
import { RouterUrl } from "@src/common/constants/path";
import { Icon } from "@src/components/common";
import { calculateSize } from "@src/common/utils/calculateSize";

interface ITag {
  content: string;
  backgroundColor?: string;
  color?: string;
}

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
      </TitleRateSection>
      <TitleRateSection>
        <CraftmanImg src="/assets/images/craftman.png" />
        <Producer>{producer}</Producer>
        <Star>
          <Icon size={`${fontSize.bigTitle}`} color={`${palette.tags.yellow}`}>
            star
          </Icon>
        </Star>
        <Rate>{rate}</Rate>
      </TitleRateSection>
      <Tag content="Top Review" />
      <ProfileImg src="/assets/images/blank-profile.png" />
      {productReview[0]?.content.length === 0 && (
        <Content>&quot; 너무 좋은 향이에요 !! &quot;</Content>
      )}
      {productReview[0]?.content.length > 0 && (
        <Content>&quot; {productReview[0]?.content} &quot;</Content>
      )}
      <InfoSection>
        <ToDetail>
          <Link href={`${RouterUrl.ProductDetail}/${id}`}>
            <a>제품 자세히 보기 ➤➤ </a>
          </Link>
        </ToDetail>
      </InfoSection>
    </ReviewSection>
  );
};

const Tag = ({ content, backgroundColor, color }: ITag) => {
  return (
    <ReviewBox backgroundColor={backgroundColor} color={color}>
      {content}
    </ReviewBox>
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

const CraftmanImg = styled.img`
  width: 2rem;
  height: 2rem;
  float: left;
  margin-right: 0.5rem;
  margin-top: 0.1rem;
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
  margin-top: 1.5rem;
  font-weight: 300;
  font-size: 1.2rem;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 4.5rem;
  margin-bottom: 1.2rem;
`;

const Producer = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 0.3rem;
`;

const Rate = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-left: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${palette.tags.yellow};
`;
const Star = styled.div`
  margin-top: 0.4rem;
  margin-left: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${palette.tags.yellow};
`;

const ToDetail = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  margin-left: 35rem;
`;

const ReviewBox = styled.div<Pick<ITag, "backgroundColor" | "color">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor = palette.green.rightLogo }) =>
    backgroundColor};
  color: ${({ color = palette.green.primary }) => color};
  width: 96px;
  height: 32px;
  border-radius: 6px;
  font-weight: ${fontWeight.semiBold};
  font-size: ${calculateSize(14)};
  margin-bottom: 1rem;
`;

export default MagazineBox;
