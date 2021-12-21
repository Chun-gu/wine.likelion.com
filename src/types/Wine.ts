// Wine의 자료형은 이래야한다!를 정하는 놈입니다.
export interface Wine {
    id: number;
    image: string;
    location: string;
    rating: {
        average: string;
        reviews: string;
    };
    wine: string;
    winery: string;
}
