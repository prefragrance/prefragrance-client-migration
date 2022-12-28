import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import Avatar from "@src/components/common/avatar/Avatar";
import { Icon } from "@src/components/common";
import { ISearchResult } from "@src/common/types/search";

const SearchResultBlock = ({ data }: { data: ISearchResult }) => {
  return (
    <Container>
      <ImgWrapper>
        <Avatar url={data?.thumbnail_url} width="5rem" height="5rem" />
      </ImgWrapper>
      <Wrapper>
        <ProductTitle>
          <ProductName>{data.name}</ProductName>
          <ProductRate>
            <Icon>{data.rate_sum}</Icon>
          </ProductRate>
        </ProductTitle>
        <Producer>{data.producer} </Producer>
        <ProductInfo>
          조회수 {data.visit_cnt} / 리뷰 수 {data.review_cnt}
        </ProductInfo>
      </Wrapper>
    </Container>
    // <Link href={pathname: RouteUrl.ProductDetail, query: {id: id}}
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 7rem;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  cursor: pointer;
`;
// const DefaultIcon = styled.div`
//   background: no-repeat center url(${logo.src});
//   background-color: ${palette.green.primary};
//   background-size: 7rem;
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProductName = styled.span`
  font-size: 1.1rem;
`;
const ProductRate = styled.span`
  display: flex;
  align-items: center;

  gap: 0.2rem;
  color: ${palette.keyword.red};
  font-size: 1rem;
  padding-left: 0.4rem;
`;

const Producer = styled.div`
  opacity: 0.5;
  cursor: pointer;
`;
const ProductInfo = styled.div`
  font-size: 0.8rem;
`;

export default SearchResultBlock;
