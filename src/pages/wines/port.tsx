import type { NextPage } from "next";
// 화면에 보여줄 각 컴포넌트를 갖고옵니다.
import { Error, Loading, WineCard } from "../../components";
// API로 와인 관련 데이터를 갖고오는 useWineData를 갖고옵니다.
import { useWineData } from "../../hooks/useWineData";
// 와인 데이터의 자료형을 정해놓은 Wine을 갖고옵니다.
import { Wine } from "../../types/Wine";

const PortWinePage: NextPage = () => {
    const name = "port";
    // useWineData에 "port"를 인자로 넣어주면,
    // useWineData는 API가 제공하는 port 와인 관련 데이터 fetch를 시도합니다.
    // 데이터를 성공적으로 받아오면 data에 할당하고,
    // 에러가 나면 error에 에러내용을 할당합니다.
    const { data, error } = useWineData(name);

    // error가 났다면 Error 컴포넌트를 반환합니다.
    // Error가 무엇을 반환하는지는 components 폴더의 Error.tsx에서 확인할 수 있습니다.
    if (error) return <Error />;
    // data를 아직 받아오지 못했다면 Loading 컴포넌트를 반환합니다.
    // Loading이 무엇을 반환하는지는 components 폴더의 Loading.tsx에서 확인할 수 있습니다.
    if (!data) return <Loading />;
    // error도 안 났고 data도 받아왔다면 아래의 코드를 반환합니다.
    return (
        <div>
            <h1>Port Wines</h1>
            <main>
                {/* useWineData를 통해 받아온 data를 map을 통해 하나하나 
                WineCard에 넘겨줍니다. 인자는 wineData라고 임의로 정했습니다.*/}
                {data.map((wineData: Wine) => {
                    return (
                        // WineCard에서 무슨 일이 일어나는지 궁금하다면
                        // components 폴더의 WineCard로 가보세요.
                        <WineCard
                            key={`port-wine-list=${wineData.id}`}
                            wineData={wineData}
                        />
                    );
                })}
            </main>
        </div>
    );
};

export default PortWinePage;
