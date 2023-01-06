import { HStack, LoadingSpinner } from "@common-components";
import styled from "@emotion/styled";
import { BigTitle } from "@src/styles/textComponents";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { useProductHot } from "./useProductHot";
import { IProductHotResponse } from "@src/common/types/product";
import { IOption } from "@src/components/common/searchBar/categoryDropdown";
import { palette, fontWeight, fontSize } from "@src/styles/styles";
// import { useScrollRestoration } from "@src/common/utils/useScrollRestoration";
// import { useRouter } from "next/router";

const SortProductHotKeywords: IOption[] = [
  { label: "리뷰순", value: "review" },
  { label: "조회순", value: "visit" },
];

const Recommendation = () => {
  // const router = useRouter();
  // useScrollRestoration(router);
  const [currentSort, setCurrentSort] = useState<string>(
    SortProductHotKeywords[0].label
  );
  const { productHot, fetchStatus } = useProductHot(currentSort);
  const handleClickSort = (e: React.MouseEvent) => {
    setCurrentSort((e.target as HTMLInputElement).textContent as string);
  };

  if (fetchStatus === "fetching" || !productHot) {
  }

  return (
    <Wrapper>
      <Header align="space-between">
        <BigTitle>금주의 핫한 취향</BigTitle>
        <SortTab gap="sm">
          {SortProductHotKeywords.map((keyword) => (
            <Label
              key={keyword.value}
              className={keyword.label === currentSort ? "currentSort" : ""}
              onClick={handleClickSort}
            >
              {keyword.label}
            </Label>
          ))}
        </SortTab>
      </Header>
      <Body gap="none">
        {!productHot || fetchStatus === "fetching" ? (
          <LoadingSpinner
            height="316px"
            backgroundColor={palette.gray.background}
            fontWeight={fontWeight.bold}
            fontSize={fontSize.bigTitle}
          />
        ) : (
          productHot.length > 0 &&
          productHot.map((data: IProductHotResponse) => (
            <InfoBox key={data.id} {...data} />
          ))
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  row-gap: 20px;
  min-width: 1000px;
`;

const Header = styled(HStack)`
  width: inherit;
`;

const SortTab = styled(HStack)``;

const Label = styled.li`
  &.currentSort {
    background-color: ${palette.green.primary};
    color: ${palette.green.rightLogo};
    padding: 0rem 0.2rem;
    border-radius: 0.5rem;
    border: 0.4rem solid ${palette.green.primary};
  }
`;

const Body = styled(HStack)`
  width: 100%;
`;

export default Recommendation;
