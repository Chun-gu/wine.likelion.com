import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const RedWinePage: NextPage = () => {
    const name = "reds";

    return (
        <div>
            <WineContainer name={name} />
        </div>
    );
};

export default RedWinePage;
