import React from "react";
import { MiniDrawer } from "../components/SideBar";

const Layout = ({ children }) => {
    return (
        <div>
            <MiniDrawer />
            {children}
        </div>
    )
}

export { Layout }