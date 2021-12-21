import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";

const StoutBeerPage: NextPage = () => {
    const name = "stouts";
    const { data, error } = useBeerData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>Stout Beers</h1>
            <main>
                {data.map((beerData: Beer) => {
                    return (
                        <BeerCard
                            key={`stout-beer-line=${beerData.id}`}
                            beerData={beerData}
                        />
                    );
                })}
            </main>
        </div>
    );
};

export default StoutBeerPage;
