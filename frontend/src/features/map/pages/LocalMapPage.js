import { LayOut } from "features/common";
import React from "react";

import { LocalMap, LocalMapInfo, Options } from "..";

const LocalMapPage = () => {

    return (<>
    <LayOut>
        <div>
            <Options/>
            <LocalMap/>
            <LocalMapInfo/>
        </div>
    </LayOut>
    </>);
};

export default LocalMapPage;