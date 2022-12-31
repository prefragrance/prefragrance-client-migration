import { HStack, Icon, VStack } from "@common-components";
import styled from "@emotion/styled";
import { detailTabs } from "@src/pages/product/detail/[id]";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import { SmallTitle } from "@src/styles/textComponents";
import { IconTheme } from "../common/icon/Icon";

export interface IProductRate {
  activeTab: string;
}

const ProductRate = ({ activeTab }: IProductRate) => {
  return (
    <VStack gap={30}>
      {activeTab === detailTabs[0] && (
        <VStack>
          <HStack>
            <Season />
          </HStack>
        </VStack>
      )}
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
    <InfoWrapper alignItems={"flex-start"}>
      <SmallTitle>잘 어울리는 계절</SmallTitle>
      <DescWrapper>
        <HStack padding="10px 20px" align={"space-evenly"}>
          <OutlinedIcon name={"filter_vintage"} selected />
          <OutlinedIcon name={"beach_access"} selected={false} />
          <OutlinedIcon name={"eco"} selected={false} />
          <OutlinedIcon name={"ac_unit"} selected={false} />
        </HStack>
        <HStack gap={4}>
          <ColoredSpan>68%</ColoredSpan>의 사용자가
          <ColoredSpan>봄</ColoredSpan>에 어울린다고 답변했어
        </HStack>
      </DescWrapper>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(VStack)`
  width: 500px;
`;

const DescWrapper = styled(VStack)`
  width: 100%;
`;

const ColoredSpan = styled.span`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.bold};
  color: ${palette.green.primary};
`;

export default ProductRate;
