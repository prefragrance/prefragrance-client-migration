import styled from "@emotion/styled";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import MagazineBox from "../../../components/magazine/useMagazineBox";
import { useMagazine } from "@src/components/magazine/useMagazine";
import { useRouter } from "next/router";

const client = new QueryClient();

const MagazinePage = () => {
  const router = useRouter();
  const { query } = router.query;
  const { magazineProduct, isMagazineProductLoading } = useMagazine(
    "tag",
    String(query)
  );
  console.log(isMagazineProductLoading);
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
