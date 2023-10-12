import React from "react";
import logo from '../img/logo-dark.svg'
import { sidebarMenu } from "../ultils/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle ='text-slate-400 flex py-2 items-center font-bold gap-[12px] text-[13px]'
const activeStyle ='text-white flex py-2 items-center font-bold gap-[12px] text-[13px] '
const SidebarLeft = () => {
    return (
        <div className="pl-8 pt-6">
            <div className="logo h-12">
                <img src={logo} alt="Mô tả ảnh" className="w-[120px] h-[40px]" />
            </div>
            {/* sidebar */}
            <div className="">
                {sidebarMenu.map(item =>
                (
                    <NavLink to={item.path} className={({isActive}) => isActive ? activeStyle : notActiveStyle} >
                       {item.icons}
                       <span >{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
export default SidebarLeft