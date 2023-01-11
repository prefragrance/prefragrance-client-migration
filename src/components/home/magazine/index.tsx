import styled from "@emotion/styled";
import { Icon } from "@src/components/common";
import { fontSize, palette } from "@src/styles/styles";
import React, { useState } from "react";
import MagazineItem from "./MagazineItem";
// import { ApiUrl } from "@src/common/constants/path";
// import apiCall from "@src/common/api/apiCall";
import { VStack, HStack } from "@common-components";

// text가 12개씩 들어온다 가정
const text = [
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "남자 우디 향수 BEST 10", query: "clean" },
  { content: "포근한 파우더 향 BEST 30", query: "calm" },
  { content: "상쾌한 시트러스 향 BEST 20 ", query: "refreshing" },
  { content: "호불호 없는 여자 향수 BEST 10", query: "romantic" },
  { content: "달콤한 플로럴 향 BEST 20", query: "sweet" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
  { content: "여름밤의 촉촉한 향 BEST 10", query: "cool" },
];

const Magazine = () => {
  const [nowPage, setNowPage] = useState(1);
  const limit = 6;
  const offset = (num: number) => (num - 1) * limit;
  const pages = [0, 1];

  // useEffect(() => {
  //   apiCall
  //     .get(ApiUrl.product.magazine)
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <MagazineWrapper gap={"xs"}>
      <HStack gap={"xs"}>
        <Button
          onClick={() => setNowPage(nowPage - 1)}
          disabled={nowPage === 1}
        >
          <Icon size={fontSize.extraBigText}>chevron_left</Icon>
        </Button>

        <BoxSection>
          {text
            .slice(offset(nowPage), offset(nowPage) + limit)
            .map((t, index) => (
              <MagazineItem key={index} content={t.content} query={t.query} />
            ))}
        </BoxSection>

        <Button
          onClick={() => setNowPage(nowPage + 1)}
          disabled={nowPage === pages.length}
        >
          <Icon size={fontSize.extraBigText}>chevron_right</Icon>
        </Button>
      </HStack>
      <RadioSection>
        {pages.map((idx) => (
          <RadioBtn
            key={idx + 1}
            onClick={() => setNowPage(idx + 1)}
            nowPage={nowPage === idx + 1}
          />
        ))}
      </RadioSection>
    </MagazineWrapper>
  );
};

const MagazineWrapper = styled(VStack)`
  width: 100%;
  padding: 40px 0px;
`;

const BoxSection = styled.div`
  height: 400px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 3rem;
`;

const Button = styled.button`
  font-size: 3rem;
  color: ${palette.gray.dark};

  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const RadioBtn = styled.div<{ nowPage: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ nowPage }) =>
    nowPage ? palette.gray.dark : palette.gray.lighter};
  cursor: pointer;
`;

export default Magazine;
