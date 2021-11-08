import React from "react"
import { Route, Navigate, Routes } from 'react-router-dom'

import { CofinHomepage } from "features/home/index"
import { QnApage, Writepage } from "features/board/index"
import { NavigationCofin } from 'features/common/index'



const App = () => (
  <>

  <NavigationCofin/>
  <Routes>
    <Route exact path='/' component= { CofinHomepage }/>
    <Navigate from='/home' to= { '/' }/>
    <Route exact path='/Q-n-A' component={ QnApage }/>
    <Route exact path='/write' component= { Writepage}/>
  </Routes>
  
    
</>)


export default App;


  /*
  
  CourseRegister,
         OnlineProfile,
         Join, 
         Login, 
         SchoolStatus, 
         Navigation, 

    <Route exact path='/' component= { HomePage }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/course-register' component= { CourseRegister }/>
    <Route exact path='/online-profile' component= { OnlineProfile }/>
    <Route exact path='/login' component= { Login }/>
    <Route exact path='/join' component= { Join }/>
    <Route exact path='/school-status' component= { SchoolStatus }/>

    
    <Route exact path='/basic' component= { Basic }/>

    <Route exact path='/HomePage' component = { HomePage}/>



    <Redirect from='/basic' to= { '/' }/>
    <Route exact path='/arrow-function' component= { ArrowFunction }/>
    <Route exact path='/arguments' component= { Arguments }/>
    <Route exact path='/template-literal' component= { TemplateLiteral }/>
    <Route exact path='/literal-method' component= { LiteralMethod }/>
    <Route exact path='/destructuring' component= { Destructuring }/>
    <Route exact path='/loop' component= { Loop }/>
    <Route exact path='/array-method' component= { ArrayMethod }/>
    <Route exact path='/spread-operator-rest-parameter' component= { SpreadOperatorRestParameter }/>
    <Route exact path='/object-literal' component= { ObjectLiteral }/>
    <Route exact path='/symbol' component= { Symbol }/>
    <Route exact path='/class' component= { Class }/>
    <Route exact path='/promise' component= { Promise }/>
    <Route exact path='/generator' component= { Generator }/>
    <Route exact path='/proxy' component= { Proxy }/>
    <Route exact path='/set-map' component= { SetMap }/>
    <Route exact path='/array' component= { Array }/>
    <Route exact path='/es2017' component= { Es2017 }/>
    <Route exact path='/async-await' component= { AsyncAwait }/>
    <Route exact path='/es2018' component= { Es2018 }/>
    <Route exact path='/es2019' component= { Es2019 }/>
    <Route exact path='/es2020' component= { Es2020 }/>
    <Route exact path='/typescript' component= { TypeScript }/>
    */
    