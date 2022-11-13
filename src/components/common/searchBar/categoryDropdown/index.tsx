import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useComponentVisible } from "@src/common/utils/useComponentVisible";
import { palette } from "@src/styles/styles";

export interface IOption {
  label: string;
  value: string;
}

export const categoryList: IOption[] = [
  { label: "통합검색", value: "whole" },
  { label: "제품명", value: "name" },
  { label: "브랜드", value: "producer" },
  { label: "키워드", value: "keyword" },
];

interface ICategoryDropdown {
  category: IOption;
  setCategory: Dispatch<SetStateAction<IOption>>;
}

const CategoryDropdown = React.forwardRef(
  ({ category, setCategory }: ICategoryDropdown) => {
    const { componentRef, isVisible, handleComponentVisible } =
      useComponentVisible();

    return (
      <Wrapper>
        <DropdownContainer>
          <DropdownButton
            ref={componentRef as MutableRefObject<HTMLDivElement>}
            onClick={handleComponentVisible}
          >
            {category.label}
          </DropdownButton>
          <Menu isVisible={isVisible}>
            <Ul>
              <Li>
                <LinkWrapper onClick={() => setCategory(categoryList[0])}>
                  통합검색
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper onClick={() => setCategory(categoryList[1])}>
                  제품명
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper onClick={() => setCategory(categoryList[2])}>
                  브랜드
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper onClick={() => setCategory(categoryList[3])}>
                  키워드
                </LinkWrapper>
              </Li>
            </Ul>
          </Menu>
        </DropdownContainer>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  /* margin: 100px auto; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${palette.black};
  font-size: 1rem;
  background-color: ${palette.gray.light};
  width: 100px;
  height: 50px;
  border-radius: 0.8rem 0 0 0.8rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div<{ isVisible: boolean }>`
  background-color: ${palette.gray.light};
  position: absolute;
  top: 33px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9999;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-width: 0;
    border-bottom-color: ${palette.gray.light};
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${palette.black};
`;

CategoryDropdown.displayName = "categoryDropdown";

export default CategoryDropdown;
