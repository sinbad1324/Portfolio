
import en from "../../data/lang/en/lang.json";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SkillBtns } from "./skillsBtns";
const navEN = en.Header.nav;

export const Skills = () => {

    const mySkills = [{ title: "React" }, { title: "JavaScript" }, { title: "Tailwind" }, { title: "Sass/Scss" }, { title: "NodeJS" }, { title: "NuxtJS" }]

    return (
        <div className=" relative bg-transparent w-full h-full row-start-4 row-end-5 flex  justify-center  items-center flex-col ">

            <div className="w-full h-fit flex flex-row justify-center items-center md:justify-start">
                <div

                    className=" hover:scale-110 transition-all ease-in duration-75  cursor-pointer w-24 h-12 flex justify-center items-center rounded-full  bg-l-vert-7 dark:bg-d-vert-7 text-xl text-l-vert-12 dark:text-d-vert-12 border  border-d-vert-3 dark:border-d-vert-10 "
                >
                    {navEN[2]}.
                </div>
            </div>

            <div className="m-4 w-[70%] h-[80%] grid grid-cols-2 grid-rows-2 bg-transparent justify-center items-center place-content-center p-14">
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

                            />
                        )
                    })
                }

            </div>

        </div >
    )
}