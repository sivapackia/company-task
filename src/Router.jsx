import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Component/Home";



export const Router=()=>{
    return(
        <>
   <BrowserRouter>
   <Routes>
    <Route path="/company-task" element={<Home/>}></Route>
   </Routes>
    </BrowserRouter>
        </>
    )
}