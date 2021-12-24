// 데이터를 가져오는데 사용되는 도구인 useSWR을 갖고옵니다.
import useSWR from "swr";
// axios를 이용해 api에서 데이터를 받아오는 fetcher를 갖고옵니다.
import { fetcher } from "../utils/fetcher";
// constants 폴더에서 url을 할당해놓은 상수 WINE_API_ENDPOINT을 갖고 옵니다.
import { WINE_API_ENDPOINT } from "../constants";

// useWineData는 "자료형이 string이어야 하는 path"를 인자로 받아서
// WINE_API_ENDPOINT과 함께 useSWR에 넣어준 뒤,
// useSWR이 fetcher를 통해 갖고온 데이터를 반환합니다.
export const useWineData = (path: string) => {
    return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
};
