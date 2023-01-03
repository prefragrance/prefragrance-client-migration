import React from "react";
import styled from "@emotion/styled";
import { fontSize, palette, fontWeight } from "@src/styles/styles";
import Avatar from "@src/components/common/avatar/Avatar";
import { Icon, VStack } from "@src/components/common";
import { ISearchResult } from "@src/common/types/search";
import { HStack } from "@common-components";
import Link from "next/link";
import { RouterUrl } from "@src/common/constants/path";

const SearchResultItem = ({ data }: { data: ISearchResult }) => {
  const rate = data.rate.toFixed(2);
  return (
    <Link href={`${RouterUrl.ProductDetail}/${data.id}`} key={data.id}>
      <a>
        <ItemContainer align="flex-start" padding="1rem">
          <ImgWrapper>
            <Avatar url={data?.thumbnail_url} width="5rem" height="5rem" />
          </ImgWrapper>
          <InfoWrapper alignItems="flex-start" gap="xs">
            <ProductTitle>{data.name}</ProductTitle>
            <Producer>{data.producer}</Producer>

            <ProductInfo align="flex-start" gap="xs">
              <VisitWrapper gap={4}>
                <Icon size={`${fontSize.body}`}>visibility</Icon>
                {data.visit_cnt}
              </VisitWrapper>
              <ReviewWrapper gap={4}>
                <Icon size={`${fontSize.body}`}>rate_review</Icon>
                {data.review_cnt}
              </ReviewWrapper>
              <RateWrapper gap={4}>
                <Icon size={`${fontSize.body}`}>star</Icon>
                <span>{rate}</span>
              </RateWrapper>
            </ProductInfo>
          </InfoWrapper>
        </ItemContainer>
      </a>
    </Link>
  );
};

const ItemContainer = styled(HStack)``;

const ImgWrapper = styled.div`
  cursor: pointer;
`;

const InfoWrapper = styled(VStack)``;

const ProductTitle = styled.div`
  font-size: ${fontSize.smallTitle};
  cursor: pointer;
`;

const Producer = styled.div`
  color: ${palette.gray.dark};
  font-weight: ${fontWeight.bold}
  cursor: pointer;
`;
const ProductInfo = styled(HStack)`
  font-size: ${fontSize.paragraph};
`;

const VisitWrapper = styled(HStack)`
  color: ${palette.gray.dark};
`;
const ReviewWrapper = styled(HStack)`
  color: ${palette.gray.dark};
`;
const RateWrapper = styled(HStack)`
  span {
    color: ${palette.tags.yellow};
  }
`;

export default SearchResultItem;
