import {
  HBar,
  HDivider,
  HStack,
  Icon,
  Stars,
  VBar,
  VStack,
} from "@common-components";
import styled from "@emotion/styled";
import { IProductDetailResponse } from "@src/common/types/product";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import { BigTitle, BodyText, SmallTitle } from "@src/styles/textComponents";
import { IconTheme } from "../common/icon/Icon";

interface IProductRate {
  productDetail: IProductDetailResponse;
}

interface IGraphLabel {
  width?: number;
  textAlign?: "left" | "center";
}

const ProductRate = ({ productDetail }: IProductRate) => {
  return (
    <VStack gap={"none"}>
      <VStack padding={"30px 0px 50px 0px"} gap={60}>
        <HStack align={"space-between"}>
          <Season />
          <Time />
        </HStack>
        <HStack align={"space-between"}>
          <Duration />
          <Strength />
        </HStack>
      </VStack>
      <HDivider />
      <Review productDetail={productDetail} />
    </VStack>
  );
};

const OutlinedIcon = ({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) => {
  return (
    <Icon
      theme={IconTheme.Outlined}
      color={selected ? palette.green.primary : palette.gray.background}
      size={44}
    >
      {name}
    </Icon>
  );
};

const Season = () => {
  return (
    <InfoWrapper>
      <SmallTitle>잘 어울리는 계절</SmallTitle>
      <DescWrapper>
        <HStack padding="10px 0px" gap={32}>
          <OutlinedIcon name={"filter_vintage"} selected />
          <OutlinedIcon name={"beach_access"} selected={false} />
          <OutlinedIcon name={"eco"} selected={false} />
          <OutlinedIcon name={"ac_unit"} selected={false} />
        </HStack>
        <DescText gap={4}>
          <ColoredSpan>68%</ColoredSpan>의 사용자가
          <ColoredSpan>봄</ColoredSpan>에 어울린다고 답변했어
        </DescText>
      </DescWrapper>
    </InfoWrapper>
  );
};

const Time = () => {
  return (
    <InfoWrapper>
      <SmallTitle>잘 어울리는 시간</SmallTitle>
      <DescWrapper>
        <HStack padding="10px 0px" gap={60}>
          <OutlinedIcon name={"light_mode"} selected />
          <OutlinedIcon name={"bedtime"} selected={false} />
        </HStack>
        <DescText gap={4}>
          <ColoredSpan>81%</ColoredSpan>의 사용자가
          <ColoredSpan>낮</ColoredSpan>에 어울린다고 답변했어
        </DescText>
      </DescWrapper>
    </InfoWrapper>
  );
};

const Duration = () => {
  return (
    <InfoWrapper gap={20}>
      <SmallTitle>지속력</SmallTitle>
      <VStack alignItems={"flex-start"}>
        <HStack>
          <GraphLabel>오래가요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>보통이에요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>짧아요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
      </VStack>
    </InfoWrapper>
  );
};

const Strength = () => {
  return (
    <InfoWrapper gap={20}>
      <SmallTitle>향 강도</SmallTitle>
      <VStack alignItems={"flex-start"}>
        <HStack>
          <GraphLabel>강해요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>보통이에요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>약해요</GraphLabel>
          <HBar value={23} />
          <GraphLabel>23%</GraphLabel>
        </HStack>
      </VStack>
    </InfoWrapper>
  );
};

const Review = ({ productDetail }: IProductRate) => {
  return (
    <ReviewWrapper>
      <SmallTitle>리뷰</SmallTitle>
      <HStack gap={60}>
        <VStack gap={"sm"}>
          <BodyText fontWeight={fontWeight.bold}>
            총 {productDetail.rate_sum}건
          </BodyText>
          <HStack gap={4} alignItems={"baseline"}>
            <BigTitle>4.5</BigTitle>
            <SmallTitle>점</SmallTitle>
          </HStack>
          <Stars rate={productDetail.rate} size={30} />
        </VStack>
        <HStack gap={"sm"}>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              86%
            </GraphLabel>
            <VBar value={86} />
            <GraphLabel width={40} textAlign={"center"}>
              5점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              86%
            </GraphLabel>
            <VBar value={86} />
            <GraphLabel width={40} textAlign={"center"}>
              4점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              86%
            </GraphLabel>
            <VBar value={86} />
            <GraphLabel width={40} textAlign={"center"}>
              3점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              86%
            </GraphLabel>
            <VBar value={86} />
            <GraphLabel width={40} textAlign={"center"}>
              2점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              86%
            </GraphLabel>
            <VBar value={86} />
            <GraphLabel width={40} textAlign={"center"}>
              1점
            </GraphLabel>
          </VStack>
        </HStack>
      </HStack>
    </ReviewWrapper>
  );
};

const InfoWrapper = styled(VStack)`
  width: 500px;
  align-items: flex-start;
`;

const DescWrapper = styled(VStack)`
  width: 100%;
`;

const DescText = styled(HStack)`
  font-weight: ${fontWeight.bold};
`;

const GraphLabel = styled.span<IGraphLabel>`
  display: inline-block;
  width: ${({ width = 80 }) => calculateSize(width)};
  font-size: ${fontSize.body};
  text-align: ${({ textAlign = "left" }) => textAlign};
`;

const ColoredSpan = styled.span`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.bold};
  color: ${palette.green.primary};
`;

const ReviewWrapper = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
`;

export default ProductRate;
