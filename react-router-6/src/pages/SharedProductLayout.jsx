import React from 'react'
import {Outlet} from "react-router-dom";

export const SharedProductLayout = () => {
    return (
        <>
            <h2>products</h2>
            <Outlet/>
        </>
    )
}
