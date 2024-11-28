/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useLangContext } from '../hooks/useLangContext'
import { getCurrentLang } from '../data/getCurrentLang'
import { IoClose } from "react-icons/io5";

import en from "../data/lang/en/lang.json"
let NavList = []

export default function Nav() {
    const [select, setSelect] = useState()
    const [mobileNav, setMobileNav] = useState(false)
    const [IsHover, setIsHover] = useState()
    const CurrentContextLang = useLangContext();
    const currentLang = getCurrentLang(CurrentContextLang.Lang);


    NavList = currentLang.Header.nav;
    const navEN = en.Header.nav

    const onHandle = (e) => {
        setSelect(e.target.textContent)
        setMobileNav(false)
    }
    const onClose = () => {
        setMobileNav(false)

    }
    const ClickNavHandle = (e) => {
        setMobileNav(!mobileNav)
    }

    return (
        <div className="sm:col-start-2 col-start-3  col-end-4 row-start-1 row-end-3 w-full h-full flex items-center sm:justify-center   flex-row justify-end">

            <nav className="hidden sm:block" >
                <ul className="  w-full h-full flex flex-row  gap-8">
                    {
                        NavList.map((item, i) => (
                            <li key={item} className="max-w-10 w-10  md:w-16 md:max-w-20 text-nowrap  text-sm md:text-lg  text-center max-h-11 h-11  flex justify-center items-center " >
                                <a onClick={onHandle} href={"/#" + navEN[i]} className={`${select == item ? "bg-l-vert-7 rounded-2xl hover:bg-l-vert-8 dark:bg-d-vert-7 dark:hover:bg-d-vert-8 dark:text-d-vert-12 " : ""} active:animate-click w-fit px-2 py-1 text-center`} >
                                    <span className="transition-all ease-in duration-75  hover:text-xl" >
                                        {item}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav >
            <div onClick={ClickNavHandle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`flex sm:hidden  flex-col ${IsHover ? "gap-[5px]" : "gap-1"} items-end px-4 w-full cursor-pointer `} >
                <div className={`w-9 rounded-xl h-[4px] bg-l-vert-6 ${IsHover ? "scale-125" : ""}`}></div>
                <div className={`w-7 rounded-xl h-[4px] bg-l-vert-6 ${IsHover ? "scale-125" : ""}`}></div>
                <div className={`w-8 rounded-xl h-[4px] bg-l-vert-6 ${IsHover ? "scale-125" : ""}`}></div>
            </div>

            <div className={`${mobileNav == false ? "hidden" : "block md:hidden"} p-10 flex flex-row-reverse justify-between items-start absolute w-[100vw] top-0 left-0 h-[100vh] dark:bg-d-vert-2 bg-l-vert-4  `} >
                <IoClose onClick={onClose} className="dark:text-d-vert-12 text-l-vert-12 size-12" />
                <ul className="bg-transparent   w-40 h-full flex flex-col justify-start items-start  gap-8">
                    {
                        NavList.map((item, i) => (
                            <li key={item} className=" w-20 text-nowrap  text-xl  text-center max-h-11 h-11  flex justify-center items-center " >
                                <a onClick={onHandle} href={"/#" + navEN[i]} className={`${select == item ? "bg-l-vert-7 rounded-2xl hover:bg-l-vert-8 dark:bg-d-vert-7 dark:hover:bg-d-vert-8 dark:text-d-vert-12 " : ""} active:animate-click w-fit px-2 py-1 text-center`} >
                                    <span className=" hover:underline transition-all ease-in duration-75  hover:text-xl" >
                                        {item}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div >
    )
}