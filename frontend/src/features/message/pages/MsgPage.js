import MsgLayOut from 'features/message/components/MsgLayOut'
import React from 'react'
import MsgTable from 'features/message/components/MsgTable'

export default function MsgPage(){
    return(
        <MsgLayOut>
            <div>       
                
                <text align="center"><h1><b>재난문자</b></h1></text>
                {/* searchbox on top */}
                <MsgTable/>
                {/* number of rows/info + page arrowss */}
                
            </div>
        </MsgLayOut>
    )
}