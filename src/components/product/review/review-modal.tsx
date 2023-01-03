import {
  Button,
  HDivider,
  HStack,
  Icon,
  LoadingSpinner,
  StarInput,
  VStack,
} from "@common-components";
import styled from "@emotion/styled";
import {
  DurationType,
  IPostReviewPayload,
  IProductDetailResponse,
  SeasonType,
  StrengthType,
  TimeType,
} from "@src/common/types/product";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontWeight, palette } from "@src/styles/styles";
import { BodyText, SmallTitle } from "@src/styles/textComponents";
import Image from "next/image";
import { useState } from "react";
import { IModal } from "../../common/modal/Modal";
import { usePostReview } from "../usePostReview";
import Season from "./season";
import Time from "./time";

interface IReviewModalContent extends IModal {
  productDetail: IProductDetailResponse;
  handleModalClose?: () => void;
  id: string;
}

const ReviewModal = ({
  productDetail,
  handleModalClose,
  id,
}: IReviewModalContent) => {
  const [payload, setPayload] = useState<IPostReviewPayload>({
    id: id,
    rate: 0,
    season: SeasonType.Spring,
    time: TimeType.Day,
    duration: DurationType.One,
    strength: StrengthType.One,
    content: "",
    tags: [],
  });
  const { postReview, isPostReviewLoading } = usePostReview({ id });

  console.log(payload);

  const handleRateChange = (value: number) => {
    setPayload({ ...payload, rate: value });
  };

  const handleSeasonChange = (value: SeasonType) => {
    setPayload({ ...payload, season: value });
  };

  const handleTimeChange = (value: TimeType) => {
    setPayload({ ...payload, time: value });
  };

  const handleSubmit = () => {
    postReview(payload);
  };

  return (
    <VStack>
      <Header>
        <HeaderText>리뷰쓰기</HeaderText>
        <Icon
          color={palette.white}
          size={20}
          onClick={handleModalClose}
          asButton
        >
          close
        </Icon>
      </Header>

      {isPostReviewLoading && <LoadingSpinner />}

      <HStack align={"flex-start"} padding="15px 0px">
        <Image
          src={productDetail.thumbnail_url}
          layout={"fixed"}
          width={90}
          height={90}
        />
        <VStack alignItems={"flex-start"}>
          <SmallTitle>{productDetail.name}</SmallTitle>
          <BodyText fontWeight={fontWeight.bold}>
            {productDetail.producer}
          </BodyText>
        </VStack>
      </HStack>

      <HDivider height={"3px"} backgroundColor={palette.gray.mediumLight} />

      <InputWrapper padding="0px 30px">
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            얼만큼 취향 저격이었나요?
          </BodyText>
          <StarInput onClick={handleRateChange} size={44} />
        </VStack>
        <HDivider />
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            향이 어울리는 계절을 골라주세요!
          </BodyText>
          <Season asButton onClick={handleSeasonChange} />
        </VStack>
        <HDivider />
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            향이 어울리는 시간을 골라주세요!
          </BodyText>
          <Time asButton onClick={handleTimeChange} />
        </VStack>
        <HDivider />
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            향의 지속력은 어땠나요?
          </BodyText>
        </VStack>
        <HDivider />
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            향의 강도는 어땠나요?
          </BodyText>
        </VStack>
        <HDivider />
        <VStack padding="10px 0px">
          <BodyText fontWeight={fontWeight.bold}>
            향에 대해 느낀점을 말해주세요!
          </BodyText>
        </VStack>
        <HDivider />
      </InputWrapper>

      <Footer>
        <Button
          text={"취소"}
          padding={"10px 15px"}
          backgroundColor={palette.gray.medium}
          color={palette.white}
          onClick={handleModalClose}
        />
        <Button
          text={"등록"}
          padding={"10px 15px"}
          backgroundColor={palette.green.primary}
          color={palette.white}
          onClick={handleSubmit}
        />
      </Footer>
    </VStack>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100%;
  background-color: ${palette.green.primary};
`;

const HeaderText = styled.span`
  color: ${palette.white};
  font-size: ${calculateSize(18)};
  font-weight: ${fontWeight.bold};
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InputWrapper = styled(VStack)`
  flex: 1;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${palette.gray.background};
  padding: 10px 0px;
  column-gap: 20px;
`;

export default ReviewModal;
