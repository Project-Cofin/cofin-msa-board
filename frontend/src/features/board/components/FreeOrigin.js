import React from "react"
import styled from "styled-components"

const FreeBoard = () =>(<>
    <div>
        <ul>       
            <li type='none' align='right'>
                <label for="user-id"/>아이디
                <input type="text" id="user-id"/>
         
                <label for="pwd1"/> 비밀번호 
                <input type="password" id="pwd"/>&nbsp;
                
                <input type="submit" value="로그인"/>&nbsp;
            </li>
        </ul>
        <Body>
            <Ul id='navi' type='none'>
                <Li class='group'>
                    <LogDiv class='title'><label>로그인</label></LogDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">로그인</A></Lisub>
                        <Lisub><A href="#">회원가입</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <MapDiv class="title">지도</MapDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">국내지도</A></Lisub>
                        <Lisub><A href="#">세계지도</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <NewsDiv class="title">뉴스</NewsDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">코로나 국내 현황</A></Lisub>
                        <Lisub><A href="#">코로나 해외 현황</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <VacDiv class="title">백신</VacDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">백신 종류</A></Lisub>
                        <Lisub><A href="#">바이러스 변이 종류</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <BrdDiv class="title">게시판</BrdDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">자유게시판</A></Lisub>
                        <Lisub><A href="#">신고게시판</A></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <OpDiv class="title">설정</OpDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><A href="#">알림</A></Lisub>
                        <Lisub><A href="#">탈퇴</A></Lisub>
                        <Lisub><A href="#">마이페이지</A></Lisub>
                    </Ultyp>
                </Li>
            </Ul>
        </Body>
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
</>)            


export default FreeBoard



const Free = styled.tr`
    color: #fff;
    background-color: SteelBlue;
`

const Ctg = styled.td`
    color: #fff;
    background-color: LightSkyBlue;
`

const Title = styled.td`
    color: #fff;
    background-color: LightSkyBlue;
`

const Writer = styled.td`
    color: #fff;
    background-color: LightSkyBlue;
`

const Date = styled.td`
    color: #fff;
    background-color: LightBlue;
`

const Main = styled.td`
    background-color: LightCyan;
`



const LogDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: LightSkyBlue;
`
const MapDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: SkyBlue;
`
const VacDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: RoyalBlue;
`
const NewsDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: CornflowerBlue;
`
const BrdDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: DodgerBlue;
`
const OpDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: blue;
`

const Body = styled.div`
    float: right;
    margin:20px auto;
    padding: 0;
    font-family:"맑은 고딕";
    font-size:0.9em;
`

const Ul = styled.ul`
    width: 200px;
    text-indent: 10px;
`

const Ultyp = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`

const Li = styled.li `
    margin=bottom:3px
`

const Lisub = styled.li`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    background-color: #f4f4f4;
`

const A = styled.a`
    display: block;
    width: 100%;
    height:100%;
    text-decoration:none;
    color:#000;
`