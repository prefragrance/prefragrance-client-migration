import { LoadingSpinner, VStack } from "@src/components/common";
import { useProductDetail } from "@src/components/product/useProductDetail";
import { GetServerSideProps } from "next";
import React from "react";

interface IProductDetailPage {
  id: string;
}

const ProductDetailPage = ({ id }: IProductDetailPage) => {
  const { productDetail, isProductDetailLoading } = useProductDetail(id);

  if (isProductDetailLoading) {
    return <LoadingSpinner />;
  }

  return <VStack>{productDetail?.name}</VStack>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.query,
    },
  };
};

export default ProductDetailPage;
