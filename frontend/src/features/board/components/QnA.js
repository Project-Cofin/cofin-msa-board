import React from "react"
import styled from "styled-components"

const QnA = () =>(
    <div>
        <table border="1" width='1200' align='center'>
            <Free>
                <td colSpan="5" align='center'>자유게시판</td>
            </Free>
            <tr align='center'>
                <Ctg>분류</Ctg>
                <Title width="900">제목</Title>
                <Writer>글쓴이</Writer>
                <Date>날짜</Date>
            </tr>
            <tr height="750" align='center'>
                <Main colSpan="5">
                    글이 없습니다.
                </Main>
            </tr>
            <tr>
                <td colSpan="5" align='center'>
                    1 2 3 4 5 6 7 8 9 10
                </td>
            </tr>
            <tr>
                <td colSpan="1" align='left'>
                    <input type="button" align='left' value="신고하기"></input>
                </td>
                <td colspan="4" align='right'>                    
                    <input type="button" onClick="Write('/Write')" value="글쓰기"/>
                    
                    <input type="button" value="수정"/>
                    <input type="button" value="삭제"/>
                </td>
            </tr>
        </table>
        
    </div>
)            


export default QnA



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