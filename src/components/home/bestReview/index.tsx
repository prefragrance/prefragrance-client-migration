import { HStack, VStack } from "@common-components";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { BigTitle } from "@src/styles/textComponents";
import HCard from "./review-card/HCard";
import VCard from "./review-card/VCard";

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
    <Wrapper>
      <Header align="space-between">
        <BigTitle>베스트 리뷰 상품</BigTitle>
      </Header>
      <Body gap={"lg"}>
        <HSection gap={"lg"}>
          {RAW_DATA.slice(0, 3).map((obj) => (
            <HCard key={obj.product_id} {...obj} />
          ))}
        </HSection>
        <VSection gap="none">
          {RAW_DATA.slice(3).map((obj) => (
            <VCard key={obj.product_id} {...obj} />
          ))}
        </VSection>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  row-gap: 20px;
`;

const Header = styled(HStack)`
  width: 100%;
`;

const Body = styled(VStack)`
  width: 100%;
  background-color: ${palette.gray.lighter};
  padding: 30px;
`;

const HSection = styled(HStack)`
  width: 100%;
`;

const VSection = styled(VStack)`
  width: 100%;
`;

export default BestReview;
