import styled from "@emotion/styled";
import { fontWeight, palette } from "@src/styles/styles";
import { HStack, VStack } from "@common-components";
import { BigTitle } from "@src/styles/textComponents";
import VCard from "./review-card/VCard";
import HCard from "./review-card/HCard";

const RAW_DATA = [
  {
    product_id: 1,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    product_id: 2,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    product_id: 3,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    product_id: 4,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    product_id: 5,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    product_id: 6,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
];

const BestReview = () => {
  return (
    <>
      <Header align="space-between">
        <Title>베스트 리뷰 상품</Title>
      </Header>
      <Body>
        <HSection gap="lg">
          {RAW_DATA.slice(0, 3).map((obj) => (
            <HCard key={obj.product_id} {...obj} />
          ))}
        </HSection>
        <VSection gap="lg">
          {RAW_DATA.slice(3).map((obj) => (
            <VCard key={obj.product_id} {...obj} />
          ))}
        </VSection>
      </Body>
    </>
  );
};

const Header = styled(HStack)`
  width: 100%;
`;

const Title = styled(BigTitle)`
  font-weight: ${fontWeight.bold};
`;

const Body = styled(VStack)`
  background-color: ${palette.gray.lighter};
  padding: 3rem;
  gap: 3rem;
`;

const HSection = styled(HStack)`
  gap: 3rem;
  width: 100%;
`;

const VSection = styled(VStack)`
  gap: 0;
  width: 100%;
`;

export default BestReview;
