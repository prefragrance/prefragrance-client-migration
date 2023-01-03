import { HDivider, LoadingSpinner, Modal, VStack } from "@common-components";
import styled from "@emotion/styled";
import { useCommonModal } from "@src/common/hooks/useCommonModal";
import ProductInfo from "@src/components/product/product-info";
import ProductRate from "@src/components/product/product-rate";
import ProductReview from "@src/components/product/review/product-review";
import ReviewModal from "@src/components/product/review/review-modal";
import { useProductDetail } from "@src/components/product/useProductDetail";
import { useProductReview } from "@src/components/product/useProductReview";
import { fontWeight, palette } from "@src/styles/styles";
import { useRouter } from "next/router";
import { useState } from "react";

const detailTabs: string[] = ["제품상세", "리뷰"];

interface ITabItem {
  active: boolean;
}

interface ITab {
  activeTab: string;
  changeTab: (tab: string) => void;
}

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { productDetail, isProductDetailLoading } = useProductDetail(id);
  const { productReview, isProductReviewLoading } = useProductReview(id);
  const { isModalOpen, handleModalOpen, handleModalClose } = useCommonModal();
  const [activeTab, setActiveTab] = useState<string>(detailTabs[0]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  if (!productDetail || isProductDetailLoading || isProductReviewLoading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack gap={20}>
      <ProductInfo
        productDetail={productDetail}
        handleModalOpen={handleModalOpen}
      />
      <InfoContainer>
        <Tab activeTab={activeTab} changeTab={changeTab} />
        {activeTab === detailTabs[0] && (
          <VStack gap={"none"}>
            <ProductRate productDetail={productDetail} />
            <HDivider />
            <ProductReview
              productDetail={productDetail}
              productReview={productReview}
              handleModalOpen={handleModalOpen}
            />
          </VStack>
        )}
        {activeTab === detailTabs[1] && (
          <ProductReview
            productDetail={productDetail}
            productReview={productReview}
            handleModalOpen={handleModalOpen}
          />
        )}
      </InfoContainer>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onInteractOutside={handleModalClose}
          width={600}
        >
          <ReviewModal
            productDetail={productDetail}
            handleModalClose={handleModalClose}
            id={id as string}
          />
        </Modal>
      )}
    </VStack>
  );
};

const Tab = ({ activeTab, changeTab }: ITab) => {
  return (
    <TabContainer>
      {detailTabs.map((tab) => (
        <TabItem
          key={tab}
          active={activeTab === tab}
          onClick={() => changeTab(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </TabContainer>
  );
};

const TabItem = styled.button<ITabItem>`
  width: 540px;
  padding: 10px;
  background: ${({ active }) =>
    active ? palette.white : palette.gray.background};
  outline: 0;
  border-top: ${({ active }) =>
    active ? `1px solid ${palette.gray.dark}` : "none"};
  border-left: ${({ active }) =>
    active ? `1px solid ${palette.gray.dark}` : "none"};
  border-right: ${({ active }) =>
    active ? `1px solid ${palette.gray.dark}` : "none"};
  border-bottom: ${({ active }) =>
    !active ? `1px solid ${palette.gray.dark}` : "none"};
  font-weight: ${({ active }) => active && fontWeight.bold};
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export default ProductDetailPage;
