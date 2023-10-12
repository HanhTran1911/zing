import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";
const Public = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="w-[240px] bg-[#231b2e] h-full">
                <SidebarLeft />
            </div>
            <div>
                <Outlet />
            </div>
            <div  className="w-[329px]">
                <SidebarRight />
            </div>
        </div>
    )
}
export default Public