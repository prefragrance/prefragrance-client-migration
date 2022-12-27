import React from "react";
import styled from "@emotion/styled";
import { palette } from "../../styles/styles";
import { IMagazineProduct } from '@src/common/types/magazine';

const MagazineBox = ({
  id,
  name,
  producer,
  thumbnail_url,
}: IMagazineProduct) => {
  return (
    <ReviewSection>
      <Img src={thumbnail_url} />
      <InfoSection>
        <Name>
          {id}. {name}
        </Name>
        <Rate>별점</Rate>
      </InfoSection>
      <InfoSection>
        <Producer>{producer}</Producer>
      </InfoSection>
      <ProfileImg src={thumbnail_url} />
      <Content>내용 ~.~</Content>
      <InfoSection>
        <ToDetail>제품 자세히 보기</ToDetail>
      </InfoSection>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  height: 30rem;
  width: 80rem;
  background: ${palette.white};
  margin: auto;
  border-bottom: 0.5px solid;
`;

const Img = styled.img`
  border: 1px solid ${palette.black};
  width: 20rem;
  height: 20rem;
  float: left;
  margin: 4rem;
`;

const ProfileImg = styled.img`
  border: 1px solid ${palette.black};
  width: 5rem;
  height: 5rem;
  float: left;
  border-radius: 100rem;
  margin-right: 1rem;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 0rem;
`;

const Content = styled.div`
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
`;

const Producer = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-left: 2.5rem;
`;

const Rate = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 5rem;
  margin-left: 2.5rem;
  align-items: center;
  justify-content: center;
  color: ${palette.green.rightLogo};
`;

const ToDetail = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-left: 30rem;
`;

export default MagazineBox;
