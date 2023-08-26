import React, { useState } from "react" 
import { Outlet } from "react-router-dom";
import "../Components/Tabs.css"
 function RootLayout(){
return(
    <>
    <main>
        <Outlet></Outlet>
    </main>
    </>
)
}
export default RootLayout;