import React from "react"
import CofinHomeLogin from "../components/CofinHomeLogin";
import CofinHomeMain from "../components/CofinHomeMain"
import CofinHomeMenu from "../components/CofinHomeMenu"

const CofinHomeMainpage = () => {


return(<>
    <div>
        <CofinHomeLogin></CofinHomeLogin>
    </div>
    <div>
        <CofinHomeMenu></CofinHomeMenu>
    </div>
    <div>
        <CofinHomeMain></CofinHomeMain>
    </div>
   
</>); 
};

export default CofinHomeMainpage


