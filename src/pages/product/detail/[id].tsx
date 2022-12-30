import { LoadingSpinner, VStack } from "@src/components/common";
import ProductInfo from "@src/components/product/product-info";
import { useProductDetail } from "@src/components/product/useProductDetail";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { productDetail, isProductDetailLoading } = useProductDetail(id);

  if (isProductDetailLoading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack>
      <ProductInfo productDetail={productDetail} />
    </VStack>
  );
};

export default ProductDetailPage;
