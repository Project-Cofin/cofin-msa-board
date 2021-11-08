import React from 'react'
import styled from 'styled-components'

const WriteTest = () => {<>
    <div>
        <body>
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed"
                            data-toggle="collapse" data-target="bs-example-navbar-collapse-1"
                            aria-expaned="false">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="main.js">js 게시판</a>
                </div>
                <div class= "collapse navbar-collapse"
                    id="#bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="main.js">메인</a></li>
                        <li class="active"><a href="bbs.jp"></a></li>
                    </ul>
                    
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown"><a href="#" class="dropdown-toggle"
                            data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">접속하기<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="login.js"></a></li>
                                <li><a href="login.js"></a></li>
                            </ul>   
                        </li>
                    </ul>
                    <ul class= "nav navbar-nav navbar-right">
                        <li class="dropdown"><a href="#" class="dropdown-toggle"
                            data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">회원관리<span class="caret"></span></a>
                            <ul class="dropdwon-menu">
                                <li><a href="logoutAction.js">로그아웃</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                <form method="post" action="writeAction.js">
                    <table class="table table-striped" style="text-align:center; border:1px solid #dddddd">
                        <thead>
                            <tr>
                                <th colspan="2" style="background-color: #eeeeee; text-align: center;">게시판 글쓰기 양식</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </form>
                </div>
            </div>
        </body>

    </div>


</>}

export default WriteTest