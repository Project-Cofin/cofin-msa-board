import React from "react"
import styled from "styled-components"
import { LayOut } from "features/common";

const QnABoard = () => (
    <LayOut>
        <div>
            <table border="1" width="1200" align="center">
                <Free>
                    <td colSpan="5" align="center">QnA 게시판</td>
                </Free>
                <tr align='center'>
                    <Ctg>분류</Ctg>
                    <Title width="900">제목</Title>
                    <Writer>글쓴이</Writer>
                    <Date>게시일</Date>
                </tr>
                <tr height="750" align="center">
                    <Main colSpan="5">
                        글이 없습니다.
                    </Main>
                </tr>
                <tr>
                    <td colSpan="5" align="center"></td>
                </tr>
                <tr>
                    <td colSpan="1" align="left">
                        <input type="button" align="left" value="신고하기"></input>
                    </td>
                    <td colspan="4" align='right'>                    
                        <input type="button" onClick="location.href='http://localhost:3000/write'" value="글쓰기"/>
                        
                        <input type="button" value="수정"/>
                        <input type="button" value="삭제"/>
                    </td>
                </tr>
            </table>
        </div>
    </LayOut>
)

export default QnABoard


const Free = styled.tr`
    
`

const Ctg = styled.td`
    
`

const Title = styled.td`
    
`

const Writer = styled.td`
   
`

const Date = styled.td`
    
`

const Main = styled.td`
    
`