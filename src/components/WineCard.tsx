// 와인의 자료형은 정해놓은 Wine을 갖고옵니다.
import { Wine } from "../types/Wine";

// wineData는 Wine이 정해놓은 자료형을 따라야합니다.
interface WineProps {
    wineData: Wine;
}

// WineCard는 port.tsx가 넘겨준 인자, 
// 즉 "WineProps가 정해준 자료형을 따라야하는 wineData"를 받아서 
// HTML 태그를 반환하는 함수입니다.
export const WineCard = ({ wineData }: WineProps) => {
    // wineData에서 wine과 winery에 해당하는 데이터만 뽑아냅니다.
    const { wine, winery } = wineData;

    // WineCard는 위에서 뽑아낸 wine과 winery를 아래 HTML 태그에 넣은 다음,
    // port.tsx의 WineCard가 있는 자리에 HTML 태그를 반환합니다.
    return (
        <div>
            <h2>{wine}</h2>
            <p>{winery}</p>
        </div>
    );
};
