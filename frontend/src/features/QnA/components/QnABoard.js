import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { LayOut } from "features/common";
import QnATable from "./QnATable";
import QnATableColumn from "./QnATableColumn";
import QnATableRow from "./QnATableRow";


const QnABoard = props => {
    const [ dataList, setDataList ] = useState([])

    useEffect(() => {

    }, [])
    return(
    <LayOut>
        <body>
            <div class="ui middle aligned center aligned grid">
                <h2 class="ui teal image header" align="center">
                    QnA 게시판
                </h2>
                <div class="ui large form">
                    <div class="ui stacked segment">
                        
                        <QnATable headersName={['번호', '제목', '작성자', '작성일', '조회수']}>

                            <QnATableRow>
                                <QnATableColumn>1</QnATableColumn>
                                <QnATableColumn>첫번째 게시글</QnATableColumn>
                                <QnATableColumn>ss지존준넥서스ss</QnATableColumn>
                                <QnATableColumn>2020-01-01</QnATableColumn>
                                <QnATableColumn>12</QnATableColumn>
                            </QnATableRow>
                            <QnATableRow>
                                <QnATableColumn>2</QnATableColumn>
                                <QnATableColumn>두번째 게시글</QnATableColumn>
                                <QnATableColumn>채강$$준넥서스</QnATableColumn>
                                <QnATableColumn>2020-04-16</QnATableColumn>
                                <QnATableColumn>5</QnATableColumn>
                            </QnATableRow>
                            <QnATableRow>
                                <QnATableColumn>3</QnATableColumn>
                                <QnATableColumn>세번째 게시글</QnATableColumn>
                                <QnATableColumn>허접♥등신♥</QnATableColumn>
                                <QnATableColumn>2020-09-07</QnATableColumn>
                                <QnATableColumn>66</QnATableColumn>
                            </QnATableRow>
                            <QnATableRow>
                                <QnATableColumn>4</QnATableColumn>
                                <QnATableColumn>네번째 게시글</QnATableColumn>
                                <QnATableColumn>닉넴짓기귀찮다</QnATableColumn>
                                <QnATableColumn>2021-07-29</QnATableColumn>
                                <QnATableColumn>43</QnATableColumn>
                            </QnATableRow>

                        </QnATable>
                        <a href="/write"><button class="ui fluid large teal submit button">게시글 작성하기</button></a>
                    </div>
                    
                </div>
            </div>
            
            
        </body><br/>
        
    </LayOut>
    )
}

export default QnABoard


const P = styled.p`
    text-align: right;
     
`
