import styled from "@emotion/styled";
import { IMagazineProduct } from "@src/common/types/magazine";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

// import { useQuery } from "@tanstack/react-query";

export interface IMagazineProductData {
  movieData: {
    magazineProductArr: IMagazineProduct[];
    productName: string;
  };
}

const client = new QueryClient();

const RAW_DATA = [
  {
    id: 1,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    id: 2,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    id: 3,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    id: 4,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    id: 5,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
  {
    id: 6,
    thumbnail_url: "/public/assets/images/취향로고.png",
    producer: "ADOPT",
    name: "어돕트 프랑수 향수",

    content:
      "제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요",
    nickname: "mindol0320",
    pub_date: "2022.08.19",
  },
];

const MagazineDetail = () => {
  // const [mIndex, setMIndex] = useState(0);
  // const IncreaseMIndex = () => setMIndex((prev: number)=>(prev+1));
  // // const navigate = useNavigate();
  // // const onBoxClicked = (id: number) => {
  // //   navigate(`/product/${RAW_DATA.id}`);
  // // };

  return (
    <QueryClientProvider client={client}>
      <Theme>
        <Title>상큼한 향 베스트 20</Title>
      </Theme>
      <SubTitle>상큼한 취향을 가진 당신에게 추천합니다</SubTitle>
      <Body>
        <RowSection>
          {RAW_DATA.slice().map((obj) => (
            <div key={obj.id}></div>
            // type error : need to fix
            // <MagazineBox key={obj.id} {...obj} />
          ))}
        </RowSection>
      </Body>
    </QueryClientProvider>
  );
};

const Theme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  padding: 5rem;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
`;
const SubTitle = styled.div`
  font-size: 1rem;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
`;

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

export default MagazineDetail;
