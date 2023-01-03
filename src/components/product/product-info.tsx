import { Button, HStack, Stars, VStack } from "@common-components";
import styled from "@emotion/styled";
import { IProductDetailResponse } from "@src/common/types/product";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontWeight, palette } from "@src/styles/styles";
import { BiggestText, MediumTitle } from "@src/styles/textComponents";
import Image from "next/image";

interface IProductInfo {
  productDetail: IProductDetailResponse;
  handleModalOpen: () => void;
}

interface ITag {
  content: string;
  backgroundColor?: string;
  color?: string;
}

const ProductInfo = ({ productDetail, handleModalOpen }: IProductInfo) => {
  return (
    <Container padding="50px" gap={30}>
      <ImageContainer>
        {productDetail.thumbnail_url && (
          <Image
            src={productDetail.thumbnail_url}
            layout={"fill"}
            objectFit={"contain"}
            alt={"thumbnail image"}
          />
        )}
        {!productDetail.thumbnail_url && <NoImageBox>No Image</NoImageBox>}
      </ImageContainer>

      <RightContainer>
        <VStack gap={20} align={"flex-start"} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"} gap={8}>
            <HStack gap={30}>
              <BiggestText fontWeight={fontWeight.bold}>
                {productDetail.name}
              </BiggestText>
              {productDetail.rate && (
                <Stars
                  rate={productDetail.rate}
                  color={palette.green.primary}
                  size={30}
                />
              )}
            </HStack>
            <MediumTitle
              color={palette.gray.dark}
              fontWeight={fontWeight.regular}
            >
              {productDetail.producer} | {productDetail.category}
            </MediumTitle>
          </VStack>
          <VStack alignItems={"flex-start"} gap={8}>
            <MediumTitle>메인 코드</MediumTitle>
            <TagWrapper>
              {productDetail.codes.length > 5
                ? productDetail.codes
                    .slice(0, 5)
                    .map((code) => <Tag content={code.name} key={code.id} />)
                : productDetail.codes.map((code) => (
                    <Tag content={code.name} key={code.id} />
                  ))}
            </TagWrapper>
          </VStack>
          <VStack alignItems={"flex-start"} gap={8}>
            <MediumTitle>키워드</MediumTitle>
            <TagWrapper>
              {productDetail.tags.length > 5
                ? productDetail.tags
                    .slice(0, 5)
                    .map((tag, index) => <Tag content={tag} key={index} />)
                : productDetail.tags.map((tag, index) => (
                    <Tag content={tag} key={index} />
                  ))}
            </TagWrapper>
          </VStack>
        </VStack>
        <Button
          text={"리뷰 쓰기"}
          width={"100%"}
          fontWeight={fontWeight.bold}
          padding="12px 0px"
          onClick={handleModalOpen}
        />
      </RightContainer>
    </Container>
  );
};

const Tag = ({ content, backgroundColor, color }: ITag) => {
  return (
    <TagBox backgroundColor={backgroundColor} color={color}>
      {content}
    </TagBox>
  );
};

const Container = styled(HStack)`
  height: max-content;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  border: 1px solid ${palette.gray.background};
`;

const NoImageBox = styled(HStack)`
  height: 100%;
  color: ${palette.gray.dark};
  font-weight: ${fontWeight.bold};
`;

const RightContainer = styled(VStack)`
  height: 450px;
  width: 500px;
  justify-content: space-between;
  align-items: flex-start;
`;

const TagBox = styled.div<Pick<ITag, "backgroundColor" | "color">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor = palette.gray.dark }) =>
    backgroundColor};
  color: ${({ color = palette.white }) => color};
  width: 84px;
  height: 32px;
  border-radius: 6px;
  font-weight: ${fontWeight.semiBold};
  font-size: ${calculateSize(14)};
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  flex-wrap: wrap;
`;

export default ProductInfo;
