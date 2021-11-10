import { LayOut } from "features/common";
import React from "react";

import { Geolocation, LocalMap, LocalMapInfo, Options } from "..";

const LocalMapPage = () => {

    return (<>
    <LayOut>
        <div>
            <Options/>
            <LocalMap/>
            <LocalMapInfo/>
            {/* <Geolocation/> */}
        </div>
    </LayOut>
    </>);
};

export default LocalMapPage;