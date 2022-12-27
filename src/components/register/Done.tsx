import styled from "@emotion/styled";
import { RouterUrl } from "@src/common/constants/path";
import { fontWeight, palette } from "@src/styles/styles";
import { BiggestText } from "@src/styles/textComponents";
import Link from "next/link";
import React from "react";
import { VStack } from "../common";

const Done = () => {
  return (
    <VStack gap={"lg"}>
      <BiggestText>회원가입이 완료되었습니다.</BiggestText>
      <Link href={RouterUrl.Base}>
        <a>
          <Button>취향 탐색하러 가기</Button>
        </a>
      </Link>
    </VStack>
  );
};

const Button = styled.button`
  padding: 10px 0px;
  width: 260px;
  background-color: ${palette.green.primary};
  color: ${palette.white};
  font-weight: ${fontWeight.semiBold};
  text-align: center;
`;

export default Done;
