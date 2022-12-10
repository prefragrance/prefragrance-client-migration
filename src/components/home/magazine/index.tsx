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
  "여름밤의 촉촉한 향 BEST 10",
  "달콤한 플로럴 향 BEST 20",
  "남자 우디 향수 BEST 10",
  "포근한 파우더 향 BEST 30",
  "상쾌한 시트러스 향 BEST 20 ",
  "호불호 없는 여자 향수 BEST 10",
  "가나다라 BEST 10",
  "마바사 BEST 20",
  "아자차카 BEST 10",
  "타파하 BEST 30",
  "1234 BEST 20 ",
  "5678 BEST 10",
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
    <MagazineWrapper gap="lg">
      <BoxWrapper>
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
              <MagazineItem key={index} text={t} />
            ))}
        </BoxSection>

        <Button
          onClick={() => setNowPage(nowPage + 1)}
          disabled={nowPage === pages.length}
        >
          <Icon size={fontSize.extraBigText}>chevron_right</Icon>
        </Button>
      </BoxWrapper>
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
  position: relative;
`;

const BoxWrapper = styled(HStack)``;

const BoxSection = styled.div`
  height: 400px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 3rem;
  color: ${palette.gray.dark};
  &:first-of-type {
    left: -5rem;
  }
  &:last-of-type {
    right: -5rem;
  }
  ${(props) => props.disabled && "display: none"};
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
