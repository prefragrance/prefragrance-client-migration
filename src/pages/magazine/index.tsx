import { HDivider, LoadingSpinner, Modal, VStack } from "@common-components";
import styled from "@emotion/styled";
import { useIsLoggedIn } from "@src/common/hooks/useAuth";
import { useCommonModal } from "@src/common/hooks/useCommonModal";
import { useProductDetail } from "@src/components/product/useProductDetail";
import { useProductReview } from "@src/components/product/useProductReview";
import { fontWeight, palette } from "@src/styles/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMagazineProduct } from "@src/common/types/magazine";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import MagazineBox from "../../components/magazine/useMagazineBox";
import { useQuery } from "@tanstack/react-query";
import MagazineApi from "@src/common/api/magazine";
import ProductApi from "@src/common/api/product";
import { useMagazine } from "@src/components/magazine/useMagazine";

const client = new QueryClient();

const MagazinePage = () => {
  const { magazineProduct, isMagazineProductLoading } = useMagazine('tag','clean');
  return (
    <QueryClientProvider client={client}>
      <Body>
        <RowSection>
          {magazineProduct.map((obj) => (
              <MagazineBox key={Number(obj.id)} {...obj} />
          ))}
        </RowSection>
      </Body>
    </QueryClientProvider>
  );
};


const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: #ededed;
  gap: 1rem;
  padding: 1rem;
`;

const RowSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export default MagazinePage;
