import {
  Button,
  HDivider,
  HStack,
  Icon,
  Stars,
  VBar,
  VStack,
} from "@common-components";
import styled from "@emotion/styled";
import { RouterUrl } from "@src/common/constants/path";
import { checkLogin } from "@src/common/store/user";
import {
  IProductDetailResponse,
  IProductReviewResponse,
} from "@src/common/types/product";
import { DateFormatTypes, formatDate } from "@src/common/utils/formatDate";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import { BigTitle, BodyText, SmallTitle } from "@src/styles/textComponents";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Avatar from "../../common/avatar/Avatar";
import { IconTheme } from "../../common/icon/Icon";
import { GraphLabel } from "../product-rate";
import { usePostReviewLike } from "../usePostReviewLike";

const filteringButtons: IFilteringItem[] = [
  { label: "5점", value: 5 },
  { label: "4점", value: 4 },
  { label: "3점", value: 3 },
  { label: "2점", value: 2 },
  { label: "1점", value: 1 },
];

interface IProductReview {
  productDetail: IProductDetailResponse;
  productReview: IProductReviewResponse[];
  handleModalOpen: () => void;
}

interface IReview {
  productReview: IProductReviewResponse[];
  openReviewModal: () => void;
  handleReviewLike: (id: number) => void;
  liked: boolean;
}

interface IReviewItem extends Pick<IReview, "handleReviewLike" | "liked"> {
  review: IProductReviewResponse;
}

interface IOrderingButton {
  selected: boolean;
}

interface IFilteringItem {
  label: string;
  value: number;
}

const ProductReview = ({
  productDetail,
  productReview,
  handleModalOpen,
}: IProductReview) => {
  const router = useRouter();
  const isLoggedIn = useRecoilValue(checkLogin);
  const [liked, setLiked] = useState<boolean>(false);
  const { postReviewLike } = usePostReviewLike({
    id: productDetail.id,
    onSuccess: () => {
      setLiked((prev) => !prev);
    },
  });

  // TODO : need to add ordering state
  // const [ordering, setOrdering] = useState<>()

  const openReviewModal = () => {
    if (isLoggedIn) {
      handleModalOpen();
      return;
    }
    alert("로그인이 필요한 기능입니다.");
    router.replace(RouterUrl.Login);
  };

  const handleReviewLike = (review_id: number) => {
    if (isLoggedIn) {
      postReviewLike({ id: productDetail.id, review_id: review_id });
      return;
    }
    alert("로그인이 필요한 기능입니다.");
    router.replace(RouterUrl.Login);
  };

  return (
    <ReviewContainer>
      <Statistics productDetail={productDetail} />
      <HDivider />
      <Review
        productReview={productReview}
        openReviewModal={openReviewModal}
        handleReviewLike={handleReviewLike}
        liked={liked}
      />
    </ReviewContainer>
  );
};

const Statistics = ({
  productDetail,
}: Pick<IProductReview, "productDetail">) => {
  return (
    <StatisticsWrapper>
      <SmallTitle>리뷰</SmallTitle>
      <HStack gap={60}>
        <VStack gap={"sm"}>
          <BodyText fontWeight={fontWeight.bold}>
            총 {productDetail.rate_sum || 0}건
          </BodyText>
          <HStack gap={4} alignItems={"baseline"}>
            <BigTitle>{productDetail.rate.toFixed(1)}</BigTitle>
            <SmallTitle>점</SmallTitle>
          </HStack>
          <Stars rate={productDetail.rate} size={30} />
        </VStack>
        <HStack gap={"sm"}>
          {/* TODO : mapping this later */}
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              52%
            </GraphLabel>
            <VBar value={52} />
            <GraphLabel width={40} textAlign={"center"}>
              5점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              24%
            </GraphLabel>
            <VBar value={24} />
            <GraphLabel width={40} textAlign={"center"}>
              4점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              8%
            </GraphLabel>
            <VBar value={8} />
            <GraphLabel width={40} textAlign={"center"}>
              3점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              2%
            </GraphLabel>
            <VBar value={2} />
            <GraphLabel width={40} textAlign={"center"}>
              2점
            </GraphLabel>
          </VStack>
          <VStack gap={"xs"}>
            <GraphLabel width={40} textAlign={"center"}>
              14%
            </GraphLabel>
            <VBar value={14} />
            <GraphLabel width={40} textAlign={"center"}>
              1점
            </GraphLabel>
          </VStack>
        </HStack>
      </HStack>
    </StatisticsWrapper>
  );
};

const Review = ({
  productReview,
  openReviewModal,
  handleReviewLike,
  liked,
}: IReview) => {
  return (
    <ReviewWrapper>
      <HStack align={"space-between"}>
        <HStack gap={50}>
          <HStack>
            <OrderingButton selected>추천순</OrderingButton>
            <BodyText>|</BodyText>
            <OrderingButton selected={false}>최신순</OrderingButton>
          </HStack>
          <HStack gap={20}>
            {filteringButtons.map((button) => (
              <FilteringButton key={button.value}>
                {button.label}
              </FilteringButton>
            ))}
          </HStack>
        </HStack>
        <Button
          text={"리뷰 쓰기"}
          width={"200px"}
          padding={"10px 0px"}
          onClick={openReviewModal}
        />
      </HStack>
      <ReviewListWrapper>
        {productReview.length === 0 && (
          <VStack align={"center"} padding="80px 0px">
            <BodyText>리뷰가 없습니다.</BodyText>
          </VStack>
        )}
        {productReview.length > 0 &&
          productReview.map((review, index) => (
            <div key={review.id}>
              <ReviewItem
                review={review}
                handleReviewLike={handleReviewLike}
                liked={liked}
              />
              {index < productReview.length - 1 && (
                <HDivider
                  backgroundColor={palette.gray.mediumLight}
                  height={"1.5px"}
                />
              )}
            </div>
          ))}
      </ReviewListWrapper>
    </ReviewWrapper>
  );
};

const ReviewItem = ({ review, handleReviewLike, liked }: IReviewItem) => {
  return (
    <ReviewItemWrapper>
      <VStack>
        <Avatar url={review.profile_img} />
        <BodyText fontWeight={fontWeight.bold}>
          {review.nickname || "아이디"}
        </BodyText>
      </VStack>
      <VStack alignItems={"flex-start"} gap={6}>
        <DateSpan>
          {formatDate(review.pub_date, DateFormatTypes.DateOnly)}
        </DateSpan>
        <Content>{review.content}</Content>
      </VStack>
      <VStack>
        <Icon
          size={40}
          asButton
          theme={IconTheme.Filled}
          color={liked ? palette.gray.medium : palette.gray.mediumLight}
          onClick={() => handleReviewLike(review.id)}
        >
          thumb_up
        </Icon>
        <BodyText>{review.feedback_cnt}</BodyText>
      </VStack>
    </ReviewItemWrapper>
  );
};

const ReviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 900px;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  row-gap: 30px;
`;

const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;

const ReviewItemWrapper = styled.div`
  display: flex;
  padding: 20px 15px;
  justify-content: space-evenly;
`;

const OrderingButton = styled.button<IOrderingButton>`
  font-weight: ${({ selected }) =>
    selected ? fontWeight.bold : fontWeight.regular};
  font-size: ${fontSize.body};
`;

const FilteringButton = styled.button`
  background-color: ${palette.gray.medium};
  color: ${palette.white};
  font-weight: ${fontWeight.semiBold};
  text-align: center;
  padding: 5px 20px;
  border-radius: 5px;
`;

const DateSpan = styled.span`
  font-size: ${fontSize.paragraph};
  color: ${palette.gray.medium};
`;

const Content = styled.p`
  width: 600px;
  word-break: break-all;
  font-size: ${fontSize.paragraph};
`;

export default ProductReview;
