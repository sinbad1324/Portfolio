
import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import { Line } from "../line";

import { getCurrentLang } from '../../data/getCurrentLang'
import { useLangContext } from '../../hooks/useLangContext'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SkillBtns } from "./skillsBtns";
import reactLogo from "../../assets/react.svg"
import jsLogo from "../../assets/js.svg"
import nodejsLogo from "../../assets/nodeJS.svg"
import nuxtJSLogo from "../../assets/nuxtJS.svg"
import sassLogo from "../../assets/sass.svg"
import tailwindcssLogo from "../../assets/tailwindcss.svg"

import data from "../../assets/data.svg"
import lua from "../../assets/lua.svg"
import roblox from "../../assets/roblox.svg"
import UI from "../../assets/UI.svg"
import vfx from "../../assets/vfx.svg"
import blender from "../../assets/blender.svg"



const navEN = en.Header.nav;

export const Skills = () => {
        const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);
    const NavList = currentLang.Header.nav;
    const params = new URLSearchParams(window.location.search).get("settings")
    let mySkills
    if (params && params.toLowerCase() == "roblox") {
        mySkills = [{ title: "Full stacks", logo: roblox }, { title: "Server/Data", logo: data }, { title: "UI/UX", logo: UI }, { title: "vfx", logo: vfx }, { title: "Client/LuaU", logo: lua }, { title: "3D Blender", logo: blender }]
    } else {
        mySkills = [{ title: "React", logo: reactLogo }, { title: "JavaScript", logo: jsLogo }, { title: "Tailwind", logo: tailwindcssLogo }, { title: "Sass/Scss", logo: sassLogo }, { title: "NodeJS", logo: nodejsLogo }, { title: "NuxtJS", logo: nuxtJSLogo }]
    }

    return (
        <div className=" relative bg-transparent w-full h-auto   row-start-3 row-end-4 flex  justify-between  items-center flex-col ">
            <div className="mb-11 "></div>
            <div className="w-full pl-5 h-fit flex flex-row justify-center items-center md:justify-start">
                <div id={navEN[2]}
                    className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {NavList[2]}.
                </div>
            </div>
            {/* grid grid-cols-2 grid-rows-2 bg-transparent justify-center items-center place-content-center */}
            <div className="m-4 md:w-[80%] max-w-[1200px] w-[100%] h-[630px] p-14 flex flex-row flex-wrap justify-center items-center gap-7">
                {/* grid grid-cols-6 grid-rows-2 */}
                {
                    mySkills.map((item, i) => {
                        return (
                            ////+ "row-start-" + (index + 1) + "col-start-" + (index + 2)
                            <SkillBtns
                                key={i}
                                title={item.title}
                                icon={item.logo}
                            />
                        )
                    })
                }

            </div>
            <Line />
        </div >
    )
}