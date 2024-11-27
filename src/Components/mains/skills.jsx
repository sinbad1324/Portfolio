
import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import { Line } from "../line";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SkillBtns } from "./skillsBtns";
import reactLogo from "../../assets/react.svg"
import jsLogo from "../../assets/js.svg"
import nodejsLogo from "../../assets/nodeJS.svg"
import nuxtJSLogo from "../../assets/nuxtJS.svg"
import sassLogo from "../../assets/sass.svg"
import tailwindcssLogo from "../../assets/tailwindcss.svg"


const navEN = en.Header.nav;

export const Skills = () => {

    const mySkills = [{ title: "React", logo: reactLogo }, { title: "JavaScript", logo: jsLogo }, { title: "Tailwind", logo: tailwindcssLogo }, { title: "Sass/Scss", logo: sassLogo }, { title: "NodeJS", logo: nodejsLogo }, { title: "NuxtJS", logo: nuxtJSLogo }]

    return (
        <div className=" relative bg-transparent w-full h-fit   row-start-3 row-end-4 flex  justify-between  items-center flex-col ">
            <div className="mb-11 "></div>
            <div className="w-full pl-5 h-fit flex flex-row justify-center items-center md:justify-start">
                <div
                    className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {navEN[2]}.
                </div>
            </div>

            <div className="m-4 w-[60%] h-[630px] grid grid-cols-2 grid-rows-2 bg-transparent justify-center items-center place-content-center p-14">
                {/* grid grid-cols-6 grid-rows-2 */}
                {
                    mySkills.map((item, i) => {
                        return (
                            ////+ "row-start-" + (index + 1) + "col-start-" + (index + 2)
                            <SkillBtns
                                col={(i + 1) < 3 ? (i + 1) : (i + 1) - 3}
                                row={(i + 1) > 3 ? 2 : 1}
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