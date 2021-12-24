import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const SparklingWinePage: NextPage = () => {
    const name = "sparkling";

    return (
        <div>
            <WineContainer name={name} />
        </div>
    );
};

export default SparklingWinePage;
