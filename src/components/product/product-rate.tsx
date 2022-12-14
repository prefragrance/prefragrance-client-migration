import { HBar, HStack, VStack } from "@common-components";
import styled from "@emotion/styled";
import {
  IProductDetailResponse,
  SeasonType,
  TimeType,
} from "@src/common/types/product";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import { SmallTitle } from "@src/styles/textComponents";
import Season from "./review/season";
import Time from "./review/time";

interface IProductRate {
  productDetail: IProductDetailResponse;
}

export interface IGraphLabel {
  width?: number;
  textAlign?: "left" | "center";
}

const ProductRate = ({ productDetail }: IProductRate) => {
  console.log(productDetail);
  return (
    <VStack padding={"30px 0px 50px 0px"} gap={60}>
      <HStack align={"space-between"}>
        <SeasonSection />
        <TimeSection />
      </HStack>
      <HStack align={"space-between"}>
        <Duration />
        <Strength />
      </HStack>
    </VStack>
  );
};

const SeasonSection = () => {
  return (
    <InfoWrapper>
      <SmallTitle>잘 어울리는 계절</SmallTitle>
      <DescWrapper>
        <Season selectedValue={SeasonType.Spring} />
        <DescText gap={4}>
          <ColoredSpan>68%</ColoredSpan>의 사용자가
          <ColoredSpan>봄</ColoredSpan>에 어울린다고 답변했어
        </DescText>
      </DescWrapper>
    </InfoWrapper>
  );
};

const TimeSection = () => {
  return (
    <InfoWrapper>
      <SmallTitle>잘 어울리는 시간</SmallTitle>
      <DescWrapper>
        <Time selectedValue={TimeType.Day} />
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
          <HBar value={82} />
          <GraphLabel>82%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>보통이에요</GraphLabel>
          <HBar value={14} />
          <GraphLabel>14%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>짧아요</GraphLabel>
          <HBar value={4} />
          <GraphLabel>4%</GraphLabel>
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
          <HBar value={75} />
          <GraphLabel>75%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>보통이에요</GraphLabel>
          <HBar value={13} />
          <GraphLabel>13%</GraphLabel>
        </HStack>
        <HStack>
          <GraphLabel>약해요</GraphLabel>
          <HBar value={12} />
          <GraphLabel>12%</GraphLabel>
        </HStack>
      </VStack>
    </InfoWrapper>
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

export const GraphLabel = styled.span<IGraphLabel>`
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

export default ProductRate;
